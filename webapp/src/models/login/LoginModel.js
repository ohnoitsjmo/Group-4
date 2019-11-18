/* eslint-disable prettier/prettier */
export default class LoginModel {
  constructor() {
    this.userInfo = {};
  }

  getUserInfo() {
    return this.userInfo;
  }

  setUserInfo(data) {
        this.userInfo = {
            "id": user.id,
            "first": user.first,
            "last": user.last,
            "email": user.email,
            password: user.password,
            creditcard: user.creditcard,
            address: user.address,
            role: user.role,
            order: user.orders,
        };
  }
}
