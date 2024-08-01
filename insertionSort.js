import { drawArray, numbers } from "./script.js"

export async function insertionSort(i = 1, check = false) {
    const level = i
    let key = numbers[i]
    let j

    for (j = i - 1; numbers[j] > key && j >= 0; j--) {
        numbers[j + 1] = numbers[j]
    }
    drawArray(numbers, i, j + 1)
    numbers[j + 1] = key

    if (i >= numbers.length - 1) {
        !check && insertionSort(1, true)
        return
    }

    // console.debug(i, j, numbers)

    requestAnimationFrame(() => insertionSort(i + 1, check))

    // setTimeout(() => {
    //     insertionSort(i + 1, check)
    // }, 1e-1000)
}

export function insertionSortSweep(i = 0, j = i - 1) {
    console.debug(i, j, numbers)

    if (numbers[j] > numbers[i] && j >= 0) {
        drawArray(numbers, j, j + 1)
        numbers[j + 1] = numbers[j]
        j--
    } else {
        drawArray(numbers, i, j + 1)
        numbers[j + 1] = numbers[i]
        j = i - 1
        i++
    }
    if (i > numbers.length) return false

    requestAnimationFrame(() => insertionSortSweep(i, j))

    // setTimeout(() => {
    //     (i + 1)
    // }, 500)
}
