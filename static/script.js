document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('audio').forEach(audio => {
    const wrapper = audio.closest('.episode-item__audio');
    if (!wrapper) return;
    audio.addEventListener('waiting', () => wrapper.classList.add('is-loading'));
    audio.addEventListener('canplay', () => wrapper.classList.remove('is-loading'));
    audio.addEventListener('playing', () => wrapper.classList.remove('is-loading'));
  });

  const toggle = document.querySelector('.site-nav__toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
