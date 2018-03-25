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
    console.log('Your shopping cart is empty.');
    return;
  }
  else if (cart.length===1){
    console.log('In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].itemPrice + '.');
    return;
  }
  else if (cart.length===2){
    console.log('In your cart, you have '+ cart[0].itemName +' at $'+ cart[0].itemPrice + ', and '+ cart[1].itemName +' at $'+ cart[1].itemPrice + '.')
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
