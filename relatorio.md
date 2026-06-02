# Relatório de Desacoplamento — Lifessence

**Data:** 2026-06-01  
**Backup analisado:** `BM_2026-04-22_15_12_03_zrJlk8m3nEQZHCNA`  
**Site gerado:** `lifessence-site/`

---

## Funcionalidades WordPress → Substituição

| Funcionalidade WordPress/Elementor | Substituição Estática |
|---|---|
| `wp_nav_menu()` | HTML `<nav>` com links fixos em cada página |
| `get_template_part()` | HTML repetido por página (sem dependência de PHP) |
| `wp_head()` / `wp_footer()` | Tags HTML padrão com links diretos para CSS/JS |
| Elementor Page Builder (JSON) | HTML estruturado manualmente a partir do JSON extraído |
| Advanced Custom Fields (ACF Pro) | Array JavaScript estático em `assets/js/data.js` |
| Custom Post Type — `cmsms_doctor` | 17 doutores hardcoded em `data.js` |
| Custom Post Type — `services` | 16 serviços hardcoded em `data.js` |
| Elementor Forms / WPForms | Formulário HTML + Formspree (fallback: `mailto:`) |
| CMS Masters Elementor Addon | Removido; CSS/JS puro equivalente |
| Join.Chat (WhatsApp Plugin) | Botão flutuante HTML+CSS+JS puro com animação pulse |
| Cookie Law Info / GDPR | Banner simples HTML+CSS+JS com `localStorage` |
| AIOSEO / Google Site Kit | Meta tags SEO no `<head>` de cada página |
| LiteSpeed Cache / Autoptimize | Desnecessário (HTML estático já é rápido) |
| WooCommerce | Removido (sem e-commerce no site) |
| Scroll effects (Elementor) | `IntersectionObserver` nativo (sem jQuery) |
| Counter animation | Counter animado via JS nativo |
| Animate on Scroll | Classe `.fade-in` + `IntersectionObserver` |

---

## Arquivos Gerados

```
lifessence-site/
├── index.html          (18.2 KB) — Página Inicial
├── sobre.html          (12.8 KB) — Sobre Nós
├── especialistas.html  ( 9.0 KB) — Nossos Especialistas
├── servicos.html       (11.7 KB) — Serviços
├── contato.html        (13.4 KB) — Contato
├── blog.html           (12.9 KB) — Blog
└── assets/
    ├── css/style.css   (27.1 KB) — Design System completo
    ├── js/data.js      (24.8 KB) — Dados estáticos (17 doutores + 16 serviços + 6 posts)
    └── js/main.js      ( 7.5 KB) — Comportamentos (nav, animações, formulário, cookies)
```

**Total: 9 arquivos / ~147 KB** (sem contar imagens externas)

---

## Dados Extraídos

### Doutores (17)
| Nome | Especialidade | Foto |
|---|---|---|
| Lucas Pezzi | Psicólogo | uploads/2025/09/9.png |
| Maira Tonetta | Fisioterapeuta / Osteopata | uploads/2025/09/8.png |
| Sabrina Stapasolla | Esteticista / Cosmetóloga | uploads/2025/09/3-1.png |
| Raquel Giovanella | Estética Avançada | uploads/2025/09/4-1.png |
| Francielle Domingues | Professora de Yoga / Reiki | uploads/2025/09/Fotos-Lifessence.png |
| Lídia Castilhos | Podologista | uploads/2025/09/10-1.png |
| Gabrielly Rodrigues | Biomédica / Acupunturista | uploads/2025/09/1-1.png |
| Carolina Nazzari | Fisioterapeuta | uploads/2025/09/13-1.png |
| Emanuele Rizzon | Fisioterapeuta / Pilates | uploads/2025/09/11.png |
| Priscila Pail | Esteticista / Cosmetóloga | uploads/2025/09/5-1.png |
| Ana Carolina Alende | Fisioterapeuta Pélvica | uploads/2025/09/14-1.png |
| Amanda Arruda | Fisioterapeuta / Pilates | uploads/2025/09/15-1.png |
| Mariana Zenato | Nutricionista | uploads/2025/12/Foto-3.jpg |
| Clarice | Especialista | uploads/2025/12/Foto-5.jpg |
| Milena | Especialista | uploads/2025/12/Foto-4.jpg |
| Yasmin | Especialista | uploads/2025/12/Foto-6.jpg |
| Hadassa | Especialista | uploads/2025/12/Foto-7.jpg |

### Serviços (16)
Pilates, Fisioterapia Esportiva, Osteopatia, Estética Facial, Fisioterapia Pélvica,
Medicina de Família, Estética Avançada, Massoterapia, Podologia, Psicologia,
Acupuntura, Yoga, Fisioterapia Funcional, Pilates para Gestantes, Nutrição,
Massoterapia Especializada.

---

## Conteúdo Preservado

✅ Todos os textos das páginas (extraídos do Elementor JSON)  
✅ Fotos de todos os doutores (URLs do servidor original)  
✅ Imagens de todos os serviços (URLs do servidor original)  
✅ Paleta de cores original (#A61680, #008DB1)  
✅ Tipografia original (Inter + Merriweather via Google Fonts)  
✅ Layout e estrutura visual fiel ao original  
✅ Dados biográficos dos médicos (formação, experiência)  
✅ Posts do blog (6 posts, com opção de expandir)  

---

## Itens Pendentes / Configurações Necessárias

> ⚠️ **WhatsApp:** Substituir `5554991234567` pelo número real da Lifessence em todos os arquivos HTML e em `data.js → contact.whatsapp`.

> ⚠️ **Formulário de contato:** Criar conta gratuita em [Formspree.io](https://formspree.io/) e substituir `YOUR_FORM_ID` em `contato.html` pelo ID real.

> ⚠️ **Endereço:** Confirmar o endereço exato da clínica e atualizar em `data.js → contact.address` e no embed do Google Maps em `contato.html`.

> ⚠️ **Doutores sem especialidade:** Clarice, Milena, Yasmin e Hadassa não tinham dados cadastrados no ACF. Atualizar manualmente em `data.js`.

> ⚠️ **Imagens locais:** As imagens estão referenciando `lifessence.com.br`. Se o domínio mudar, é necessário baixar as imagens do backup local (`wp-content/uploads/`) e atualizar os caminhos em `data.js`.

---

## Dependências Removidas

- ❌ WordPress Core
- ❌ Elementor Pro
- ❌ CMS Masters Theme & Addons
- ❌ Advanced Custom Fields (ACF Pro)
- ❌ Custom Post Type UI
- ❌ WPForms / Elementor Forms
- ❌ Join.Chat WhatsApp Plugin
- ❌ Cookie Law Info
- ❌ AIOSEO
- ❌ LiteSpeed Cache
- ❌ Autoptimize
- ❌ UAG Blocks
- ❌ Todos os outros ~30 plugins listados no backup

---

## Como Usar

1. Abrir `lifessence-site/index.html` diretamente no browser
2. Para hospedagem: fazer upload de toda a pasta `lifessence-site/` para o servidor
3. Não requer PHP, banco de dados ou qualquer instalação especial
