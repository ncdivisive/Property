// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isVisible = navLinks.style.display === "flex";
    navLinks.style.display = isVisible ? "none" : "flex";
  });

  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navLinks.style.display = "none";
      }
    });
  });
}

// Contact number reveal
const showNumberBtn = document.getElementById("show-number");
const phoneNumberEl = document.getElementById("phone-number");

if (showNumberBtn && phoneNumberEl) {
  showNumberBtn.addEventListener("click", () => {
    phoneNumberEl.textContent = "82728 04740";
    phoneNumberEl.style.display = "block";
    // Optional: change button text after showing
    showNumberBtn.textContent = "Tap to Call";
    showNumberBtn.setAttribute("onclick", "window.location.href='tel:+918272804740'");
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}