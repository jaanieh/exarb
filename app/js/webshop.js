 //***** SHOPPING CART ***//
 
 var shoppingCart = {};
 shoppingCart.cart = [];
 
 shoppingCart.Item = function(name, price, count, itemImage){
    this.name = name
    this.price = price
    this.count = count
    this.itemImage = itemImage
};
   shoppingCart.addItemToCart = function(name, price, count, itemImage){
     for (var i in this.cart) {
         if(this.cart[i].name === name){
             this.cart[i].count += count;
             this.saveCart();
             return;
         }
     }
     var item = new this.Item(name, price, count, itemImage);
     this.cart.push(item);
       console.log(this.cart);
     this.saveCart();
 };
 
 
 shoppingCart.removeOneItemFromCart = function(name){
     for (var i in this.cart) {
         if(this.cart[i].name === name) {
             this.cart[i].count --;
             if (this.cart[i].count === 0) {
                 this.cart.splice(i, 1);
             }
             break;
         }
     }
     shoppingCart.saveCart();
 };
             
 shoppingCart.removeItemFromCart = function (name){
     for (var i in this.cart) {
         if (this.cart[i].name === name) {
             this.cart.splice(i, 1)
             break;
             
         }
     }
     this.saveCart();
 };
 

 
 shoppingCart.clearCart = function(){ // removes everything
     this.cart = [];
     this.saveCart();
 };
 
 
 shoppingCart.countCart = function() { // -> return totalCount
     var totalCount = 0;
     for (var i in this.cart){
         totalCount += this.cart[i].count;
     }
     return totalCount;
 };

 
 shoppingCart.totalCost = function(){ //-> returns totalCost
     var totalCost = 0;
     for (var i in this.cart){
         totalCost += this.cart[i].price*this.cart[i].count;
     }
     return totalCost.toFixed(2);
 };
 

 shoppingCart.listCart = function() { //-> display array of item
     var cartCopy = [];
     for (var i in this.cart){
         var item = this.cart[i];
         var itemCopy = {};
         for (var p in item) {
             itemCopy[p] = item[p];
         }
         itemCopy.total = item.price * item.count;
         cartCopy.push(itemCopy);
     }
     return cartCopy;
 };

 
  shoppingCart.saveCart = function(){
     localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
 };
 
 shoppingCart.loadCart = function(){
     this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
     if (this.cart === null) {
  this.cart = [];
 }
 };
 
 shoppingCart.loadCart();
