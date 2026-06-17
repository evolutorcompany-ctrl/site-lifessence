/**
 * main.js — Comportamentos do site Lifessence
 * Substitui: wp_footer hooks, Elementor widgets JS,
 *            WhatsApp plugin, Cookie Law Info plugin
 */

/* ── Navigation ──────────────────────────────────────────── */
(function initNav() {
  const nav    = document.getElementById('main-nav');
  const burger = document.getElementById('nav-burger');
  const mobile = document.getElementById('nav-mobile');

  // Scroll: add shadow
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Burger toggle
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('#nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobile) mobile.classList.remove('open');
      if (burger) burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link highlight
  const currentPage = window.location.pathname.split('/').pop() || '/';
  document.querySelectorAll('.nav-menu a, #nav-mobile a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
})();

/* ── Scroll Animations (IntersectionObserver) ────────────── */
(function initAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    io.observe(el);
  });
})();

/* ── Counter Animation ───────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = Math.ceil(target / 60);
      const timer  = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 25);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
})();

/* ── Cookie Banner ───────────────────────────────────────── */
(function initCookies() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  if (localStorage.getItem('ls_cookies_ok')) return;

  setTimeout(() => banner.classList.add('show'), 1200);

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('ls_cookies_ok', '1');
    banner.classList.remove('show');
  });
  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    banner.classList.remove('show');
  });
})();

/* ── Contact Form (Formspree fallback → mailto) ─────────── */
(function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const orig = btn.textContent;
    btn.textContent = 'Enviando…';
    btn.disabled = true;

    const data = new FormData(form);

    // Try Formspree (replace YOUR_ID with real Formspree endpoint)
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        showMsg(form, '✓ Mensagem enviada! Entraremos em contato em breve.', 'success');
        form.reset();
      } else {
        throw new Error('Formspree error');
      }
    } catch {
      // Fallback: mailto
      const name    = data.get('name') || '';
      const email   = data.get('email') || '';
      const msg     = data.get('message') || '';
      const subject = encodeURIComponent(`Contato via site – ${name}`);
      const body    = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${msg}`);
      window.location.href = `mailto:lifessence@lifessence.com.br?subject=${subject}&body=${body}`;
    }

    btn.textContent = orig;
    btn.disabled = false;
  });

  function showMsg(parent, text, type) {
    let el = parent.querySelector('.form-msg');
    if (!el) {
      el = document.createElement('p');
      el.className = 'form-msg';
      el.style.cssText = 'margin-top:16px;font-weight:600;font-size:.9rem;';
      parent.appendChild(el);
    }
    el.textContent = text;
    el.style.color = type === 'success' ? '#008DB1' : '#A61680';
  }
})();

/* ── Smooth scrolling for anchor links ───────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Populate Dynamic Content ────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Doctors grid
  const doctorsGrid = document.getElementById('doctors-grid');
  if (doctorsGrid && typeof LIFESSENCE !== 'undefined') {
    doctorsGrid.innerHTML = LIFESSENCE.doctors.map(renderDoctorCard).join('');
    // Re-observe new elements
    document.querySelectorAll('#doctors-grid .fade-in').forEach(el => {
      new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.1 }).observe(el);
    });
  }

  // Services grid
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid && typeof LIFESSENCE !== 'undefined') {
    servicesGrid.innerHTML = LIFESSENCE.services.map(renderServiceCard).join('');
  }

  // Blog grid
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid && typeof LIFESSENCE !== 'undefined') {
    blogGrid.innerHTML = LIFESSENCE.posts.map(renderBlogCard).join('');
  }
});

/* ── Blog Card Renderer ──────────────────────────────────── */
function renderBlogCard(post) {
  const date = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric'
  });
  return `
    <article class="blog-card fade-in">
      <div class="blog-card-img">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-card-body">
        <span class="blog-tag">${post.category}</span>
        <h5>${post.title}</h5>
        <p>${post.excerpt}</p>
        <span class="blog-meta">${date}</span>
      </div>
    </article>`;
}
