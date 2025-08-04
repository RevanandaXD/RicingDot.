window.addEventListener('DOMContentLoaded', loadData)

async function loadData() {
  const datacontainer = document.querySelector('.card-container');
  const loading = document.querySelector('.loading')
  try {
    const res = await fetch('https://gist.githubusercontent.com/RevanandaXD/0c2a6eca9a39510fe49282c765538046/raw/b95acf6fb7b4166adb1b0c34ff395a4c3611ff13/linux-dotfiles');
    const data = await res.json();
    datacontainer.style.display = 'none'
    await waitForImagesToLoad(datacontainer);

    const logoMap = {
      "Arch": "../assets/images/Arch.svg",
      "Arctic": "../assets/images/Arctic.svg",
      "Manjaro": "../assets/images/manjaro.svg",
      "Endeavour": "../assets/images/endevour.svg",
      "NixOS": "../assets/images/nix.svg",
      "Mint": "../assets/images/mint.svg",
      "Ubuntu": "../assets/images/ubuntu.svg",
      "PopOS": "../assets/images/pop-os.svg",
    };

    await new Promise(resolve => setTimeout(resolve, 3000));

    datacontainer.innerHTML = data.map(item => {
      const currectLogo = logoMap[item.distro]
      return `
      <div class="card" data-id="${item.id}" data-aos="fade" data-aos-delay="200">
      <a href=${item.image} target="_blank" data-lightbox=${item.id}>
        <img src="${item.image}" alt="image-preview" class="image-preview">
      </a>
      <div class="information-container">
        <div class="title-product">
          <img src="${currectLogo}" alt="logo" class="logo">
          <h2 class="title-name">${item.title}</h2>
        </div>
        <span class="developer">create by ${item.developer}</span>
        <a href="${item.link}" class="btn" target="_blank"><i class="fa-brands fa-github"></i>Github</a>
      </div>
    </div>`
    }).join('');

    loading.style.display = 'none'
    datacontainer.style.display = 'grid'
    function waitForImagesToLoad(container) {
      const images = container.querySelectorAll('img');
      const promises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = img.onerror = () => resolve();
        });
      });
    return Promise.all(promises);
    }
  } catch (err) {
    console.log(err);
    loading.textContent = 'Gagal Memuat Data'
  }
}

