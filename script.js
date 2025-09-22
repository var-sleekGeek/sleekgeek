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
// Form Validation

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const serviceSelect = document.getElementById("service");
    const messageInput = document.getElementById("message");
    const agreeCheckbox = document.getElementById("agree");

    nameInput.addEventListener("input", () => {
        const error = document.getElementById("nameError");
        if (nameInput.value.trim() === "") {
            error.textContent = "Name is required.";
        } else {
            error.textContent = "";
        }
    });

    emailInput.addEventListener("input", () => {
        const error = document.getElementById("emailError");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            error.textContent = "Enter a valid email.";
        } else {
            error.textContent = "";
        }
    });

    serviceSelect.addEventListener("change", () => {
        const error = document.getElementById("serviceError");
        if (serviceSelect.value === "") {
            error.textContent = "Please select a service.";
        } else {
            error.textContent = "";
        }
    });

    messageInput.addEventListener("input", () => {
        const error = document.getElementById("messageError");
        if (messageInput.value.trim() === "") {
            error.textContent = "Project details are required.";
        } else {
            error.textContent = "";
        }
    });

    agreeCheckbox.addEventListener("change", () => {
        const error = document.getElementById("agreeError");
        error.textContent = agreeCheckbox.checked ? "" : "You must agree to the privacy policy.";
    });
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