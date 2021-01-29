const addBtn = document.getElementById('add-btn1');
addBtn.addEventListener('click', function(){
    console.log('add btn clicked');
    const phnNo = document.getElementById('phn-no').value;
    // console.log(phnNo);
    const phnNoNumber = parseInt(phnNo);
    const totalPhnNo = phnNoNumber + 1;
    // console.log(totalPhnNo);
    document.getElementById('phn-no').value = totalPhnNo;

    const priceNo1 = document.getElementById('price1').innerText;
    const priceNo1Number = parseInt(priceNo1);
    // console.log(priceNo1Number);
    const totalPrice = totalPhnNo * priceNo1Number;
    console.log(priceNo1Number);
    document.getElementById('price1').innerText = totalPrice;
})