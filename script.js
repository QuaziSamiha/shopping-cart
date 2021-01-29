// event handler for plus button of phone
const addBtn = document.getElementById('add-phn');
addBtn.addEventListener('click', function () {
    const phnNo = document.getElementById('phn-no').value; // current number of phone
    const phnNoNumber = parseInt(phnNo); // current number of phone in integer value
    const totalPhnNo = phnNoNumber + 1; // it will increase number of phone by one when plus button pressed 
    document.getElementById('phn-no').value = totalPhnNo; // set the total phone no 

    const totalPrice = totalPhnNo * 1219;
    document.getElementById('phn-price').innerText = totalPrice; // set the total price of the total number of phone
})

// event handler minus button of phone
const subBtn = document.getElementById('sub-phn');
subBtn.addEventListener('click', function () {
    const phnNo = document.getElementById('phn-no').value; // current number of phone
    const phnNoNumber = parseInt(phnNo);
    const totalPhnNo = phnNoNumber - 1; // it will decrease number of phone by one when minus button pressed
    if (totalPhnNo >= 0) {   // total number of cannot be negative
        document.getElementById('phn-no').value = totalPhnNo; // set the total phone no 

        const totalPrice = totalPhnNo * 1219;
        document.getElementById('phn-price').innerText = totalPrice; // set the total price of the total number of phone    
    }
})

// event handler for plus button of casing 
const addBtn2 = document.getElementById('add-casing');
addBtn2.addEventListener('click', function () {
    const casingNo = document.getElementById('casing-no').value; // current number of casing
    const casingNoNumber = parseInt(casingNo); // current number of casing in integer value
    const totalCasingNo = casingNoNumber + 1; // it will increase number of casing by one when plus button pressed 
    document.getElementById('casing-no').value = totalCasingNo; // set the total casing number 

    const totalPrice = totalCasingNo * 59;
    document.getElementById('casing-price').innerText = totalPrice; // set the total price of the total number of casing
})

// event handler for minus button of casing
const subBtn2 = document.getElementById('sub-casing');
subBtn2.addEventListener('click', function () {
    const casingNo = document.getElementById('casing-no').value; // current number of casing
    const casingNoNumber = parseInt(casingNo);
    const totalCasingNo = casingNoNumber - 1; // it will decrease number of casing by one when minus button pressed
    if (totalCasingNo >= 0) {   // total number of casing cannot be negative
        document.getElementById('casing-no').value = totalCasingNo; // set the total number of casing

        const totalPrice = totalCasingNo * 59;
        document.getElementById('casing-price').innerText = totalPrice; // set the total price of the total number of casing    
    }
})
