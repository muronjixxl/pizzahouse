function getSize(){
    var orderedSize =$("#size").val() ;
    //console.log(orderedSize);
    return parseInt(orderedSize);
}
function getCrust() {
    var orderedCrust = $("#crust").val();
    //console.log(orderedCrust);
    return parseInt(orderedCrust);
}
function getToppings() {
    var orderedToppings = $("#toppings").val();
    console.log(orderedToppings);
    return parseInt(orderedToppings);
}
function getAmount() {
    var orderedAmount = $("#amount").val();
    //console.log(orderedAmount);
    return parseInt(orderedAmount);
}

function totalPrice(){
    var Total= (getSize() + getToppings()  + getCrust()) * getAmount() ;
    alert("The total payment is Ksh." + (Total));
    alert("Your order will be ready in ten minutes!")
} 
function delivery(){
    var Total= (getSize() + getToppings()  + getCrust()) * getAmount() ;
    alert("The total payment is Ksh." + (Total));
    prompt("Enter your location")
    alert("If not delivered within 20 minutes contact us")
}



