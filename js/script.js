function getSize(){
    var orderedSize =$("#size").value ;
    return parseInt(orderedSize);
}
function getCrust() {
    var orderedCrust = $("#crust").value;
    return parseInt(orderedCrust);
}
function getToppings() {
    var orderedToppings = $("#toppings").value;
    return parseInt(orderedToppings);
}
function getAmount() {
    var selectedQuantity = $("#amount").value;
    return parseInt(selectedQuantity);
}

function totalPrice(){
    var Total= (getSize() + getToppings()  + getCrust()) * getAmount() ;
    alert("The total payment is Ksh." + (Total));
    alert("Your order will be ready in ten minutes!")
} 

/*let size=parseInt(size);
let crust=parseInt(crust);
let toppings=parseInt(toppings);
let amount=parseInt(amount);

function totalPrice(){
   let totalPrice= (size+crust+toppings)*amount
   alert("Your total payment is"+ (totalPrice))
   alert("Your order will be ready in ten minutes!")
}*/

