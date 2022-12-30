const pgNation = document.querySelector(".pagenation")
const pgTitle = document.querySelector(".pg_title")
const cont01bg = document.querySelector(".cont01 .content")
const sug01 = document.querySelector(".suggestion01");
const sug01_b01 = document.querySelector(".suggestion01 .block01");
const sug01_b02 = document.querySelector(".suggestion01 .block02");
const sug02 = document.querySelector(".suggestion02");
const cont02 = document.querySelector(".cont02");
const cont02Itm01 = document.querySelector(".cont02 .item01");
const cont02Itm02 = document.querySelector(".cont02 .item02");
const shapesSet = Array.from(document.querySelectorAll(".shapes_set .item"));

const btn_pg00 = document.querySelector('a[data-pg="0"]');
const btn_pg01 = document.querySelector('a[data-pg="1"]');
const btn_pg02 = document.querySelector('a[data-pg="2"]');
const btn_pg03 = document.querySelector('a[data-pg="3"]');
const btn_pg04 = document.querySelector('a[data-pg="4"]');
const btn_pg05 = document.querySelector('a[data-pg="5"]');
const btn_pg06 = document.querySelector('a[data-pg="6"]');

gsap.registerPlugin(ScrollTrigger);
// pgTitle
gsap.timeline({
  scrollTrigger: {
    trigger: ".cont01",
    start: "top 40%",
    end: "top 40%",
    scrub: "0.5",
  }
}).to(pgNation, {
  className: "pagenation dp1"
}).to(pgTitle, {
  className: "pg_title dn1"
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".cont01",
    start: "top top",
    end: "top top",
    scrub: "0.5",
  }
}).to(".line01", {
  y: 0,
}).to(".line2", {
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
  opacity: 0,
  duration: 3
});
gsap.to(".bg03", {
  scrollTrigger: {
    trigger: ".cont01",
    start: "top -300px",
    end: "center center",
    scrub: "1",
  },
  opacity: 0,
  duration: 3
});
gsap.to(".hour", {
  scrollTrigger: {
    trigger: ".cont01",
    start: "top -100px",
    end: "center",
    scrub: "1",
  },
  rotation: 60,
  ease: "none",
  duration: 3
});
gsap.to(".min", {
  scrollTrigger: {
    trigger: ".cont01",
    start: "top -100px",
    end: "center",
    scrub: "1",
  },
  rotation: 270,
  duration: 3
});
gsap.timeline({
  scrollTrigger: {
    trigger: ".cont02",
    start: "top 40%",
    end: "top 40%",
    scrub: "1"
  },
}).to(pgNation, {
  className: "pagenation dp2"
}).to(pgTitle, {
  className: "pg_title dn2"
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".cont02",
    start: "top top",
    end: "top top",
    scrub: "1"
  },
})
  .to(".suggestion01", {
    keyframes: [
      {
        opacity: 1
      },
      {
        duration: 1.5,
        delay: 1,
        filter: "blur(0)"
      },
    ]

  });
gsap.timeline({
  scrollTrigger: {
    trigger: ".blank02",
    start: "top top",
    end: "top top",
    scrub: "1",
  }
}).to(sug01_b01, {
  keyframes: [
    {
      filter: "blur(4px)",
      duration: 1,
    },
    {
      opacity: 0,
    }
  ]
});

//climate 중앙 이동
gsap.timeline({
  scrollTrigger: {
    trigger: ".blank02",
    start: "top top",
    end: "top top",
    scrub: "1",
  }
}).to(sug01_b01, {
  opacity: 0,
  fliter: "blur(4px)"
}).to(sug01_b02, {
  left: "50%",
  xPercent: -50,
}).to(cont02Itm01, {
  opacity: 0
}).to(cont02Itm02, {
  opacity: 1
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".blank02",
    start: "center top",
    end: "center top",
    scrub: "0.5",
  }
}).to(pgNation, {
  className: "pagenation hide"
}).to(pgTitle, {
  className: "pg_title hide"
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".blank03",
    start: "top top",
    end: "top top",
    scrub: "true",
  }
})
  .to(pgTitle, {
    className: "pg_title dn3"
  })
  .to(pgNation, {
    className: "pagenation dp3"
  })
  .to(cont02Itm02, {
    opacity: 0
  }).to(sug01_b02, {
    keyframes: [
      { y: -10 },
      {
        delay: 1,
        left: "50%",
        xPercent: -100,
        scale: 0.7,
        textAlign: "left"
      },
    ]
  }).to(cont02, {
    className: "cont02 show"
  });

// PAGENATION
gsap.timeline({
  scrollTrigger: {
    trigger: ".cont04",
    start: "top 40%",
    end: "top 40%",
    scrub: "1",
  }
}).to(pgTitle, {
  className: "pg_title dn4"
}).to(pgNation, {
  className: "pagenation dp4"
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".cont05",
    start: "top 40%",
    end: "top 40%",
    scrub: "0.5"
  }
}).to(pgTitle, {
  className: "pg_title dn5"
}).to(pgNation, {
  className: "pagenation dp5"
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".cont06",
    start: "top 40%",
    end: "top 40%",
    scrub: "0.5"
  }
}).to(pgTitle, {
  className: "pg_title dn6"
}).to(pgNation, {
  className: "pagenation dp6"
});

btn_pg00.addEventListener('click', (e) => {
  gsap.to(window, {
    scrollTo: {
      duration: 1,
      y: ".visual"
    }
  })
});
btn_pg01.addEventListener('click', (e) => {
  gsap.to(window, {
    scrollTo: {
      duration: 1,
      y: ".cont01"
    }
  })
});
btn_pg02.addEventListener('click', (e) => {
  gsap.to(window, {
    scrollTo: {
      duration: 1,
      y: ".cont02"
    }
  })
});
btn_pg03.addEventListener('click', (e) => {
  gsap.to(window, {
    scrollTo: {
      duration: 1,
      y: ".blank03"
    }
  })
});
btn_pg04.addEventListener('click', (e) => {
  gsap.to(window, {
    scrollTo: {
      duration: 1,
      y: ".cont04"
    }
  })
});
btn_pg05.addEventListener('click', (e) => {
  gsap.to(window, {
    scrollTo: {
      duration: 1,
      y: ".cont05"
    }
  })
});
btn_pg06.addEventListener('click', (e) => {
  gsap.to(window, {
    scrollTo: {
      duration: 1,
      y: ".cont06"
    }
  })
});
