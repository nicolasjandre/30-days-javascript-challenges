const a = document.querySelectorAll('a')
const lists = document.querySelectorAll('li')

a.forEach(a => a.addEventListener('mouseover', unhiddenImage))
a.forEach(a => a.addEventListener('mouseleave', hiddenImage))


function unhiddenImage(event) {
    lists.forEach(li => {
        if (li.innerText !== event.relatedTarget.innerText) return
        li.classList.add('unhidden')
    })
}

function hiddenImage(event) {
    lists.forEach(li => {
        if (li.innerText !== event.relatedTarget.innerText) return
        li.classList.remove('unhidden')
    })
}