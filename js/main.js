const cont01bg = document.querySelector('.cont01 .content')

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to('.line01', {
  scrollTrigger: {
    trigger: '.cont01',
    start: 'top top',
    end: 'top top',
    scrub: '0.5',
  },
  y: 0,
}).to('.line2', {
  scrollTrigger: {
    trigger: '.cont01',
    start: 'top top',
    end: 'top top',
    scrub: '0.5',
  },
  y: 0,
});
gsap.to(cont01bg, {
  scrollTrigger: {
    trigger: ".cont01",
    start: "50%",
    end: "50%",
    scrub: "true",
    // markers: 'true'
  },
  className: "content fixed"
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
tl.to('.suggestion01', {
  scrollTrigger: {
    trigger: ".cont02",
    start: 'top top',
    end: 'top top',
    markers: 'true',
    scrub: '0.5'
  },
  opacity: 1,
}).to('.suggestion01', {
  scrollTrigger: {
    trigger: ".cont02",
    start: 'top top',
    end: 'top top',
    scrub: '0.5'
  },
  duration: 1.5,
  delay: 0.5,
  filter: 'blur(0)'
});

