// Mobile Navigation Toggle
document.getElementById('navToggle').addEventListener('click', function() {
 document.getElementById('navMenu').classList.toggle('show');
 this.innerHTML = document.getElementById('navMenu').classList.contains('show') ?
  '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#navMenu a').forEach(link => {
 link.addEventListener('click', () => {
  document.getElementById('navMenu').classList.remove('show');
  document.getElementById('navToggle').innerHTML = '<i class="fas fa-bars"></i>';
 });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href');
  if (targetId === '#') return;
  
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
   window.scrollTo({
    top: targetElement.offsetTop - 80,
    behavior: 'smooth'
   });
  }
 });
});

// Header scroll effect with throttling for performance
let scrollTimeout;
window.addEventListener('scroll', function() {
 if (!scrollTimeout) {
  scrollTimeout = setTimeout(function() {
   const header = document.querySelector('header');
   if (window.scrollY > 100) {
    header.style.padding = '5px 0';
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
   } else {
    header.style.padding = '0';
    header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
   }
   scrollTimeout = null;
  }, 10);
 }
});