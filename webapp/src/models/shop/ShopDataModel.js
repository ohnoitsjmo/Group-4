import axios from "axios";

/* eslint-disable prettier/prettier */
export default class ShopDataModel {
  constructor() {
    this.shopItems = [];
    this.count = 0;
  }

  getShopItems() {
    return this.shopItems;
  }

  async populateShopItems() {
    let response = await axios.get('api/product')
    for(let i = 0; i < response.data.length; i++){
      response.data[i].info = response.data[i].description
      response.data[i].remainingInventory = response.data[i].stock
      response.data[i].category = ['Woodwinds','Strings','Brass','Keys','Percussion','Accessories','Sales'][i % 7]
    }
    this.setShopItems(response.data);
    return this.shopItems;
  }

  setShopItems(data) {
    this.shopItems = [];
    data.forEach(item => {
        this.shopItems.push({
            "id": this.count,
            "name": item.name,
            "image": item.image,
            "category": item.category.toLowerCase(),
            price: item.price,
            info: item.info,
            remainingInventory: item.remainingInventory,
        });
        this.count++;
    });
    console.log(this.shopItems.length)
    console.log(this.shopItems)
  }

  appendShopItems(data) {
    data.forEach(item => {
        this.shopItems.push({
            "id": this.count,
            "name": item.name,
            "image": item.image,
            "category": item.category.toLowerCase(),
            price: item.price,
            info: item.info,
            remainingInventory: item.remainingInventory,
        });
        this.count++;
    });
  }

  clearShopItems() {
    this.shopItems = [];
  }
}
