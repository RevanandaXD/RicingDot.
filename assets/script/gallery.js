const image = [
  "../assets/images/linux-1.png",
  "../assets/images/linux-2.png",
  "../assets/images/linux-3.png",
  "../assets/images/linux-4.png",
  "../assets/images/linux-5.webp",
  "../assets/images/linux-6.webp",
  "../assets/images/linux-7.png",
  "../assets/images/linux-8.png",
  "../assets/images/linux-9.jpg",
  "../assets/images/linux-10.png",
  "../assets/images/linux-11.png",
  "../assets/images/linux-12.png",
  "../assets/images/linux-13.png",
  "../assets/images/linux-14.png",
  "../assets/images/linux-15.webp",
  "../assets/images/linux-16.png",
  "../assets/images/linux-17.webp",
  "../assets/images/linux-18.webp",
]

async function loadData() {
  const container = document.querySelector('.gallery-container');
  try {
    container.innerHTML = image.map(item => {
      return `
      <a href="${item}" data-aos="fade" data-aos-delay="200">
        <img src="${item}" alt="image-ricing">
      </a>
      `
    }).join('')
  } catch (err) {
    console.log(err)
  }
}

window.addEventListener('DOMContentLoaded', loadData)