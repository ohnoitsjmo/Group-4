import { runInThisContext } from "vm";

/* eslint-disable prettier/prettier */
export default class CartDataModel {
  constructor() {
    this.cartItems = [];
    this.count = 0;
  }

  getCartItems() {
    return this.cartItems;
  }

  setCartItems(data) {
    this.cartItems = [];
    data.forEach(item => {
        this.cartItems.push({
            "id": item.id,
            "name": item.name,
            "image": item.image,            
            price: item.price,
            shipping: item.shipping,
            quantity: item.quantity
              });
        this.count++;
    });
  }

  appendCartItems(data) {
    data.forEach(item => {
        this.cartItems.push({
            "id": item.id,
            "name": item.name,
            "image": item.image,
            price: item.price,
            shipping: item.shipping,
            quantity: item.quantity
               });
        this.count++;
    });
    console.log("Appended cart data, this is now cart data: ", this.cartItems)
  }

  removeItemFromCart(id) {
    for(var i = 0; i < this.cartItems.length; i++)
    {
      if(this.cartItems[i].id == id)
      {
        this.cartItems.splice(i, 1);
        break;
      }
    }
    console.log("Item removed, this is now the cart data: ", this.cartItems);
  }

  clearCartItems() {
    this.cartItems = [];
  }
}
