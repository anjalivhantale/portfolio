const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const toast = document.getElementById('toast');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Thank you! Your message has been sent successfully.');
  event.target.reset();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
