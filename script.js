const container = document.querySelector('.container')
const text = document.querySelector('#text')

const body = document.querySelector('body')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breathe In'
    container.className = 'container grow'
    body.className = 'bg-grow'

    setTimeout(() => {
        text.innerText = 'Hold'
        body.className = 'bg-hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out'
            container.className = 'container shrink'
            body.className = 'bg-shrink'
        }, holdTime);

    }, breatheTime);
}

setInterval(breatheAnimation, totalTime)