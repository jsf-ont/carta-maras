const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  const htmlPath = 'file://' + path.resolve('carta_maras_A4_backup.html').replace(/\\/g, '/');
  console.log(`Opening ${htmlPath}`);

  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  await page.goto(htmlPath, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  const sections = await page.evaluate(() => {
    return [...document.querySelectorAll('section')].map(s => ({
      class: s.className.split(' ')[0],
      top: s.offsetTop,
      height: s.offsetHeight
    }));
  });
  console.log(`Found ${sections.length} sections`);

  const outputsDir = 'tmp/pdfs';
  if (!fs.existsSync(outputsDir)) fs.mkdirSync(outputsDir, { recursive: true });

  console.log('Capturing sections...');
  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const y = sec.top;
    const h = Math.min(sec.height, 297 * 3.78); 

    await page.evaluate((yPos) => window.scrollTo(0, yPos), y);
    await page.waitForTimeout(500);

    const imgPath = `${outputsDir}/page_${String(i).padStart(2, '0')}.png`;
    await page.screenshot({
      path: imgPath,
      type: 'png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 794, height: Math.min(h, 1123) }
    });
    console.log(`  Section ${i}: ${sec.class} -> ${imgPath}`);
  }

  await browser.close();
  console.log('Screenshots captured!');
})();