// Simple animation trigger on scroll
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
});
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(() => window.location.href = form.querySelector('[name="_next"]').value)
  .catch(() => alert('Error occurred'));
});
