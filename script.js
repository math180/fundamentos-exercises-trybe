

const getButton = document.querySelector('#submit-btn');
const getBtnClear = document.querySelector('#clear-btn');

const getInputName = document.querySelector('#inputName');
const getInputEmail = document.querySelector('#inputEmail');
const getCheckBox = document.querySelectorAll('.form-check-input');
const getTextArea = document.querySelector('#floatingTextarea2');
const getInputDate = document.querySelector('#input-date');
const getInputCheck = document.querySelector('#exampleCheck1');
const getCheckBox2 = document.querySelector('#checkbox2');


function getNameValue(event) {
    event.preventDefault();
    console.log(getInputName.value);
}
getButton.addEventListener('click', getNameValue);

function clearValues() {
    getInputName.value = '';
    getInputEmail.value = '';
    for(let i = 0; i < getCheckBox.length; i += 1) {
        getCheckBox[i].checked = 0
    }
    getTextArea.value = '';
    getInputDate.value = '';
} 

getBtnClear.addEventListener('click', clearValues);