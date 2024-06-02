function header() {
  const burgerButton = document.querySelector(".burger-icon");
  const burgerButtonClose = document.querySelector(".burger-icon-close");
  const headerMenu = document.querySelector(".menu-items");

  burgerButton.addEventListener("click", toggleMenu);
  burgerButtonClose.addEventListener("click", toggleMenu);

  function toggleMenu() {
    headerMenu.classList.toggle("menu-items-active");
  }
}
function reviews() {
  const reviewsContainer = document.querySelector(".card-slider");
  const previousButton = document.querySelector(".reviews-arrow-left");
  const nextButton = document.querySelector(".reviews-arrow-right");

  previousButton.addEventListener("click", leftScroll);

  function leftScroll() {
    const scrollAmount = -reviewsContainer.offsetWidth / scrollSliderCount();
    reviewsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    if (reviewsContainer.scrollLeft === 0) {
      reviewsContainer.scrollTo({
        left: reviewsContainer.scrollWidth - reviewsContainer.offsetWidth,
        behavior: "smooth",
      });
    }
  }

  nextButton.addEventListener("click", rightScroll);

  function rightScroll() {
    const scrollAmount = reviewsContainer.offsetWidth / scrollSliderCount();
    reviewsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    if (
      reviewsContainer.scrollLeft + reviewsContainer.offsetWidth >=
      reviewsContainer.scrollWidth - 30
    ) {
      reviewsContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }

  function scrollSliderCount() {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 480) {
      return 2;
    }
    return 1;
  }
}
function footer() {
  const footerButton = document.querySelector(".footer-button");
  footerButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
function accordion() {
  const accordionItem = document.querySelectorAll(".accordion-item");
  accordionItem.forEach((item) => {
    item
      .querySelector(".accordion-item-header")
      .addEventListener("click", () => {
        item.classList.toggle("open");
      });
  });
}

function createSlideAnimation(selector, yStart, yEnd, duration) {
  const timeline = new TimelineMax();
  timeline
    .set(selector, { y: yStart, opacity: 0 })
    .to(selector, duration, { y: yEnd, opacity: 1 });
  return timeline;
}

function createFeatureAnimation(
  selector,
  xStart,
  xEnd,
  duration,
  displayStart = "block",
  displayEnd = "block"
) {
  const timeline = new TimelineMax();
  timeline
    .set(selector, { display: displayStart, x: xStart, opacity: 0 })
    .to(selector, duration, { display: displayEnd, x: xEnd, opacity: 1 });
  return timeline;
}

function createScrollScene(triggerElement, triggerHook, duration, timeline) {
  const controller = new ScrollMagic.Controller();

  return new ScrollMagic.Scene({
    triggerElement: triggerElement,
    triggerHook: triggerHook,
    duration: duration,
  })
    .setTween(timeline)
    .addTo(controller);
}

function initAnimations() {
  const slideAnimations = [
    {
      selector: ".slide-1",
      yStart: "50%",
      yEnd: "0%",
      duration: 1,
      triggerElement: "#home",
      triggerHook: 0,
      durationValue: "100%",
    },
    {
      selector: ".slide-2",
      yStart: window.innerWidth < 480 ? "10%" : "70%",
      yEnd: "0%",
      duration: 2,
      triggerElement:
        window.innerWidth < 480 ? ".slide-title-1" : ".about-title",
      triggerHook: 0,
      durationValue: "100%",
    },
    {
      selector: ".slide-3",
      yStart: window.innerWidth < 480 ? "10%" : "70%",
      yEnd: "0%",
      duration: 2,
      triggerElement:
        window.innerWidth < 480 ? ".slide-title-2" : ".slide-title-1",
      triggerHook: 0,
      durationValue: "100%",
    },
    {
      selector: ".slide-4",
      yStart: window.innerWidth < 480 ? "10%" : "70%",
      yEnd: "0%",
      duration: 2,
      triggerElement:
        window.innerWidth < 480 ? ".slide-title-3" : ".slide-title-2",
      triggerHook: 0,
      durationValue: "100%",
    },
  ];

  const featureAnimations = [
    {
      selector: "#features",
      xStart: "0%",
      xEnd: "0%",
      duration: 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement: window.innerWidth < 480 ? ".home-info" : ".home-info",
      triggerHook: 0,
      durationValue: "30%",
    },
    {
      selector: ".feature-info-consumers",
      xStart: "-100%",
      xEnd: "0%",
      duration: 7,
      displayStart: "block",
      displayEnd: "block",
      triggerElement: window.innerWidth < 480 ? ".home-info" : ".home-info",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "30%" : "70%",
    },
    {
      selector: ".features-consumers_img",
      xStart: "100%",
      xEnd: "0%",
      duration: window.innerWidth < 480 ? 1 : 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement: window.innerWidth < 480 ? ".home-info" : ".home-info",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "15%" : "70%",
    },
    {
      selector: ".feature-info-specialist",
      xStart: "50%",
      xEnd: "0%",
      duration: 15,
      displayStart: "block",
      displayEnd: "block",
      triggerElement: window.innerWidth < 480 ? "#features" : "#features",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "100%" : "30%",
    },
    {
      selector: ".features-specialist_img",
      xStart: "-50%",
      xEnd: "0%",
      duration: window.innerWidth < 480 ? 1 : 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement: window.innerWidth < 480 ? "#features" : "#features",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "120%" : "30%",
    },
    {
      selector: ".feature-info-busy",
      xStart: window.innerWidth < 480 ? "-100%" : "-100%",
      xEnd: "0%",
      duration: 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement:
        window.innerWidth < 480 ? ".features-text-consumers" : "#features",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "150%" : "100%",
    },
    {
      selector: ".features-busy_img",
      xStart: "50%",
      xEnd: "0%",
      duration: window.innerWidth < 480 ? 1 : 1,
      displayStart: "block",
      displayEnd: "block",
      triggerElement:
        window.innerWidth < 480 ? ".features-specialist_img" : "#features",
      triggerHook: 0,
      durationValue: window.innerWidth < 480 ? "50%" : "100%",
    },
  ];

  const additionalAnimations = [
    {
      selector: "#price",
      yStart: "10%",
      yEnd: "0%",
      duration: 0.5,
      triggerElement:
        window.innerWidth < 480
          ? ".features-title-busy"
          : ".features-text-specialist",
      triggerHook: 0,
      durationValue: "100%",
    },
    {
      selector: "#faq",
      yStart: "50%",
      yEnd: "0%",
      duration: 2,
      triggerElement: "#price",
      triggerHook: 0,
      durationValue: "100%",
    },
  ];

  slideAnimations.forEach((anim) => {
    const timeline = createSlideAnimation(
      anim.selector,
      anim.yStart,
      anim.yEnd,
      anim.duration
    );
    createScrollScene(
      anim.triggerElement,
      anim.triggerHook,
      anim.durationValue,
      timeline
    );
  });

  featureAnimations.forEach((anim) => {
    const timeline = createFeatureAnimation(
      anim.selector,
      anim.xStart,
      anim.xEnd,
      anim.duration,
      anim.displayStart,
      anim.displayEnd
    );
    createScrollScene(
      anim.triggerElement,
      anim.triggerHook,
      anim.durationValue,
      timeline
    );
  });

  additionalAnimations.forEach((anim) => {
    const timeline = createSlideAnimation(
      anim.selector,
      anim.yStart,
      anim.yEnd,
      anim.duration
    );
    createScrollScene(
      anim.triggerElement,
      anim.triggerHook,
      anim.durationValue,
      timeline
    );
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  header();
  reviews();
  accordion();
  footer();
  initAnimations();
});
