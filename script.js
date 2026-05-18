// ==================== 3D NEON TUBE CURSOR ====================
// Licence CC BY-NC-SA 4.0
// Attribution — You must give appropriate credit.
// Non Commercial — You may not use the material for commercial purposes.

import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

const app = TubesCursor(document.getElementById('canvas'), {
  tubes: {
    colors: ["#f967fb", "#53bc28", "#6958d5"],
    lights: {
      intensity: 200,
      colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
    }
  }
})

document.body.addEventListener('click', () => {
  const colors = randomColors(3)
  const lightsColors = randomColors(4)
  console.log(colors, lightsColors)
  app.tubes.setColors(colors)
  app.tubes.setLightsColors(lightsColors)
})

function randomColors(count) {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'))
}

// ==================== SLIDE NAVIGATION ====================
const slidesContainer = document.querySelector('.slides-container')
const slides = document.querySelectorAll('.slide')
const navDots = document.querySelectorAll('.nav-dot')

let currentSlide = 1
let isScrolling = false

navDots.forEach((dot, index) => {
  dot.addEventListener('click', () => scrollToSlide(index))
})

function scrollToSlide(index) {
  if (index < 0 || index >= slides.length || isScrolling) return
  isScrolling = true
  slidesContainer.scrollTo({ top: slides[index].offsetTop, behavior: 'smooth' })
  currentSlide = index
  updateNavDots()
  setTimeout(() => { isScrolling = false }, 600)
}

function updateNavDots() {
  navDots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide))
}

slidesContainer.addEventListener('scroll', () => {
  if (isScrolling) return
  let newSlide = 0, minDistance = Infinity
  slides.forEach((slide, index) => {
    const distance = Math.abs(slide.offsetTop - slidesContainer.scrollTop)
    if (distance < minDistance) { minDistance = distance; newSlide = index }
  })
  if (newSlide !== currentSlide) { currentSlide = newSlide; updateNavDots() }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); scrollToSlide(currentSlide + 1) }
  else if (e.key === 'ArrowUp') { e.preventDefault(); scrollToSlide(currentSlide - 1) }
})

slidesContainer.addEventListener('wheel', (e) => {
  if (isScrolling) e.preventDefault()
}, { passive: false })

window.addEventListener('load', () => {
  slidesContainer.scrollTop = 0
  updateNavDots()
})

// ==================== MOBILE SWIPE ====================
let touchStartY = 0, touchEndY = 0
slidesContainer.addEventListener('touchstart', (e) => { touchStartY = e.changedTouches[0].screenY })
slidesContainer.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY
  const diff = touchStartY - touchEndY
  if (Math.abs(diff) > 50) scrollToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1)
})

// ==================== SOCIAL LINK INTERCEPTS ====================
const linkedinLink = document.querySelector('.social-links a.linkedin')
const githubLink = document.querySelector('.social-links a.github')

if (linkedinLink) {
  linkedinLink.addEventListener('click', (e) => {
    e.preventDefault()
    scrollToSlide(5)
    setTimeout(() => window.open('https://www.linkedin.com/in/mallam-polaiah-ganesh-b33748218/', '_blank'), 600)
  })
}
if (githubLink) {
  githubLink.addEventListener('click', (e) => {
    e.preventDefault()
    scrollToSlide(5)
    setTimeout(() => window.open('https://github.com/MALLAMPOLAIAHGANESH', '_blank'), 600)
  })
}