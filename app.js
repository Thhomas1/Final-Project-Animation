// primer pagina

const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
    },
})






// highlight pagina 2

const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        markers: {startColor: "transparent", endColor: "transparent"},
        scrub: true,
        start: "-40%",
        end: "40%",
    },
});

tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255, 0.4" },
  { color: "rgba(255,255,255, 1", stagger: 1 }
);

// jje

const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        markers: {startColor: "transparent", endColor: "transparent"},
        scrub: true,
        start: "-20%",
        end: "60%",
    },
});

tlHRemove.to(
  ".highlight",
  { color: "rgba(255,255,255, 0.4", stagger: 1 }
);

