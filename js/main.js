const cont01bg = document.querySelector('.cont1 .content')

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to('.line01', {
  scrollTrigger: {
    trigger: '.cont01',
    start: '50px top',
    end: 'top top',
    scrub: '1',
  },
  duration: 0.7,
  y: 0,
}).to('.line2', {
  scrollTrigger: {
    trigger: '.cont01',
    start: '50px top',
    end: 'top top',
    scrub: '1',
  },
  duration: 0.7,
  delay: 0.3,
  y: 0,
});


gsap.to('.cont01 .content', {
  scrollTrigger: {
    trigger: ".cont01",
    start: "top top",
    end: "bottom bottom",
    scrub: "true",
    markers: 'true'
  },
});
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