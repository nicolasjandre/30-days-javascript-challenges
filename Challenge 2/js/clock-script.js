export class Clock {
    constructor() {
        setInterval(this.setDate, 1000)
    }

    setDate() {
        const fullTime = new Date()

        const secondHand = document.querySelector('.second-hand')
        const seconds = fullTime.getSeconds()
        const secondsDegrees = ((seconds / 60) * 360) + 90

        const minutesHand = document.querySelector('.min-hand')
        const minutes = fullTime.getMinutes()
        const minutesDegrees = ((minutes / 60) * 360) + 90

        const hourHand = document.querySelector('.hour-hand')
        const hours = fullTime.getHours()
        const hoursDegrees = ((hours / 12) * 360) + 90

        if (seconds === 0) {
            secondHand.style.transition = "none"
        } else if (seconds === 1) { 
            secondHand.style.transition = ".5s" 
        }
        
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`
        minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    }
}