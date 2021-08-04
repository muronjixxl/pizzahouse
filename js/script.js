function getType(){
    var orderedType =$("#type").val() ;
    console.log(orderedType)
    return orderedType;
}
function getSize(){
    var orderedSize =$("#size").val() ;
    console.log(orderedSize);
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

function pickup(){
    var Total= (getSize() + getToppings()  + getCrust()) * getAmount() ;
    alert("You have ordered " + getType(""))
    alert("The total payment is Ksh." + (Total));
    alert("Your order will be ready in ten minutes!")
} 
function delivery(){
    var Total= (getSize() + getToppings()  + getCrust()) * getAmount() ;
    alert("You have ordered " + getType(""))
    alert("The total payment is Ksh." + (Total));
   let location = prompt("Enter your location")
    if (location !==""){
    alert("Will be delivered in 20 minutes at " + location)
    }
}

function checkout(){
    var Total= (getSize() + getToppings()  + getCrust()) * getAmount() ;
    document.getElementById("checkout").innerHTML = "Your total price for "+getAmount("") + getType("")+ " crust: " + getCrust("") +" toppings: "+ getToppings("") + " size: " +getSize("") +" is Ksh. " + Total;
}






