const slide = document.querySelector(".background.slide");
const dris = document.querySelector(".dris");

onload = () => {
  slide.classList.remove("switch");
  dris.classList.remove("hidden");
};

onscroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 300;
    const opacity = Math.max(1 - scrollY / maxScroll, 0);
    const blur = Math.min((scrollY / maxScroll) * 10, 10);

    dris.style.opacity = opacity;
    dris.style.filter = `blur(${blur}px)`;
  };

const hyperlinks = document.querySelectorAll("a");

hyperlinks.forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    slide.classList.add("switch");
    dris.classList.add("hidden");

    setTimeout(() => {
      window.location.href = link.href;
    }, 500);
  };
});

const link = document.querySelectorAll(".link");
const background = document.querySelector(".background.grid");

link.forEach((item, i) => {
  item.onmouseover = () => {
    background.dataset.active = i;
  };
});
