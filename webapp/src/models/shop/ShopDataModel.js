/* eslint-disable prettier/prettier */
export default class ShopDataModel {
  constructor() {
    this.shopItems = [];
    this.count = 0;
  }

  getShopItems() {
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
