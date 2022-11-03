function selectAll(){
    var skills = document.querySelectorAll('.skill');
    for(var i = 0; i<skills.length; i++){
        skills[i].checked = true;
    }
}
function addItemQuantity(quantity){
    var amountField = document.querySelector('#amount');
    var amount = parseInt(amountField.innerHTML);
    var resultField = document.querySelector('#itemPrice');
    amount = amount+quantity;
    if(amount>=0){
        amountField.innerHTML = amount;
        resultField.innerHTML = amount*300;
    }
}