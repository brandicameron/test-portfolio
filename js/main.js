gsap.registerPlugin(EasePack, ScrollTrigger);

let iDot = document.querySelector('.i-dot');
let dropPoint = iDot.getBoundingClientRect().top;

// Name animations
gsap.from(iDot, {
  y: -dropPoint - 40,
  ease: 'bounce',
  // delay: 1.5,
  delay: 1,
});

// gsap.from('.brandi-name-lg', {
//   duration: 0.15,
//   scaleY: 0,
//   ease: 'back',
//   delay: 0.9,
// });

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
// let quoteTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.intro-paragraph',
//     start: 'top top',
//     end: 'top top',
//     endTrigger: '.quote-section',
//     scrub: 1,
//     once: true,
//     markers: true,
//   },
// });

// quoteTl
//   // .from('.the', { scaleY: 0, duration: 2 })
//   .from('.dopamine', {
//     scaleY: 0.8,
//     repeat: 4,
//     yoyo: true,
//     ease: 'sine',
//     duration: 0.6,
//   })
//   .from('.rush', { xPercent: -250, skewX: 65, ease: 'back' });

ScrollTrigger.matchMedia({
  // all other
  '(min-width: 521px)': function () {
    let quoteTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro-paragraph',
        start: 'top top',
        end: 'top top',
        endTrigger: '.quote-section',
        scrub: 1,
        once: true,
        // markers: true,
      },
    });

    quoteTl
      // .from('.the', { scaleY: 0, duration: 2 })
      .from('.dopamine', {
        scaleY: 0.8,
        repeat: 4,
        yoyo: true,
        ease: 'sine',
        duration: 0.6,
      })
      .from('.rush', { xPercent: -250, skewX: 65, ease: 'back' });
  },

  // mobile
  '(max-width: 520px)': function () {
    let quoteTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.drawing',
        start: '-30% top',
        endTrigger: '.the',
        end: 'bottom bottom',
        scrub: 1,
        once: true,
        // markers: true,
      },
    });

    quoteTl
      // .from('.the', { scaleY: 0, duration: 2 })
      .from('.dopamine', {
        scaleY: 0.8,
        repeat: 4,
        yoyo: true,
        ease: 'sine',
        duration: 0.6,
      })
      .from('.rush', { xPercent: -250, skewX: 65, ease: 'back' });
  },
});

// Sample image animations
const projects = document.querySelectorAll('.project');
const mobileSamples = document.querySelectorAll('.mobile');
const tabletSamples = document.querySelectorAll('.tablet');

tabletSamples.forEach((tablet) => {
  let ls = gsap.timeline({
    scrollTrigger: {
      trigger: tablet,
      scrub: true,
      yoyo: true,
      once: true,
    },
  });

  ls.from(tablet, {
    y: 35,
  });
});

mobileSamples.forEach((mobile) => {
  let ls = gsap.timeline({
    scrollTrigger: {
      trigger: mobile,
      scrub: 1,
      yoyo: true,
      once: true,
    },
  });

  ls.from(mobile, {
    x: 10,
    rotate: 3,
  });
});
