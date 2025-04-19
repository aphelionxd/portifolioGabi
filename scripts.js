const nav = document.querySelector('.nav-discreta');

// Configuração do IntersectionObserver para monitorar quando as seções estão visíveis
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Se a seção estiver visível, o menu não ficará sobrepondo
      nav.classList.remove('sobrepondo');
    } else {
      // Se a seção não estiver visível, o menu ficará sobrepondo
      nav.classList.add('sobrepondo');
    }
  });
}, { threshold: 0.1 }); // A 10% de visibilidade, o menu começa a mudar

// Observando todas as seções
document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// A função para voltar ao topo da página ao recarregar
window.onbeforeunload = () => window.scrollTo(0, 0);
