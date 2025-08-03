AOS.init ({
  duration: 600,
  easing: 'ease',
  once: true
})

const letters = document.querySelectorAll(".text span");
const tl = gsap.timeline();

tl.fromTo(letters, {
  y: 100,
  scale: 0.8,
  opacity: 0,
  "--clipPath": "inset(100% 0 0 0)"
}, {
  y: 0,
  scale: 1,
  opacity: 1,
  duration: 0.8,
  stagger: 0.06,
  ease: "back.out(1.7)",
  "--clipPath": "inset(0% 0 0 0)"
})
.to({}, { duration: 0.5 })
.to(letters, {
  y: -100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.04,
  ease: "power2.in"
});
