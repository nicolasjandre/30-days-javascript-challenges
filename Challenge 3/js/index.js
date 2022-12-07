const inputs = Array.from(document.querySelectorAll('.inputs input'))

inputs.forEach(input => {
    input.addEventListener('input', handleLayoutChange)
})

function handleLayoutChange() {
    const suffix = this.dataset.sizing || ""
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}