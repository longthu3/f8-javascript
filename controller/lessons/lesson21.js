const globalArr = [4, 4, 8, 4, 10];

const filterDuplicateElements = (arr) => {
    let result = [];
    arr.forEach((item) => {
        if (!includes(result, item)) {
            result.push(item);
        }
    });
    return result;
}

const includes = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

console.log(filterDuplicateElements(globalArr));