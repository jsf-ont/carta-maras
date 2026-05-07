const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage({
    // A4 at 96 DPI: 794 x 1123 pixels
    // But we need to capture full scrollable content
    viewport: { width: 794, height: 10000 }
  });

  const url = 'https://jsf-ont.github.io/carta-maras/carta_maras_A4_backup.html';

  console.log(`Opening ${url}...`);
  await page.goto(url, {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  console.log('Waiting for fonts and images...');
  await page.waitForTimeout(4000);

  // Check page dimensions
  const dims = await page.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    scrollWidth: document.documentElement.scrollWidth,
    bodyHeight: document.body.scrollHeight
  }));
  console.log(`Page dimensions: ${dims.scrollWidth}x${dims.scrollHeight}`);

  // Get all sections and their positions
  const sections = await page.evaluate(() => {
    const secs = document.querySelectorAll('section');
    return [...secs].map(s => ({
      class: s.className,
      rect: s.getBoundingClientRect(),
      top: s.offsetTop
    }));
  });
  console.log(`Found ${sections.length} sections`);

  // Generate PDF using CSS @page rules
  console.log('Generating PDF...');
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    pageRanges: '1-15'
  });

  const fs = require('fs');
  fs.writeFileSync('carta_maras.pdf', pdfBuffer);

  console.log('PDF saved: carta_maras.pdf');
  console.log(`Size: ${(pdfBuffer.length / 1024 / 1024).toFixed(2)} MB`);

  await browser.close();
  console.log('Done!');
})();
