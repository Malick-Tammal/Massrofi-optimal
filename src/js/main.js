// OPTIMIZED FONT LOAD
import "unfonts.css";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const initApp = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // BURGER MENU
  const menuMobile = document.querySelector(".menu_mobile");
  const burgerBtn = document.querySelector(".burger_btn");

  const menuMobileOverlay = document.querySelector(".menu_mobile_overlay");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    menuMobile.classList.toggle("active");
    menuMobileOverlay.classList.toggle("active");
  });

  menuMobileOverlay.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    menuMobile.classList.remove("active");
    menuMobileOverlay.classList.remove("active");
  });

  // HEADER SCROLL
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      header.classList.add("scrolled");
      menuMobile.style.top = "4.2rem";
    } else {
      header.classList.remove("scrolled");
      menuMobile.style.top = "4.8rem";
    }
  });

  // GSAP SCROLL TO SECTION FROM MENU
  const menuMobileLinks = document.querySelectorAll(".menu_mobile ul li a");
  const menuDesktopLinks = document.querySelectorAll(".nav_bar ul li a");
  const sections = document.querySelectorAll("section");

  const menuEngine = (menu) => {
    menu.forEach((link, index) => {
      link.addEventListener("click", () => {
        menu.forEach((menuLink) => {
          menuLink.classList.remove("active");
        });

        link.classList.add("active");
        gsap.to(window, {
          scrollTo: {
            y: sections[index],
          },
        });
        burgerBtn.classList.remove("active");
        menuMobile.classList.remove("active");
        menuMobileOverlay.classList.remove("active");
      });
    });
  };
  menuEngine(menuMobileLinks);
  menuEngine(menuDesktopLinks);

  // GSAP ANIMATION
  //  MAIN
  const mainCh = document.querySelector(".main").children;

  gsap.from(mainCh, {
    autoAlpha: 0,
    y: 100,
    stagger: 0.3,
  });

  //  TITLES
  const titles = document.querySelectorAll(".title");

  titles.forEach((title) => {
    gsap.from(title.children, {
      scrollTrigger: {
        trigger: title,
        start: "bottom bottom",
      },
      autoAlpha: 0,
      y: 50,
      stagger: 0.3,
    });
  });

  //  CARDS
  const cards = document.querySelectorAll(".card");
  const cardsWrapper = document.querySelectorAll(".card_wrapper");

  const cardsReveal = (item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "25% bottom",
      },
      autoAlpha: 0,
      y: 100,
      stagger: 0.3,
    });
  };

  if (window.innerWidth < 768) {
    cards.forEach((card) => {
      cardsReveal(card);
    });
  } else {
    cardsReveal("#services .cards_wrapper .card");
    cardsReveal("#payments .cards_wrapper .card");
    cardsReveal("#contact .cards_wrapper .card");
  }

  console.log(window.innerWidth);

  // ABOUT SECTION
  const aboutTopChlds = document.querySelector("#about .top").children;

  gsap.from(aboutTopChlds, {
    scrollTrigger: {
      trigger: "#about .top",
      start: "25% bottom",
    },
    autoAlpha: 0,
    stagger: 0.3,
    x: "100%",
  });

  gsap.from("#about .big_box img", {
    scrollTrigger: {
      trigger: "#about .big_box img",
      start: "50% bottom",
    },
    autoAlpha: 0,
  });

  // CONTRACT
  const contractLeftColChlds = document.querySelector(
    "#contract .left_col"
  ).children;

  gsap.from(contractLeftColChlds, {
    scrollTrigger: {
      trigger: "#contract .left_col",
      start: "25% bottom",
    },
    autoAlpha: 0,
    stagger: 0.3,
    x: "100%",
  });

  gsap.from("#contract img", {
    scrollTrigger: {
      trigger: "#contract img",
      start: "50% bottom",
    },
    autoAlpha: 0,
  });

  // HOVER ANIMATION
  //  CONTACT BTN
  const contactUsA = document.querySelector("#about .top a");

  contactUsA.addEventListener("mouseenter", () => {
    gsap.to(contactUsA, {
      background: "#ff9800",
      color: "#161616",
      duration: 0.3,
      ease: "power1.inOut",
    });
  });

  contactUsA.addEventListener("mouseleave", () => {
    gsap.to(contactUsA, {
      background: "#ffffff",
      color: "#4caf50",
      duration: 0.3,
      ease: "power1.inOut",
    });
  });

  //  PAYMENTS CARDS
  const paymentsCards = document.querySelectorAll("#payments .card");

  paymentsCards.forEach((paymentsCard) => {
    paymentsCard.addEventListener("mouseenter", () => {
      gsap.to(paymentsCard, {
        scale: 1.03,
        duration: 0.3,
        ease: "power1.inOut",
      });
    });

    paymentsCard.addEventListener("mouseleave", () => {
      gsap.to(paymentsCard, {
        scale: 1,
        duration: 0.3,
        ease: "power1.inOut",
      });
    });
  });

  // BACK 2 TOP BTN
  const back2top = document.querySelector(".back_to_top");

  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 400) {
      gsap.to(back2top, {
        autoAlpha: 1,
        x: 0,
      });
    } else {
      gsap.to(back2top, {
        autoAlpha: 0,
        x: "100%",
      });
    }
  });

  back2top.addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: {
        y: "#hero",
      },
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});
