const navbarbtn = document.querySelector('.btn-right');
const navbar = document.querySelector('.nav-down');
const img = document.querySelector('.image-preview');
const navlink = document.querySelectorAll('.link a');

navbarbtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
})

navlink.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
  })
});



const preview = [
  "../assets/images/linux-5.webp",
  "../assets/images/linux-6.webp",
  "../assets/images/linux-7.png",
  "../assets/images/linux-8.png",
  "../assets/images/linux-9.jpg",
  "../assets/images/linux-10.png",
  "../assets/images/linux-11.png",
  "../assets/images/linux-13.png",
  "../assets/images/linux-14.png",
  "../assets/images/linux-15.webp",
  "../assets/images/linux-16.png",
  "../assets/images/linux-17.webp",
  "../assets/images/linux-18.webp",
]

let currectImage = 0;
setInterval(() => {
  img.classList.add('fade-out');
  setTimeout(() => {
    currectImage = (currectImage + 1) % preview.length;
    img.src = preview[currectImage]

    img.classList.remove('fade-out')
  }, 1000)
}, 5000)