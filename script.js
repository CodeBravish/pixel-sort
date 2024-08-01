import { insertionSort, insertionSortSweep } from "./insertionSort.js"
import { selectionSortSweep, selectionSort } from "./selectionSort.js"

const canvas = document.getElementById("canvas")
const startButton = document.getElementById("start-button")
const algorithmSelect = document.getElementById("algorithm")
const shuffleButton = document.getElementById("reset")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ctx = canvas.getContext("2d")
let pixels = canvas.width

export let numbers = randomArray(pixels)

drawArray(numbers)
startButton.addEventListener("click", () => {
    startButton.disabled = true
    // selectionSortSweep(0, 0)
    // selectionSort()
    console.debug(algorithmSelect.value)
    switch (algorithmSelect.value) {
        case "selection":
            selectionSort()
            break
        case "insertion":
            console.debug(insertionSort())
            break
        default:
            break
    }
    // insertionSort()
    drawArray(numbers)
})

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    pixels = canvas.width
    shuffle()
})

shuffleButton.addEventListener("click", () => {
    shuffle()
})
function shuffle() {
    numbers = randomArray(pixels)
    drawArray(numbers)
}

export function drawArray(array, i = 0, j = 0) {
    const pixelWidth = canvas.width / array.length
    const pixelHeight = canvas.height / largest(array)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "transparent"

    array.forEach((number, index) => {
        const start = pixelWidth * index
        ctx.fillStyle =
            (i == index || j == index) && i != array.length - 1
                ? i == j
                    ? "green"
                    : "red"
                : "white"

        if (index > j && index < i) ctx.fillStyle = "red"
        if (i == array.length - 1) {
            startButton.disabled = false
        }
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
