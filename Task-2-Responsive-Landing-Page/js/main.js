document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Animate hamburger to X (Optional simple CSS change could be added)
    hamburger.querySelector("i").classList.toggle("fa-times");
    hamburger.querySelector("i").classList.toggle("fa-bars");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.querySelector("i").classList.remove("fa-times");
      hamburger.querySelector("i").classList.add("fa-bars");
    });
  });

  // 2. Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      root: null,
      threshold: 0.15, // Trigger when 15% of element is visible
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // 3. Simple Form Validation/Submission Mock
  const form = document.getElementById("newsletterForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const btn = form.querySelector("button");

    if (emailInput.value) {
      const originalText = btn.innerText;
      btn.innerText = "Subscribed!";
      btn.style.backgroundColor = "#a7c957"; // Change to green
      form.reset();

      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; // Revert color
      }, 3000);
    }
  });
});
