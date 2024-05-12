const numbers = [5, 1, 9, 8, 10];

//arr[i] = num
//i + 1 = arr[i]
// 5 3 


const element = 4;

const insertElement = (arr, element, index) => {
    const length = arr.length;
    for (let i = length; i > index; --i) {
        arr[i] = arr[i - 1];
    }
    arr[index] = element;
    return arr;
}


const bubbleSort = (arr) => {
    const length = arr.length;

    for (let i = 0; i < length - 1; ++i) {
        for (let j = i + 1; j < length; ++j) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const sortedNumber = bubbleSort(numbers);

console.log(sortedNumber);
console.log(insertElement(sortedNumber, 22, 2));