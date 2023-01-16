//  Carousel

$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true
  });
});

// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
  header.classList.toggle("menu-open");
};

// Counter

const counters = document.querySelectorAll(".counter");
const speed = 400;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("data-number");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 2);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});
