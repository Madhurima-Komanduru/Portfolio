/* ================= SMOOTH CURSOR ================= */

const cursor = document.querySelector('.cursor');

const dot = document.querySelector('.cursor-dot');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', e => {

  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';

});

function animateCursor(){

  cursorX += (mouseX - cursorX) * 0.15;

  cursorY += (mouseY - cursorY) * 0.15;

  cursor.style.left = cursorX + 'px';

  cursor.style.top = cursorY + 'px';

  requestAnimationFrame(animateCursor);

}

animateCursor();

/* ================= HERO FADE ================= */

const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {

  let value = window.scrollY;

  heroContent.style.opacity = 1 - value / 500;

  heroContent.style.transform =
  `translateY(${value * 0.4}px)`;

});




/* ================= RIBBON NAV ================= */

const ribbon = document.getElementById('menuBtn');

const sideNav = document.getElementById('sideNav');

/* OPEN/CLOSE NAV */

ribbon.addEventListener('click', () => {

  sideNav.classList.toggle('active');

  ribbon.classList.toggle('active');

});

/* CLOSE WHEN CLICKING OUTSIDE */

document.addEventListener('click', e => {

  if(
    !sideNav.contains(e.target) &&
    !ribbon.contains(e.target)
  ){

    sideNav.classList.remove('active');

    ribbon.classList.remove('active');

  }

});

/* ================= TILT ================= */

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {

  max:30,

  speed:500,

  glare:true,

  "max-glare":0.5,

});

/* ================= LOADER ================= */

window.addEventListener('load', () => {

  const loader = document.querySelector('.loader');

  setTimeout(() => {

    loader.classList.add('fade-out');

  }, 1000);

});

/* ================= PARTICLES ================= */

tsParticles.load("particles-js", {

  background: {
    color: "transparent"
  },

  particles: {

    number: {
      value: 55
    },

    color: {
      value: "#8b5cf6"
    },

    links: {

      enable: true,

      color: "#8b5cf6",

      distance: 120,

      opacity: 0.25

    },

    move: {

      enable: true,

      speed: 1

    },

    opacity: {

      value: 0.4

    },

    size: {

      value: 2

    }

  }

});

/* ================= GSAP ================= */

gsap.registerPlugin(ScrollTrigger);

/* HERO ANIMATION */

gsap.from(".hero h1", {

  y:150,

  opacity:0,

  scale:0.9,

  duration:2,

  ease:"expo.out"

});

gsap.from(".hero p", {

  y:80,

  opacity:0,

  duration:2,

  delay:0.4,

  ease:"expo.out"

});

/* ================= PARALLAX HERO ================= */

gsap.to(".hero-bg", {

  yPercent:15,

  ease:"none",

  scrollTrigger:{
    trigger:".hero",
    scrub:true
  }

});

/* ================= GSAP SECTION REVEALS ================= */

gsap.utils.toArray(".fade-section").forEach(section => {

  gsap.from(section, {

    opacity:0,

    y:80,

    filter:"blur(10px)",

    duration:1.2,

    ease:"power3.out",

    scrollTrigger:{
      trigger:section,
      start:"top 85%"
    }

  });

});

/* ================= ACTIVE NAV ================= */

const navLinks = document.querySelectorAll('.side-nav a');

window.addEventListener('scroll', () => {

  let current = '';

  document.querySelectorAll('section').forEach(section => {

    const sectionTop = section.offsetTop;

    if(scrollY >= sectionTop - 200){

      current = section.getAttribute('id');

    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active-link');

    if(link.getAttribute('href') === `#${current}`){

      link.classList.add('active-link');

    }

  });

});


/* ================= CURSOR HOVER EFFECT ================= */

const hoverItems = document.querySelectorAll(
  'button, a, .card, .project-card, .icon-box, .btn'
);

hoverItems.forEach(item => {

  item.addEventListener('mouseenter', () => {

    cursor.classList.add('hover');

  });

  item.addEventListener('mouseleave', () => {

    cursor.classList.remove('hover');

  });

});

/* ================= RIBBON CURSOR ================= */

ribbon.addEventListener('mouseenter', () => {

  cursor.classList.add('ribbon-hover');

});

ribbon.addEventListener('mouseleave', () => {

  cursor.classList.remove('ribbon-hover');

});