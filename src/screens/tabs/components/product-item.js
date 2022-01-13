import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image } from "react-native";
import { tab1Style } from "../styles/tab1-style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "./addToCartButton";
import AddToFavoriteButton from "./addToFavoriteButton";
export default class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  styles = StyleSheet.create(tab1Style)

  render() {
    return (
      <View style={this.styles.productContainer}>
        <View style={this.styles.productTop}>
          <View style={this.styles.productTitleContainer}>
            <Text style={this.styles.productTitle}>
              {this.props.product.name}
            </Text>
          </View>
          <View style={this.styles.productContentContainer}>
            <View style={this.styles.productDescriptionContainer}>
              <Text style={this.styles.productDescription}>
                {this.props.product.description.substring(0,220)}
              </Text>
            </View>
            <View style={this.styles.imageContainer}>
              <Image
                source={{ uri: this.props.product.image }}
                style={this.styles.imageStyle}
              />
            </View>
          </View>
        </View>
        <View style={this.styles.productBottom}>
          <View style={this.styles.productPriceContainer}>
            <Text style={this.styles.productPrice}>
              {this.props.product.price}
            </Text>
          </View>
          <View style={this.styles.productButtonContainer}>
            {!this.props.product.favorite ? (
              <AddToFavoriteButton productId={this.props.product.productId}/>
            ) : (
              <View></View>
            )}
            {!this.props.product.cart ? (
              <AddToCartButton product={this.props.product}/>
            ) : (
              <View></View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
