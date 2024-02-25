document.addEventListener('DOMContentLoaded', function () {
  const imageStore = [
    { src: './assets/img/world1.png', alt: 'world1' },
    { src: './assets/img/world2.png', alt: 'world2' },
    { src: './assets/img/world3.png', alt: 'world3' }
  ]
  let slider = document.querySelector('.slider')
  let navbar = document.getElementById('navbar')
  let logoIntro = document.querySelector('.introLogo')
  let intro = document.querySelector('.intro')
  const moduleWin = document.querySelector('.contactsWindow')
  const moduleWindow = document.querySelector('.moduleWindow')
  const contacts = document.querySelector('#contacts')

  let currentSlideIndex = 0

  function showContacts () {
    contacts.addEventListener('click', function () {
      moduleWin.classList.add('show')
    })
  }

  function hideContacts (e) {
    if (!e.target.closest('.moduleWindow')) {
      moduleWin.classList.remove('show')
      document.removeEventListener('click', hideContacts)
    }
  }

  moduleWindow.addEventListener('click', function (e) {
    e.stopPropagation()
  })

  document
    .querySelector('.contactsWindow')
    .addEventListener('click', function () {
      moduleWin.classList.add('show')
      document.addEventListener('click', hideContacts)
    })

  setTimeout(showContacts, 2000)
  setTimeout(function () {
    logoIntro.classList.add('show')
  }, 100)

  setTimeout(function () {
    intro.classList.add('show')
    setTimeout(function () {
      intro.style.display = 'none'
      setTimeout(function () {
        navbar.classList.add('show')
      }, 300)
      setTimeout(function () {
        slider.classList.add('show')
      }, 300)
    }, 500)
  }, 500)

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
