document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
const toggler = document.querySelector('.navbar-toggler');
const collapseElement = document.querySelector('.navbar-collapse');

collapseElement.addEventListener('shown.bs.collapse', () => {
    toggler.classList.add('focus-visible');
});

collapseElement.addEventListener('hidden.bs.collapse', () => {
    toggler.classList.remove('focus-visible');
});
collapseElement.addEventListener('hidden.bs.collapse', () => {
  toggler.classList.remove('focus-visible');
  toggler.blur(); // Quita el foco del botón
});