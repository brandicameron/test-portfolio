gsap.registerPlugin(EasePack, ScrollTrigger);

// Surprised on scroll
// Determine direction of scroll - https://codepen.io/lehollandaisvolant/pen/ryrrGx?editors=0010
// Detect when not scrolling - https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
const drawing = document.querySelector('.drawing');
var scrollPos = 0;
let isScrolling;

window.addEventListener('scroll', function () {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    drawing.src = './img/brandi-drawing-2.svg';
  } else {
    drawing.src = './img/brandi-drawing-3.svg';
  }
  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;

  window.clearTimeout(isScrolling);
  // Run after scrolling ends
  isScrolling = setTimeout(() => {
    drawing.src = './img/brandi-drawing-1.svg';
  }, 300);
});

// Confetti
// https://github.com/loonywizard/js-confetti
const jsConfetti = new JSConfetti();

function startParty() {
  jsConfetti.addConfetti({
    confettiColors: ['#fff', '#02a5de'],
    confettiRadius: 3,
  });
}

// GSAP SCROLL ANIMATIONS

ScrollTrigger.matchMedia({
  // DESKTOP & TABLET
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
      .from('.rush', { xPercent: -250, skewX: 65, ease: 'back' })
      .from('.free-1', {
        xPercent: -100,
        delay: 2,
        scrollTrigger: {
          trigger: '.well-done-is',
          end: 'bottom 50%',
          scrub: true,
          once: true,
        },
      })
      .from('.free-2', {
        xPercent: 100,
        delay: 2,
        scrollTrigger: {
          trigger: '.well-done-is',
          end: 'bottom 50%',
          scrub: true,
          once: true,
        },
      });
  },

  // MOBILE
  '(max-width: 520px)': function () {
    let quoteTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.drawing',
        start: '-30% top',
        end: 'bottom bottom',
        endTrigger: '.the',
        scrub: 1,
        once: true,
      },
    });

    quoteTl.from('.rush', { xPercent: -250, skewX: 65, ease: 'back' });
  },

  // all
  all: function () {
    // Name animation
    let iDot = document.querySelector('.i-dot');
    let dropPoint = iDot.getBoundingClientRect().top;

    gsap.from(iDot, {
      y: -dropPoint - 40,
      ease: 'bounce',
      delay: 1,
    });

    // Project image animations
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
  },
});
