var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = new Object();
 newItem.itemName = item;
 newItem.itemPrice = Math.floor(Math.random()*100);
 cart.push(newItem);
 return(item + ' has been added to your cart.');
}

function viewCart() {
  if (cart.length===0){
    return('Your shopping cart is empty.');
  }
  else if (cart.length===1){
    return('In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + '.');
  }
  else if (cart.length===2){
    return('In your cart, you have '+ cart[0].itemName +' at $'+ cart[0].itemPrice + ', and '+ cart[1].itemName +' at $'+ cart[1].itemPrice + '.');
  }
  else{
    var sentence = [];
    for(var i=0; i<cart.length-1;i++){
      sentence.push(' '+ cart[i].itemName + ' at $' + cart[i].itemPrice);
    }
    var j = cart.length - 1;
    return('In your cart, you have' + sentence + ', and ' + cart[j].itemName + ' at $' + cart[j].itemPrice + '.')
  }
}

function total() {
  var t = 0;
  for(var i=0; i<cart.length;i++){
    t = t + cart[i].itemPrice;
  }
  return t;
}

function removeFromCart(item) {
  for(var i=cart.length-1; i>=0;i--){
    if (cart[i].itemName===item){
      return cart.splice(i, 1);
    }
    else{
      return('That item is not in your cart.');
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
