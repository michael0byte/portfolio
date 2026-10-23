const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el, i) => {
    if (el.getBoundingClientRect().top < windowHeight - 80) {
      el.style.transitionDelay = `${i * 0.1}s`;
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

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

  let autoSlide = setInterval(() => {
    i = (i + 1) % imgs.length;
    show(i);
  }, 4000);

  slider.addEventListener("mouseenter", () => clearInterval(autoSlide));
  slider.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      i = (i + 1) % imgs.length;
      show(i);
    }, 4000);
  });
});

const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('aboutModal');
  const triggers = document.querySelectorAll('.about-trigger');
  const closeBtn = document.querySelector('.close-btn');

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('show');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }

  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }
});

const modalImage = document.getElementById("imageModal");
const modalImgContent = document.getElementById("expandedImg");

function openModal(element) {
  if (modalImage && modalImgContent) {
    const img = element.querySelector('img');
    modalImage.style.display = "flex";
    modalImgContent.src = img.src;
  }
}

function closeModal() {
  if (modalImage) {
    modalImage.style.display = "none";
  }
}

if (modalImage) {
  modalImage.addEventListener('click', function(e) {
    if (e.target === modalImage) {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const aiBtns = document.querySelectorAll('.ai-btn');
  const aiDynamicImg = document.getElementById('aiDynamicImg');

  if (aiBtns.length > 0 && aiDynamicImg) {
    aiBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        aiBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const newImgSrc = btn.getAttribute('data-img');
        
        aiDynamicImg.style.opacity = '0';
        setTimeout(() => {
          aiDynamicImg.src = newImgSrc;
          aiDynamicImg.style.opacity = '1';
        }, 200); 
      });
    });
  }
});