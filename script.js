// ===== Scroll Reveal Animation =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el, i) => {
    if (el.getBoundingClientRect().top < windowHeight - 100) {
      el.style.transitionDelay = `${i * 0.12}s`;
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===== Responsive Image Slider =====
document.querySelectorAll(".game-images").forEach(slider => {
  const imgs = slider.querySelectorAll("img");
  const next = slider.querySelector(".next");
  const prev = slider.querySelector(".prev");
  let i = 0;

  if (imgs.length === 0) return;

  const show = n => {
    imgs.forEach(img => img.classList.remove("active"));
    imgs[n].classList.add("active");
  };

  if (next && prev) {
    next.onclick = (e) => {
      e.stopPropagation();
      i = (i + 1) % imgs.length;
      show(i);
    };

    prev.onclick = (e) => {
      e.stopPropagation();
      i = (i - 1 + imgs.length) % imgs.length;
      show(i);
    };
  }

  // Auto slide every 4 seconds
  let autoSlide = setInterval(() => {
    i = (i + 1) % imgs.length;
    show(i);
  }, 4000);

  // Pause on hover
  slider.addEventListener("mouseenter", () => clearInterval(autoSlide));
  slider.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      i = (i + 1) % imgs.length;
      show(i);
    }, 4000);
  });
});
