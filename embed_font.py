import base64, re

# Read the font file and encode as base64
with open('assets/fonts/publicaplay-thin.ttf', 'rb') as f:
    font_b64 = base64.b64encode(f.read()).decode()

data_uri = f'data:font/truetype;base64,{font_b64}'

# Read the CSS
css = open('assets/css/style.css', 'r', encoding='utf-8').read()

# Replace the @font-face src with base64 embedded version
old = """@font-face {
  font-family: 'Publica Play';
  src: url('../fonts/publicaplay-thin.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: block;
}"""

new = f"""@font-face {{
  font-family: 'Publica Play';
  src: url('{data_uri}') format('truetype'),
       url('../fonts/publicaplay-thin.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: block;
}}"""

if old in css:
    css = css.replace(old, new)
    # Bump version
    css = re.sub(r'\?v=\d+', '?v=14', css)
    with open('assets/css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("SUCCESS: Font embedded as base64 in CSS")
else:
    print("ERROR: Could not find @font-face block to replace")
    print("Looking for:")
    print(repr(old[:80]))
