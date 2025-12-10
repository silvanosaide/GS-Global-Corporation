// FAQ toggle com animação e acessibilidade
document.querySelectorAll('.faq .q').forEach(q => {
  const title = q.querySelector('.q-title');

  title.addEventListener('click', () => {
    q.classList.toggle('open');
  });

  q.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      q.classList.toggle('open');
    }
  });
});


// Animações ao scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
