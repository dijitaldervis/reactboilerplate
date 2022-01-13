import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { auth, fireStore } from "../../../../firebase";
export default class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alreadyDefined: false,
    };
  }

  buttonHandler = () => {
    fireStore
      .collection("cart")
      .where("productId", "==", this.props.product.productId)
      .get()
      .then((carts) => {
        carts.forEach((item) => {
          var dt = item.data();
          if (dt.productId) {
            this.setState({
              alreadyDefined: true,
            });
            return;
          }
        });


        // Ürün kayıtlı mı kontrol ediliyor.
        if (this.state.alreadyDefined) {
          console.log("ürün kayıtlı");
          return;
        }

        fireStore
          .collection("cart")
          .add({
            email: auth.currentUser.email,
            productId: this.props.product.productId,
            quantity: 1,
            price: this.props.product.price,
            productName : this.props.product.name
          })
          .then((x) => {
            console.log("ekleme tamamlandı.");
            console.log(x);
          })
          .catch((error) => error.message);
      })
      .catch((error) => {
        console.log("hata");
        console.log(error.message);
      });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.buttonHandler}>
        <FontAwesomeIcon icon={faShoppingCart} size={20} />
      </TouchableOpacity>
    );
  }
}
