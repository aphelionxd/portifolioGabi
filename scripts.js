window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
});
