let lastScrollY = window.scrollY;
const nav = document.querySelector(".top-nav");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    nav.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
});

function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal:not(.reveal-ready)");

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(element => {
    element.classList.add("reveal-ready");
    revealObserver.observe(element);
  });
}

initRevealAnimations();

const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".top-nav");

if (menuToggle && topNav) {
  menuToggle.addEventListener("click", () => {
    topNav.classList.toggle("menu-open");
  });
}