const pgNation = document.querySelector('.pagenation')
const pgTitle = document.querySelector('.pg_title')
const cont01bg = document.querySelector('.cont01 .content')
const sug01 = document.querySelector('.suggestion01');
const sug01_b01 = document.querySelector('.suggestion01 .block01');
const sug01_b02 = document.querySelector('.suggestion01 .block02');
const sug02 = document.querySelector('.suggestion02');
const cont02 = document.querySelector('.cont02');
const cont02Itm01 = document.querySelector('.cont02 .item01');
const cont02Itm02 = document.querySelector('.cont02 .item02');
const cont02Itm03 = document.querySelector('.cont02 .item03');
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
  delay: 1,
  filter: 'blur(0)'
});

tl.to(sug01_b01, {
  scrollTrigger: {
    trigger: ".blank02",
    start: '180px top',
    end: '180px top',
    scrub: '0.5',
  },
  filter: 'blur(4px)',
  duration: 1,
}).to(sug01_b01, {
  scrollTrigger: {
    trigger: ".blank02",
    start: '180px top',
    end: '180px top',
    scrub: '0.5',
  },
  opacity: 0,
});

//climate 중앙 이동
gsap.timeline({
  scrollTrigger: {
    trigger: ".blank02",
    start: 'top top',
    end: 'top top',
    scrub: '0.5',
  }
}).to(sug01_b01, {
  opacity: 0,
  fliter: 'blur(4px)'
}).to(sug01_b02, {
  left: '50%',
  xPercent: -50,
}).to(cont02Itm01, {
  duration: 1,
  opacity: 0
}).to(cont02Itm02, {
  opacity: 1
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".blank02",
    start: 'bottom center',
    end: 'bottom center',
    scrub: '0.5',
    markers: 'true'
  }
}).to(pgNation, {
  opacity: 0
}).to(pgTitle, {
  opacity: 0
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".blank03",
    start: 'top top',
    end: 'top top',
    scrub: '0.5',
  }
}).to(sug01, {
  y: -10
}).to(cont02Itm02, {
  opacity: 0
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".blank03",
    start: 'top top',
    end: 'top top',
    scrub: '0.5',
  }
}).to(sug01_b02, {
  duration: 1,
  delay: 3,  
  left: '50%',
  xPercent: -100,
  scale: 0.7,
  textAlign: 'left'
}).to(cont02Itm03, {
  opacity: 1,
}).to(sug02, {
  opacity: 1,
}).to(cont02, {
  className: 'cont02 show'
});

