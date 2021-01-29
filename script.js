const addBtn = document.getElementById('add-btn1');
addBtn.addEventListener('click', function(){
    console.log('add btn clicked');
    const phnNo = document.getElementById('phn-no').value; // current number of phone
    const phnNoNumber = parseInt(phnNo); // current number of phone in integer value
    const totalPhnNo = phnNoNumber + 1; // it will increase number of phone by one when plus button pressed 
    document.getElementById('phn-no').value = totalPhnNo; // set the total phone no 

    const totalPrice = totalPhnNo * 1219; 
    document.getElementById('price1').innerText = totalPrice; // set the total price of the total number of phone
})