function calculateTotal() {
    var phnPrice = document.getElementById('phn-price').innerText;
    var phnPriceNumber = parseInt(phnPrice);
    
    var casePrice = document.getElementById('casing-price').innerText;
    var casePriceNumber = parseInt(casePrice);
    
    var subTotal = phnPriceNumber + casePriceNumber;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('total').innerText = subTotal;
}


function addButton(btnId, productNo, price, productPrice) {
    const addBtn2 = document.getElementById(btnId);
    addBtn2.addEventListener('click', function () {
        const product = document.getElementById(productNo).value; // current number of casing or phone
        const productNoNumber = parseInt(product); // current number of phone or casing in integer value
        const totalProductNo = productNoNumber + 1; // it will increase number of phone or casing by one when plus button pressed 
        document.getElementById(productNo).value = totalProductNo; // set the total phone or casing number 

        const totalPrice = totalProductNo * price;
        document.getElementById(productPrice).innerText = totalPrice; // set the total price of the total number of phone or casing

        calculateTotal(productPrice);
    })


}


function subtractBtn(btnId, productNo, price, productPrice) {
    const subBtn2 = document.getElementById(btnId);
    subBtn2.addEventListener('click', function () {
        const product = document.getElementById(productNo).value; // current number of phone or casing
        const productNoNumber = parseInt(product);
        const totalProductNo = productNoNumber - 1; // it will decrease number of phone or casing by one when minus button pressed
        if (totalProductNo >= 0) {   // total number of phone or casing cannot be negative
            document.getElementById(productNo).value = totalProductNo; // set the total number of phone or casing

            const totalPrice = totalProductNo * price;
            document.getElementById(productPrice).innerText = totalPrice; // set the total price of the total number of phone or casing 

        }
        calculateTotal(productPrice);
    })


}


// calling function for plus and minus button operation of phn 
addButton('add-phn', 'phn-no', 1219, 'phn-price');
subtractBtn('sub-phn', 'phn-no', 1219, 'phn-price');

// calling function for plus and minus button operation of casing
subtractBtn('sub-casing', 'casing-no', 59, 'casing-price');
addButton('add-casing', 'casing-no', 59, 'casing-price');











// event handler for plus button of phone
// const addBtn = document.getElementById('add-phn');
// addBtn.addEventListener('click', function () {
//     const phnNo = document.getElementById('phn-no').value; // current number of phone
//     const phnNoNumber = parseInt(phnNo); // current number of phone in integer value
//     const totalPhnNo = phnNoNumber + 1; // it will increase number of phone by one when plus button pressed 
//     document.getElementById('phn-no').value = totalPhnNo; // set the total phone no 

//     const totalPrice = totalPhnNo * 1219;
//     document.getElementById('phn-price').innerText = totalPrice; // set the total price of the total number of phone
// })


// event handler for plus button of casing 
// const addBtn2 = document.getElementById('add-casing');
// addBtn2.addEventListener('click', function () {
//     const casingNo = document.getElementById('casing-no').value; // current number of casing
//     const casingNoNumber = parseInt(casingNo); // current number of casing in integer value
//     const totalCasingNo = casingNoNumber + 1; // it will increase number of casing by one when plus button pressed 
//     document.getElementById('casing-no').value = totalCasingNo; // set the total casing number 

//     const totalPrice = totalCasingNo * 59;
//     document.getElementById('casing-price').innerText = totalPrice; // set the total price of the total number of casing
// })


// event handler for minus button of casing
// const subBtn2 = document.getElementById('sub-casing');
// subBtn2.addEventListener('click', function () {
//     const casingNo = document.getElementById('casing-no').value; // current number of casing
//     const casingNoNumber = parseInt(casingNo);
//     const totalCasingNo = casingNoNumber - 1; // it will decrease number of casing by one when minus button pressed
//     if (totalCasingNo >= 0) {   // total number of casing cannot be negative
//         document.getElementById('casing-no').value = totalCasingNo; // set the total number of casing

//         const totalPrice = totalCasingNo * 59;
//         document.getElementById('casing-price').innerText = totalPrice; // set the total price of the total number of casing    
//     }
// })

// event handler minus button of phone
// const subBtn = document.getElementById('sub-phn');
// subBtn.addEventListener('click', function () {
//     const phnNo = document.getElementById('phn-no').value; // current number of phone
//     const phnNoNumber = parseInt(phnNo);
//     const totalPhnNo = phnNoNumber - 1; // it will decrease number of phone by one when minus button pressed
//     if (totalPhnNo >= 0) {   // total number of cannot be negative
//         document.getElementById('phn-no').value = totalPhnNo; // set the total phone no 

//         const totalPrice = totalPhnNo * 1219;
//         document.getElementById('phn-price').innerText = totalPrice; // set the total price of the total number of phone    
//     }
// })

