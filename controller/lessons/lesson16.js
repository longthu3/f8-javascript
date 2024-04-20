const swap = () => {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    if (isNaN(number1) || isNaN(number2)) {
        alert('Please enter number');
        return;
    }
    number1 = number1 + number2;
    number2 = number1 - number2;
    number1 = number1 - number2;
    document.getElementById('num1').value = number1;
    document.getElementById('num2').value = number2;
}

const calculateFormula = () => {
    alert(`The result is : ${10 + 20 + 5 ^ 10 / 2}`);
}

const findMaxNumber = () => {
    let number1 = parseInt(document.getElementById('_num1').value);
    let number2 = parseInt(document.getElementById('_num2').value);
    let number3 = parseInt(document.getElementById('_num3').value);

    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        alert('Please enter number to find max number');
        return;
    }

    let maxNumber = number1;

    if (number2 > maxNumber) {
        maxNumber = number2;
    }

    if (number3 > maxNumber) {
        maxNumber = number3;
    }
    alert(`The max number is : ${maxNumber}`);
}

const checkSign = () => {
    let number1 = parseInt(document.getElementById('num1-check').value);
    let number2 = parseInt(document.getElementById('num2-check').value);
    if (isNaN(number1) || isNaN(number2)) {
        alert('Please enter number to test');
        return;
    }

    if (number1 < 0 && number2 < 0 || number1 > 0 && number2 > 0) {
        alert('Cùng dấu');
    } else {
        alert('Khác dấu');
    }
}

const sortASC = () => {
    let number1 = parseInt(document.getElementById('_num1-sort').value);
    let number2 = parseInt(document.getElementById('_num2-sort').value);
    let number3 = parseInt(document.getElementById('_num3-sort').value);

    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        alert('Please enter number to sort');
        return;
    }
    if (number1 > number2) {
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }

    if (number2 > number3) {
        let temp = number2;
        number2 = number3;
        number3 = temp;
    }

    if (number1 > number2) {
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }
    alert(`The sorted number ASC is : ${number1}, ${number2}, ${number3}`);
}
