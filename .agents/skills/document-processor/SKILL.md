---
name: document-processor
description: >
  Universal document processing skill for PDF, Word (.docx/.doc), and Excel (.xlsx/.xls) files.
  Use when user wants to: read, convert, generate, edit, or transform documents.
  Trigger phrases: "genera PDF", "convierte a PDF", "crea documento Word", "haz un Excel",
  "exporta a PDF", "lee un PDF", "edita Word", "documento de Word", "hoja de cálculo",
  "PDF desde HTML", "imprimir como PDF", "genera reporte", "crea documento", "word",
  "excel", "spreadsheet", "convertir documento", "generar documento"
---

# Document Processor Skill

Universal document processing — PDF, Word, Excel. Handles reading, conversion, generation, and transformation.

---

## Supported Formats

| Format | Extensions | Read | Write | Convert From |
|--------|------------|------|-------|-------------|
| **PDF** | .pdf | ✅ | ✅ | HTML, Word, Images |
| **Word** | .docx, .doc | ✅ | ✅ | PDF, HTML, Markdown |
| **Excel** | .xlsx, .xls | ✅ | ✅ | CSV, HTML, Markdown |

---

## PDF Operations

### Generate PDF from HTML
Use when user wants to convert HTML to PDF (e.g., restaurant menu, report, invoice).

**Best tools**: WeasyPrint, wkhtmltopdf, Playwright, Puppeteer
**Fallback**: Browser print dialog (user does it manually)

```bash
# WeasyPrint (best for styled HTML/CSS)
weasyprint input.html output.pdf

# wkhtmltopdf
wkhtmltopdf --page-size A4 --orientation Portrait input.html output.pdf

# Playwright (headless Chrome)
npx playwright screenshot --output-format=pdf input.html output.pdf
```

### Read PDF
Extract text content for analysis or transformation.

```bash
# pdftotext (poppler-utils)
pdftotext input.pdf - | head -100

# pdfgrep (search inside PDF)
pdfgrep "pattern" input.pdf

# Python with PyPDF2
python3 -c "import PyPDF2; print(PyPDF2.PdfReader('input.pdf').pages[0].extract_text())"
```

### Merge/Split PDFs
```bash
# Merge
pdftk file1.pdf file2.pdf cat output combined.pdf

# Or use pdftk
pdftk input.pdf burst output page_%02d.pdf
```

---

## Word Operations

### Read Word Document
Extract text and structure from .docx files.

```bash
# docx2txt (Python)
python3 -c "import docx2txt; print(docx2txt.process('document.docx'))"

# pandoc (convert to markdown)
pandoc document.docx -t markdown -o output.md

# python-docx (structured read)
python3 -c "from docx import Document; doc = Document('document.docx'); [print(p.text) for p in doc.paragraphs]"
```

### Generate Word Document
Create .docx from Markdown, HTML, or programmatically.

```bash
# pandoc (Markdown to Word)
pandoc document.md -o document.docx

# python-docx (programmatic creation)
python3 << 'EOF'
from docx import Document
from docx.shared import Pt, Inches
doc = Document()
doc.add_heading('Title', 0)
doc.add_paragraph('Content text')
doc.save('output.docx')
EOF
```

### Edit Existing Word Document
Modify content while preserving formatting.

```bash
# python-docx for editing
python3 << 'EOF'
from docx import Document
doc = Document('input.docx')
for para in doc.paragraphs:
    if 'replace-this' in para.text:
        para.text = para.text.replace('replace-this', 'with-this')
doc.save('output.docx')
EOF
```

---

## Excel Operations

### Read Excel
Extract data from .xlsx/.xls files.

```bash
# Python with openpyxl
python3 << 'EOF'
import openpyxl
wb = openpyxl.load_workbook('data.xlsx')
for sheet in wb.sheetnames:
    print(f"=== Sheet: {sheet} ===")
    ws = wb[sheet]
    for row in ws.iter_rows(values_only=True):
        print(row)
EOF

# pandas (for data analysis)
python3 << 'EOF'
import pandas as pd
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')
print(df.head())
EOF
```

### Generate Excel
Create spreadsheets with formatted cells, formulas, multiple sheets.

```bash
# Python with openpyxl
python3 << 'EOF'
import openpyxl
wb = openpyxl.Workbook()
ws = wb.active
ws.title = 'Data'

# Headers
headers = ['Item', 'Quantity', 'Price', 'Total']
ws.append(headers)

# Data rows
data = [
    ['Item 1', 10, 25.50],
    ['Item 2', 5, 18.00],
]
for row in data:
    ws.append(row)

# Formula for total
ws['D1'] = 'Total'
ws['D2'] = '=B2*C2'

# Format header row
from openpyxl.styles import Font, PatternFill
ws['A1'].font = Font(bold=True)
ws['A1'].fill = PatternFill('solid', fgColor='C4380A')

wb.save('output.xlsx')
EOF
```

### Create Excel from Data
Generate reports with tables and charts.

```bash
# pandas to Excel with formatting
python3 << 'EOF'
import pandas as pd
from openpyxl import load_workbook
from openpyxl.styles import Font, PatternFill, Alignment

df = pd.DataFrame({
    'Item': ['Lomo Fino', 'Tomahawk', 'T-Bone'],
    'Price': [44.95, 99.95, 69.95],
    'Weight': ['250g', '900g', '500g']
})

df.to_excel('menu.xlsx', index=False, sheet_name='Cortes')

# Add formatting
wb = load_workbook('menu.xlsx')
ws = wb.active
ws['A1'].font = Font(bold=True, color='FFFFFF')
ws['A1'].fill = PatternFill('solid', fgColor='C4380A')

wb.save('menu.xlsx')
EOF
```

