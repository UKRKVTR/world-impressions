document.addEventListener('DOMContentLoaded', function () {
  const imageStore = [
    { src: './assets/img/world1.png', alt: 'world1' },
    { src: './assets/img/world2.png', alt: 'world2' },
    { src: './assets/img/world3.png', alt: 'world3' }
  ]
  let slider = document.querySelector('.slider')
  let navbar = document.getElementById('navbar')
  let currentSlideIndex = 0

  if ((navbar, slider)) {
    setTimeout(function () {
      navbar.classList.add('show')
    }, 500)
    setTimeout(function () {
      slider.classList.add('show')
    }, 500)
  }

  function showSlide (index) {
    const slides = document.querySelectorAll('.slider img')
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.opacity = 1
      } else {
        slide.style.opacity = 0
      }
    })
  }

  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % imageStore.length
    showSlide(currentSlideIndex)
  }, 2000)

  imageStore.forEach((image, index) => {
    const imgElement = document.createElement('img')
    imgElement.classList.add('slider')
    imgElement.src = image.src
    imgElement.alt = image.alt
    imgElement.style.opacity = index === 0 ? 1 : 0
    slider.appendChild(imgElement)
  })
})
