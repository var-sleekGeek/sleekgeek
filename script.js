// responsive nav bar

const navbar = document.getElementById("navbar");
const banner = document.getElementById("banner");

const adjustBanner = () => {
  const navHeight = navbar.offsetHeight;
  banner.style.marginTop = `${navHeight}px`;
};

window.addEventListener("load", adjustBanner);
window.addEventListener("resize", adjustBanner);



function toggleMenu() {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('active');
    }


// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(element => {
  observer.observe(element);
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  const budget = document.querySelector('input[name="budget"]:checked').value;
  const message = document.getElementById('message').value;

  // Here you would typically send this data to a server
  console.log({ name, email, service, budget, message });

  // Show success message
  alert(`Thanks for your message, ${name}! I'll get back to you soon.`);

  // Reset form
  contactForm.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// TAG LINE

const fadeIns = document.querySelectorAll('.fade-in');

let delay = 0;
fadeIns.forEach((element) => {
  element.style.animationDelay = delay + 's';
  delay += 0.05; // Adjust the delay between each letter
});