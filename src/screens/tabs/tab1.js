import React, { Component } from "react";
import {
  FlatList,
} from "react-native";

import { tab1Data } from "./data/product-data";
import ProductItem from "./components/product-item";

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: tab1Data,
    };
  }

  renderItem = ({ item }) => {
    return (
      <ProductItem product={item}/>
    );
  };

  render() {
    return (
      <FlatList
        renderItem={this.renderItem}
        data={this.state.products}
        keyExtractor={(item) => item.productId}
      ></FlatList>
    );
  }
}
