// ===== Scroll Reveal =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const h = window.innerHeight;
  reveals.forEach((el, i) => {
    if (el.getBoundingClientRect().top < h - 120) {
      el.style.transitionDelay = `${i * 0.15}s`;
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===== Image Slider =====
document.querySelectorAll(".game-images").forEach(slider => {
  const imgs = slider.querySelectorAll("img");
  const next = slider.querySelector(".next");
  const prev = slider.querySelector(".prev");
  let i = 0;

  const show = n => {
    imgs.forEach(img => img.classList.remove("active"));
    imgs[n].classList.add("active");
  };

  next.onclick = () => {
    i = (i + 1) % imgs.length;
    show(i);
  };

  prev.onclick = () => {
    i = (i - 1 + imgs.length) % imgs.length;
    show(i);
  };

  setInterval(() => {
    i = (i + 1) % imgs.length;
    show(i);
  }, 3000);
});
