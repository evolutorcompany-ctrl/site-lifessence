import os, re, shutil

print('1. Adjusting CSS weight')
css_file = 'assets/css/style.css'
css = open(css_file, 'r', encoding='utf-8').read()

# Nav logo text weight and stroke
# We will reduce the stroke slightly (approx 10-20% visual weight reduction)
css = re.sub(r'(\.nav-logo-text span:first-child \{.*?font-weight: )600(.*?)-webkit-text-stroke: 0\.5px', r'\g<1>600\g<2>-webkit-text-stroke: 0.35px', css, flags=re.DOTALL)
css = re.sub(r'(\.nav-logo-text span:last-child \{.*?font-weight: )600(.*?)-webkit-text-stroke: 0\.4px', r'\g<1>600\g<2>-webkit-text-stroke: 0.25px', css, flags=re.DOTALL)

# Footer logo text weight and stroke
css = re.sub(r'(\.footer-logo \{.*?font-weight: )600(.*?)-webkit-text-stroke: 0\.5px', r'\g<1>600\g<2>-webkit-text-stroke: 0.35px', css, flags=re.DOTALL)

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css)

print('2. Copying correct Contato image')
src_contato = r'docs\BM_2026-04-22_15_12_03_zrJlk8m3nEQZHCNA\wordpress\wp-content\uploads\2024\09\Atriade-por-Rafael-Slovinscki-44.webp'
dst_contato = r'assets\images\hero-contato-v3.webp'
if os.path.exists(src_contato):
    shutil.copy2(src_contato, dst_contato)
    print('  Copied Atriade-por-Rafael-Slovinscki-44.webp to hero-contato-v3.webp')
else:
    print(f'  MISSING SRC: {src_contato}')

print('3. Fixing HTML files (encoding, cache bust, new contato img)')
html_files = ['index.html', 'sobre.html', 'especialistas.html', 'servicos.html', 'contato.html', 'especialista.html', 'servico.html', 'blog.html']

fixes = [
    ('â€¦', '…'),
    ('â€“', '–'),
    ('â€”', '—'),
    ('â€œ', '“'),
    ('â€\x9d', '”'),
    ('â€™', '’'),
    ('â€º', '›'),
    ('â€¢', '•'),
]

for hf in html_files:
    if not os.path.exists(hf): continue
    content = open(hf, 'r', encoding='utf-8').read()
    orig = content
    
    # Fix encoding
    for bad, good in fixes:
        content = content.replace(bad, good)
            
    # Fix Contato img ref in CSS and preloads
    content = content.replace('hero-contato-v2.webp', 'hero-contato-v3.webp')
            
    # Bump CSS version
    content = re.sub(r'style\.css\?v=5', 'style.css?v=6', content)
    
    if content != orig:
        with open(hf, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  Updated {hf}')

# Also fix CSS for Contato hero
css = open(css_file, 'r', encoding='utf-8').read()
css = css.replace('hero-contato-v2.webp', 'hero-contato-v3.webp')
with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css)

print('4. Fixing data.js encoding')
js_file = 'assets/js/data.js'
js = open(js_file, 'r', encoding='utf-8').read()
js_orig = js
for bad, good in fixes:
    js = js.replace(bad, good)
if js != js_orig:
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'  Updated {js_file}')

print('Applied all fixes.')
