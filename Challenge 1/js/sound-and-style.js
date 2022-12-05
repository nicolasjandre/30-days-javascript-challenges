export function playSoundAndAddClass(event) {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`) || document.querySelector(`audio[data-key="${event.target.dataset.key}"]`) || document.querySelector(`audio[data-key="${event.path[1].dataset.key}"]`)
    const key = document.querySelector(`.key[data-key="${event.code}"]`) || document.querySelector(`.key[data-key="${event.target.dataset.key}"]`) || document.querySelector(`.key[data-key="${event.path[1].dataset.key}"]`)

    if (!audio) return

    key.classList.add('active')
    
    audio.currentTime = 0
    audio.play()
}

export function removeClassWhenTransitionEnds(event) {
    if (event.propertyName !== 'transform') return
    this.classList.remove('active')
}