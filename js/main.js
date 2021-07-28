gsap.registerPlugin(EasePack, ScrollTrigger);

let iDot = document.querySelector('.i-dot');
let dropPoint = iDot.getBoundingClientRect().top;

// Name animations
gsap.from(iDot, {
  y: -dropPoint - 40,
  ease: 'bounce',
  delay: 1.5,
});

gsap.from('.brandi-name-lg', {
  duration: 0.15,
  scaleY: 0,
  ease: 'back',
  delay: 0.9,
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
    trigger: '.intro-paragraph',
    start: 'top top',
    end: 'top top',
    endTrigger: '.quote-section',
    scrub: true,
    // once: true,
    // markers: true,
  },
});

quoteTl
  .from('.the', { scaleY: 0, duration: 2 })
  .from('.dopamine', {
    scaleY: 0.8,
    repeat: 4,
    yoyo: true,
    ease: 'sine',
    duration: 0.6,
  })
  .from(
    '.rush',
    { xPercent: -150, skewX: 65, ease: 'back' }
    // '-=1.5'
  );

// Sample image animations
// const mobileSamples = document.querySelectorAll('.mobile');
// const tabletSamples = document.querySelectorAll('.tablet');
