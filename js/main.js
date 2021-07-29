gsap.registerPlugin(EasePack, ScrollTrigger);

const jsConfetti = new JSConfetti();

function startParty() {
  jsConfetti.addConfetti({
    confettiColors: [
      '#fff',
      '#fdc11e',
      // '#ECA72C',
      // '#EE5622',
      // '#44355B',
      // '#058C42',
      // '#7CDEDC',
      // '#3943B7',
    ],
    confettiRadius: 8,
  });
}

let iDot = document.querySelector('.i-dot');
let dropPoint = iDot.getBoundingClientRect().top;

// Name animations
gsap.from(iDot, {
  y: -dropPoint - 40,
  ease: 'bounce',
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
      .from('.rush', { xPercent: -250, skewX: 65, ease: 'back' });

    gsap.from('.free-1', {
      xPercent: -100,
      delay: 2,
      scrollTrigger: {
        trigger: '.well-done-is',
        end: 'bottom 50%',
        scrub: true,
        once: true,
      },
    });
    gsap.from('.free-2', {
      xPercent: 100,
      delay: 2,
      onComplete: startParty,
      scrollTrigger: {
        trigger: '.well-done-is',
        end: 'bottom 50%',
        scrub: true,
        once: true,
      },
    });
  },

  // mobile
  '(max-width: 520px)': function () {
    let quoteTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.drawing',
        start: '-30% top',
        end: 'bottom bottom',
        endTrigger: '.the',
        scrub: 1,
        once: true,
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
      .from('.rush', { xPercent: -250, skewX: 65, ease: 'back' });

    // gsap.from('.free-1', {
    //   xPercent: -100,
    //   delay: 2,
    //   scrollTrigger: {
    //     trigger: '.well-done-is',
    //     end: 'bottom 50%',
    //     scrub: true,
    //     once: true,
    //   },
    // });
    // gsap.from('.free-2', {
    //   xPercent: 100,
    //   delay: 2,
    //   onComplete: startParty,
    //   scrollTrigger: {
    //     trigger: '.well-done-is',
    //     end: 'bottom 50%',
    //     scrub: true,
    //     once: true,
    //   },
    // });
  },
});

// Sample image animations
// const projects = document.querySelectorAll('.project');
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
  });
});
