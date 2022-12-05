import { playSoundAndAddClass, removeClassWhenTransitionEnds } from "./sound-and-style.js"

const keys = document.querySelectorAll('.key')

window.addEventListener('keydown', playSoundAndAddClass)
keys.forEach(key => {
    key.addEventListener('transitionend', removeClassWhenTransitionEnds)
    key.addEventListener('click', playSoundAndAddClass)
})