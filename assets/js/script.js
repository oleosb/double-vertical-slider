let upBtn = document.querySelector('.up')
let downBtn = document.querySelector('.down')
let leftSide = document.querySelectorAll('.left')
let rightSide = document.querySelectorAll('.card')

let leftPos = 0
let rightPos = -4


upBtn.addEventListener('click', () => {
        leftPos++
        rightPos--

        if (leftPos > 0) {
                leftPos = -4
                rightPos = 0
        }

        if (leftPos < -4) {
                leftPos = 0
                rightPos = -4
        }

        slide()
})

downBtn.addEventListener('click', () => {
        leftPos--
        rightPos++

        if (leftPos > 0) {
                leftPos = -4
                rightPos = 0
        }

        if (leftPos < -4) {
                leftPos = 0
                rightPos = -4
        }

        slide()
})

function slide() {
        console.log(leftPos, rightPos)

        leftSide.forEach(left => left.style.transform = `translateY(${leftPos}00%)`)

        rightSide.forEach(right => right.style.transform = `translateY(${rightPos}00%)`)
}