---

## Conversion Between Formats

### HTML → PDF
```bash
weasyprint carta.html carta.pdf
```

### Markdown → Word
```bash
pandoc readme.md -o readme.docx
```

### Excel → CSV
```bash
python3 << 'EOF'
import pandas as pd
df = pd.read_excel('data.xlsx')
df.to_csv('data.csv', index=False)
EOF
```

### PDF → Text
```bash
pdftotext document.pdf output.txt
```

### HTML → Word
```bash
pandoc page.html -o page.docx
```

### Markdown → PDF (via HTML)
```bash
pandoc document.md -o document.html
weasyprint document.html document.pdf
```

---

## Practical Templates

### Restaurant Menu / Carta → PDF (A4 Print Ready)

Use WeasyPrint with print-optimized CSS:

```python
python3 << 'EOF'
import subprocess

html_content = """
<!DOCTYPE html>
<html>
<head>
<style>
@page { size: A4 portrait; margin: 0; }
body { font-family: 'Georgia', serif; }
.section { page-break-after: always; }
</style>
</head>
<body>
<!-- your HTML content here -->
</body>
</html>
"""

with open('temp.html', 'w') as f:
    f.write(html_content)

subprocess.run(['weasyprint', 'temp.html', 'output.pdf'])
EOF
```

### Excel Report Template

```python
python3 << 'EOF'
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.chart import BarChart, Reference

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Reporte"

# Header styling
header_fill = PatternFill('solid', fgColor='C4380A')
header_font = Font(bold=True, color='FFFFFF', size=12)

# Title
ws.merge_cells('A1:E1')
ws['A1'] = 'REPORTE DE VENTAS'
ws['A1'].font = Font(bold=True, size=16)
ws['A1'].alignment = Alignment(horizontal='center')

# Headers
headers = ['Producto', 'Enero', 'Febrero', 'Marzo', 'Total']
for col, header in enumerate(headers, 1):
    cell = ws.cell(row=3, column=col, value=header)
    cell.fill = header_fill
    cell.font = header_font

# Data
data = [
    ['Lomo Fino', 120, 150, 180],
    ['Tomahawk', 80, 95, 110],
    ['T-Bone', 100, 90, 120],
]

for row_idx, row_data in enumerate(data, 4):
    for col_idx, value in enumerate(row_data, 1):
        ws.cell(row=row_idx, column=col_idx, value=value)

# Totals formula
ws['E4'] = '=SUM(B4:D4)'
ws['E5'] = '=SUM(B5:D5)'
ws['E6'] = '=SUM(B6:D6)'

wb.save('reporte_ventas.xlsx')
EOF
```

### Word Document from Template

```python
python3 << 'EOF'
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE

doc = Document()

# Title
title = doc.add_heading('MARAS', 0)
title.alignment = WD_ALIGN_PARAGRAPH.CENTER

# Subtitle
subtitle = doc.add_paragraph('Steakhouse & Coctelería')
subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
subtitle.runs[0].font.size = Pt(14)
subtitle.runs[0].font.italic = True

# Section
doc.add_heading('Bienvenida', 1)
doc.add_paragraph('Una tradición de excelencia gastronómica.')

# Table
table = doc.add_table(rows=4, cols=3)
table.style = 'Table Grid'
# ... fill table data ...

doc.save('carta.docx')
EOF
```

---

## Workflow Quick Reference

| Task | Command |
|------|---------|
| HTML to PDF (WeasyPrint) | `weasyprint input.html output.pdf` |
| HTML to PDF (wkhtmltopdf) | `wkhtmltopdf input.html output.pdf` |
| Markdown to Word | `pandoc input.md -o output.docx` |
| Excel to CSV | `python3 -c "import pandas as pd; pd.read_excel('f.xlsx').to_csv('f.csv')"` |
| Read PDF text | `pdftotext input.pdf -` |
| Create Excel report | `python3 create_excel.py` |
| Create Word doc | `python3 create_word.py` |

---

## Key Dependencies to Know About

**Python libraries to install if missing:**
- `weasyprint` — HTML to PDF (pip install weasyprint)
- `python-docx` — Read/write Word (pip install python-docx)
- `openpyxl` — Read/write Excel (pip install openpyxl)
- `pandas` — Data analysis + Excel/CSV (pip install pandas)
- `PyPDF2` — Read PDF (pip install PyPDF2)
- `markdown` — Markdown processing (pip install markdown)

**System tools:**
- `pdftotext` / `pdfinfo` — part of poppler-utils
- `pandoc` — universal document converter
- `wkhtmltopdf` — HTML to PDF (legacy, Chromium-based)

---

## Anti-Patterns

1. **Don't assume pip/npm available** — check first, fall back to browser method
2. **Don't try to edit complex PDFs** — convert to Word, edit, convert back (loses formatting)
3. **Don't generate massive Excel files in memory** — write row by row for large datasets
4. **Don't use deprecated .xls format** — always use .xlsx unless user explicitly requires old format
5. **Don't forget print CSS** — when generating print-ready documents, always include @page rules

## Output Format

When processing a document, report:
- What was done
- Input file (if provided)
- Output file created
- Any errors or limitations
- How to open/use the result
