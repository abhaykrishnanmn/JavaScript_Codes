// Reverse every word in a sentence:

function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversedWords = [];

    for (let word of words) {
        let reversedWord = reverseString(word);
        reversedWords.push(reversedWord);
    }

    return reversedWords.join(' ');
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);B. Perform sorting of an array in descending order (using a simple sorting algorithm, e.g., bubble sort):function bubbleSortDescending(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const inputArray = [5, 2, 9, 1, 5, 6];
bubbleSortDescending(inputArray);
console.log(inputArray);
