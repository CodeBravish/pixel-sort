import { numbers, drawArray } from "./script.js"

export function selectionSortSweep(i = 0, j = 0, check = false) {
    if (j >= numbers.length) {
        i++
        j = i
    }
    if (numbers[i] > numbers[j]) {
        let temp = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = temp
    }

    if (i >= numbers.length) {
        !check && selectionSort(1, true)
        return false
    }

    // console.debug(i, j, numbers)

    drawArray(numbers, i, j)

    // requestAnimationFrame(() => pixelSort(i, j + 1, check))
    setTimeout(() => {
        selectionSortSweep(i, j + 1, check)
    }, 1e-1000)
}

export function selectionSort(i = 0, check = false) {
    let minIndex = i

    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) minIndex = j
    }

    drawArray(numbers, i, minIndex)

    if (minIndex != i) {
        let temp = numbers[i]

        numbers[i] = numbers[minIndex]
        numbers[minIndex] = temp
    }

    if (i >= numbers.length) {
        !check && selectionSort(1, true)
        return
    }

    console.debug(i, minIndex, numbers)

    requestAnimationFrame(() => selectionSort(i + 1, check))
    // setTimeout(() => {
    //     selectionSort(i + 1)
    // }, 1000)
}
