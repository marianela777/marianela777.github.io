// Mobile menu toggle
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

// Active nav link highlighting (as you scroll)
const links = Array.from(document.querySelectorAll(".nav-link"));
const sections = links
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const setActive = () => {
  const scrollPos = window.scrollY + 120; // offset for sticky header
  let currentId = "home";

  for (const section of sections) {
    if (section.offsetTop <= scrollPos) currentId = section.id;
  }

  links.forEach(a => {
    const href = a.getAttribute("href").replace("#", "");
    a.classList.toggle("active", href === currentId);
  });
};

window.addEventListener("scroll", setActive);
window.addEventListener("load", setActive);

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

