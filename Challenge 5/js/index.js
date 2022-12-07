const panels = Array.from(document.querySelectorAll('.panel'))
const mainAndHtml = {
    main: document.querySelector('main'),
    html: document.querySelector('html'),
    panels: document.querySelector('.panels'),
    h1: document.querySelector('h1'),
    body: document.querySelector('body')
}

panels.forEach(panel => {
    panel.addEventListener('mouseenter', slideEffect)
    panel.addEventListener('transitionend', transformText)
    panel.addEventListener('mouseleave', slideEffect)
})

function slideEffect() {
    panels.forEach(panel => panel != this ? panel.classList.remove('open') + panel.classList.remove('open-active') : panel.classList.add('open'))
}

function transformText(event) {
    panels.forEach( panel => {
        if ( event.propertyName == 'flex-grow' && panel == this ) this.classList.add('open-active')
    })
}