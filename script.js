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

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const serviceSelect = document.getElementById("service");
  const budgetSelect = document.querySelector('input[name="budget"]:checked');
  const messageInput = document.getElementById("message");
  const agreeCheckbox = document.getElementById("agree");
  const errors = false;

  // Validate all fields before submission

  const nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    errors = true;
  } else {
    nameError.textContent = "";
  }

  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    errors = true;
  } else {
    emailError.textContent = "";
  }

  const serviceError = document.getElementById("serviceError");
  if (serviceSelect.value === "") {
    serviceError.textContent = "Please select a service.";
    errors = true;
  } else {
    serviceError.textContent = "";
  }

  const budgetError = document.getElementById("budgetError");
  if (!budgetSelect) {
    budgetError.textContent = "Please select a your budget.";
    errors = true;
  } else {
    serviceError.textContent = "";
  }

  const messageError = document.getElementById("messageError");
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Project details are required.";
    errors = true;
  } else {
    messageError.textContent = "";
  }

  const agreeError = document.getElementById("agreeError");
  if (!agreeCheckbox.checked) {
    agreeError.textContent = "You must agree to the privacy policy.";
    errors = true;
  } else {
    agreeError.textContent = "";
  }

  if (errors == false) {
    contactForm.submit();
  }

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
  delay += 0.07; // Adjust the delay between each letter
});

