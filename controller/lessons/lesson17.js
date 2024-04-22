const showFee = () => {
    const km = document.getElementById('taxi-km').value;
    if (!km) {
        alert('Please enter the distance in km');
        return;
    }
    let resultFee = 0;
    if (km <= 1) {
        resultFee += 15000;
    } else if (km > 1 && km <= 5) {
        resultFee += 15000 + (km - 1) * 13500;
    } else if (km > 5 && km <= 120) {
        resultFee += 15000 + 4 * 13500 + (km - 5) * 11000;
    } else {
        const discountFee = (15000 + 4 * 13500 + (km - 5) * 11000) * 0.1;
        resultFee += (15000 + 4 * 13500 + (km - 5) * 11000) - discountFee;
    }
    //format to vietnam dong
    resultFee = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(resultFee);
    alert(`The fee is: ${resultFee}`);
}


const calculateElectricCost = () => {
    const kwh = document.getElementById('electric-kwh').value;

    if (!kwh) {
        alert('Please enter the kwh');
        return;
    }

    let resultCost = 0;

    if (kwh > 0 && kwh <= 50) {
        resultCost += kwh * 1678;
    } else if (kwh > 50 && kwh <= 100) {
        resultCost += kwh * 1734;
    } else if (kwh > 100 && kwh <= 200) {
        resultCost += kwh * 2014;
    } else if (kwh > 200 && kwh <= 300) {
        resultCost += kwh * 2536;
    } else if (kwh > 300 && kwh <= 400) {
        resultCost += kwh * 2834;
    } else {
        resultCost += kwh * 2927;
    }
    resultCost = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(resultCost);
    alert(`The cost is: ${resultCost}`);
}

const calculateFormula = () => {
    const n = document.getElementById('n').value;
    if (!n) {
        alert('Please enter the number n');
        return;
    }

    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i * (i + 1);
    }

    alert(`The result is: ${result}`);
}

const checkPrimeNumber = () => {
    const number = document.getElementById('prime-number').value;
    if (!number || number < 1) {
        alert('Please enter the positive number');
        return;
    }

    if (isPrimeNumber(number)) {
        alert(`${number} is a prime number`);
    } else {
        alert(`${number} is not a prime number`);
    }
}

/**
 * The function to check the number is prime number or not
 * 
 * @param {*} number the value of number
 * @returns true if the number is prime number, otherwise return false
 */
const isPrimeNumber = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const drawTriangle = () => {
    const row = document.getElementById('row-triangle-draw').value;

    if (!row || row < 1) {
        alert('Please enter the positive number to draw the triangle');
        return;
    }

    let index = 0;
    let result = '';
    for (let i = 1; i <= row; ++i) {
        for (let j = 1; j <= i; ++j) {
            result += ++index + ' ';
        }
        result += '</br>';
    }
    document.getElementById('triangle-show').innerHTML = result;
}

function drawChessboard() {
    const board = document.getElementById('chessboard');
    for (let i = 0; i < 8; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if ((i + j) % 2 === 0) {
                cell.classList.add('white');
            } else {
                cell.classList.add('black');
            }
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

drawChessboard();

const drawNumericBoard = () => {
    const board = document.getElementById('numeric-board');
    for (let i = 1; i <= 10; ++i) {
        let result = '<span>';
        const elm = document.createElement('div');
        elm.className = 'numeric-row';
        for (let j = 1; j <= 10; ++j) {
            result += `${i} x ${j} = ${i * j}</br>`;
        }
        elm.innerHTML = result + '</span>';
        board.appendChild(elm);
    }
}

drawNumericBoard();

const calculateFormulaWithOutLoop = () => {
    const number = document.getElementById('n-without-loop').value;
    if (!number || number <= 1) {
        alert('Please enter the positive number and greater than 1');
        return;
    }
    alert(`The result is: ${calc(number).toFixed(2)}`);
}

const calc = (n) => {
    return n === 1 ? 1 : 1 / n + calc(n - 1);
}
