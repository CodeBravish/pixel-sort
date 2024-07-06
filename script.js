const canvas = document.getElementById("canvas")
const startButton = document.getElementById("start-button")
let ctx = canvas.getContext("2d")

const numbers = randomArray(500)

drawArray(numbers)
startButton.addEventListener("click", () => {
    startButton.disabled = true
    pixelSort(0, 0)
})

function pixelSort(i = 0, j = 0) {
    if (j >= numbers.length) {
        i++
        j = i
    }
    if (numbers[i] > numbers[j]) {
        let temp = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = temp
    } else {
    }
    if (i >= numbers.length) return

    // console.log(i, j, numbers)

    drawArray(numbers, i, j)

    // requestAnimationFrame(() => pixelSort(i, j + 1))
    setTimeout(() => {
        pixelSort(i, j + 1)
    }, 1e-1000)
}

function drawArray(array, i = 0, j = 0) {
    const pixelWidth = canvas.width / array.length
    const pixelHeight = canvas.height / largest(array)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "transparent"

    array.forEach((number, index) => {
        const start = pixelWidth * index
        ctx.fillStyle =
            (i == index || j == index) && i != array.length - 1
                ? "red"
                : "white"
        ctx.fillRect(start, canvas.height, pixelWidth, -pixelHeight * number)
    })
}

function largest(array) {
    let largest = array[0]
    array.forEach((number) => {
        if (number > largest) largest = number
    })
    return largest
}

function randomArray(length) {
    let array = new Array(length)

    for (let i = 0; i < array.length; i++) {
        array[i] = i + 1
    }
    for (let i = 0; i < 1; i++) {
        for (let i = 0; i < array.length; i++) {
            let randIndex = Math.round(Math.random() * (length - 1))
            let tmp = array[i]
            array[i] = array[randIndex]
            array[randIndex] = tmp
        }
    }

    return array

    function isInArray(num) {
        array.forEach((arrNum) => {
            if (arrNum === num) return true
        })
        return false
    }
}
