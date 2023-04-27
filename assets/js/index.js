/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== ACTIVE TAB ===============*/
const tabs = document.querySelectorAll('.nav__item')

function hideOtherSections () {
	const allSections = document.querySelectorAll('section')

	for(let i = 0; i < allSections.length; i++) {
		allSections[i].style.display = "none"
	}
}

function changeTab() {
	const selector = this.dataset.activate
	if(selector) {
		const el = document.querySelector(selector)
		hideOtherSections()
		el.style.display = 'block'
	}
}

for(let i = 0; i < tabs.length; i++){
	const tab = tabs[i]
	tab.addEventListener('click', changeTab, false)
}

/*=============== ACTIVE LINK ===============*/

const navLink = document.querySelectorAll('.nav__link')

function activeLink () {
	navLink.forEach(n => n.classList.remove('active-link'))
	this.classList.add('active-link')
}

navLink.forEach(n => n.addEventListener('click', activeLink))

/*=============== ABOUT ME BUTTON ===============*/
document.addEventListener('click', (e) => {
	if(e.target.classList.contains('button__about')){
		const about = document.querySelector('.about')
		const aboutLink = document.querySelector('.about__link')
		hideOtherSections()
		about.style.display = 'block'
		navLink.forEach(n => n.classList.remove('active-link'))
		aboutLink.classList.add('active-link')
	}
})

/*=============== CONTACT BUTTON ===============*/
document.addEventListener('click', (b) => {
	if(b.target.classList.contains('button__contact')){
		const contact = document.querySelector('.contact')
		const contactLink = document.querySelector('.contact__link')
		hideOtherSections()
		contact.style.display = 'block'
		navLink.forEach(n => n.classList.remove('active-link'))
		contactLink.classList.add('active-link')
	}
})

/*=============== ABOUT MODAL ===============*/
const modalViews = document.querySelectorAll('.about__modal'),
	  modalBtns = document.querySelectorAll('.about__button'),
	  modalClose = document.querySelectorAll('.about__modal-close')

let modal = function(modalClick) {
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
	mb.addEventListener('click', () => {
		modal(i)
	})
})

modalClose.forEach((mc) => {
	mc.addEventListener('click', () => {
		modalViews.forEach((mv) => {
			mv.classList.remove('active-modal')
		})
	})
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.project__container', {
    selectors: {
        target: '.project__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active project */
const linkProject = document.querySelectorAll('.project__item')

function activeProject () {
	linkProject.forEach(l=> l.classList.remove('active-project'))
	this.classList.add('active-project')
}

linkProject.forEach(l=> l.addEventListener('click', activeProject))

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// To obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// To validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})