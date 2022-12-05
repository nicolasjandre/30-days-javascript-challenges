const a = document.querySelectorAll('a')
const lists = document.querySelectorAll('li')

a.forEach(a => a.addEventListener('mouseenter', unhiddeImage))
a.forEach(a => a.addEventListener('mouseleave', hideImage))


function unhiddeImage(event) {
    lists.forEach(li => {
        if (li.innerText !== event.relatedTarget.innerText) {
            li.classList.remove('unhidden')
            return
        }
        li.classList.add('unhidden')
    })
}

function hideImage(event) {
    lists.forEach(li => {
        if (li.innerText !== event.relatedTarget.innerText) return
        li.classList.remove('unhidden')
    })
}