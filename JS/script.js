// Number Buttons
const numberBtnS = document.querySelectorAll('.btn-num');

numberBtnS.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        const number = numberBtn.innerText;
        const display = document.getElementById('display-field');
        display.value += number;
        console.log(typeof display.value);
    });
});

// calculation
document.getElementById('result').addEventListener('click', function () {
    const allValue = document.getElementById('display-field').value;
    const finalResult = eval(allValue);
    document.getElementById('display-field').value = finalResult;
})


// Clear Button(DE)
document.getElementById('clear-btn').addEventListener('click', function () {
    const de = document.getElementById('display-field');
    de.value = de.value.slice(0, -1);
})

// All Clear Button 
document.getElementById('all-clear-btn').addEventListener('click', function () {
    document.getElementById('display-field').value = '';
})

