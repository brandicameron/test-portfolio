gsap.registerPlugin(EasePack, ScrollTrigger);

let iDot = document.querySelector('.i-dot');
let dropPoint = iDot.getBoundingClientRect().top;

// Name animations
gsap.from(iDot, {
  y: -dropPoint - 40,
  ease: 'bounce',
  // delay: 0.9,
  delay: 1.5,
});

gsap.from('.brandi-name-lg', {
  duration: 0.15,
  scaleY: 0,
  ease: 'back',
  // delay: 0.4,
  delay: 1,
});

// Surprised on scroll
const drawing = document.querySelector('.drawing');
// https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
let isScrolling;

window.addEventListener(
  'scroll',
  () => {
    drawing.src = './img/brandi-drawing-2.svg';
    // Clear timeout throughout scroll
    window.clearTimeout(isScrolling);

    // Run after scrolling ends
    isScrolling = setTimeout(() => {
      drawing.src = './img/brandi-drawing-1.svg';
    }, 300);
  },
  false
);

// Quote Animations
let quoteTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.the',
    scrub: true,
    once: true,
  },
});

quoteTl
  // .from('.the', { scaleY: 0 })
  .from('.dopamine', {
    scaleY: 0.8,
    repeat: 2,
    yoyo: true,
    duration: 0.5,
  })
  .from('.rush', { xPercent: -150, duration: 0.3, skewX: 65, ease: 'back' })
  .from('.well-done-is', { fill: '#fdc11e' });

// Sample image animations
const mobileSamples = document.querySelectorAll('.mobile');
const tabletSamples = document.querySelectorAll('.tablet');
