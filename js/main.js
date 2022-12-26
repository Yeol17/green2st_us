let line = Array.from(document.querySelectorAll('.line > p'));

window.addEventListener('scroll', _.throttle((e) => {
  if (window.scrollY > 700) {
    line.map((el) => {
      el.classList.add('show');
    });
  } else if (window.scrollY < 400) {
    line.map((el) => {
      el.classList.remove('show');
    });
  }
}, 300));

gsap.registerPlugin(ScrollTrigger);

// gsap.to('.line01',{
//   scrollTrigger: {
//     trigger: ".cont01",
//     start: "top center",
//     end: "bottom center",
//     scrub: "1",
//     markers: "true",
//   },
//   yPercent: -100,
//   opacity: 1,
//   delay: 0.6,
//   ease: "linear" 

// });
gsap.to(".bg02", {
  scrollTrigger: {
    trigger: ".cont01",
    start: "top -100px",
    end: "center",
    scrub: "true",
  },
  opacity: 0 ,
  duration: 3
});
gsap.to(".bg03", {
  scrollTrigger: {
    trigger: ".cont01",
    start: "top -300px",
    end: "center",
    scrub: "1",
  },
  opacity: 0  ,
  duration: 3
});
gsap.to(".hour", {
  scrollTrigger: {
    trigger: ".cont01",
    start: "top -100px",
    end: "center",
    scrub: "1",
  },
  rotation: 60  ,
  ease: "none"  ,
  duration: 3
});
gsap.to(".min", {
  scrollTrigger: {
    trigger: ".cont01",
    start: "top -100px",
    end: "center",
    scrub: "2",
  },
  rotation: 270,
  ease: "none"  ,
  duration: 3
});


