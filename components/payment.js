document.querySelector('#payment').addEventListener('click',payment);
function payment()
{
    event.preventDefault();
    var cardNumber = document.querySelector('#cardNumber').value;
    var cvv = document.querySelector('#cvv').value;
    var expiry = document.querySelector('#expiry').value;
    if(cardNumber.length == 16 && cvv.length==3 && expiry)
    {
        alert('Order Placed');
        window.location.href = '../index.html';
    }
    else{
        alert('Enter correct details');
    }
}