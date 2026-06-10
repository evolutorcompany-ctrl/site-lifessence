import os, re

print('1. Fixing CSS (font-display and font-weight/stroke)')
css_file = 'assets/css/style.css'
css = open(css_file, 'r', encoding='utf-8').read()

# Font display - swap to block
css = css.replace('font-display: swap;', 'font-display: block;')

# Nav logo text weight and stroke
css = re.sub(r'(\.nav-logo-text span:first-child \{.*?font-weight: )500(.*?)-webkit-text-stroke: 0\.2px', r'\g<1>600\g<2>-webkit-text-stroke: 0.5px', css, flags=re.DOTALL)
css = re.sub(r'(\.nav-logo-text span:last-child \{.*?font-weight: )500(.*?)-webkit-text-stroke: 0\.2px', r'\g<1>600\g<2>-webkit-text-stroke: 0.4px', css, flags=re.DOTALL)

# Footer logo text weight and stroke
css = re.sub(r'(\.footer-logo \{.*?font-weight: )500(.*?)-webkit-text-stroke: 0\.2px', r'\g<1>600\g<2>-webkit-text-stroke: 0.5px', css, flags=re.DOTALL)

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css)

print('2. Fixing HTML files (encoding, preloads, cache bust)')
html_files = ['index.html', 'sobre.html', 'especialistas.html', 'servicos.html', 'contato.html', 'especialista.html', 'servico.html', 'blog.html']

HERO_MAP = {
    'sobre.html':         'assets/images/hero-sobre-v2.webp',
    'especialistas.html': 'assets/images/hero-especialistas-v2.webp',
    'servicos.html':      'assets/images/hero-servicos-v2.webp',
    'contato.html':       'assets/images/hero-contato-v2.webp',
    'blog.html':          'assets/images/hero-bg.webp',
}

for hf in html_files:
    if not os.path.exists(hf): continue
    content = open(hf, 'r', encoding='utf-8').read()
    
    # Fix encoding
    content = content.replace('âœ¦', '✦')
    content = content.replace('â•¦', '✦')
    content = content.replace('Ã§', 'ç')
    content = content.replace('Ã£', 'ã')
    content = content.replace('Ã¡', 'á')
    content = content.replace('Ã©', 'é')
    content = content.replace('Ãª', 'ê')
    content = content.replace('Ã\xad', 'í') # hex ad is i-acute in some encodings, but lets use literal
    content = content.replace('Ã³', 'ó')
    content = content.replace('Ã´', 'ô')
    content = content.replace('Ãµ', 'õ')
    content = content.replace('Ãº', 'ú')
    content = content.replace('Ã', 'Á') # Á as fallback for remaining Ã
    
    # Preloads
    font_preload = '<link rel=\"preload\" href=\"assets/fonts/publicaplay-thin.ttf\" as=\"font\" type=\"font/truetype\" crossorigin>'
    if font_preload not in content:
        content = content.replace('<head>', f'<head>\n  {font_preload}')
        
    hero_img = HERO_MAP.get(hf)
    if hero_img:
        img_preload = f'<link rel=\"preload\" href=\"{hero_img}\" as=\"image\" fetchpriority=\"high\">'
        if img_preload not in content:
            content = content.replace('<head>', f'<head>\n  {img_preload}')
            
    # Bump CSS version
    content = re.sub(r'style\.css\?v=\d+', 'style.css?v=5', content)
    content = re.sub(r'style\.css\"', 'style.css?v=5\"', content)
    
    with open(hf, 'w', encoding='utf-8') as f:
        f.write(content)

print('Applied all fixes.')
