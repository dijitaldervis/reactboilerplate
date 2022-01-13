import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ProductItem from "./components/product-item";
import { tab1Data } from "./data/product-data";
export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      resultData: [],
    };
  }

  searchHandler = () => {
    var result = tab1Data.filter((x) => x.name == this.state.productName);
    if (result.length <= 0) {
      this.setState({
        itemNotFound: true,
      });
    } else {
      this.setState({
        itemNotFound: false,
      });
    }
    this.setState({
      resultData: result,
    });
  };

  renderItem = ({ item }) => {
    return <ProductItem product={item} />;
  };

  render() {
    return (
      <View>
        <View style={this.styles.filterPanelContainer}>
          <View style={this.styles.filterPanel}>
            <Text style={this.styles.lblUrunAdi}>Ürün Adı: </Text>
            <TextInput
              style={this.styles.txtUrunAdi}
              onChangeText={(text) => {
                this.setState({
                  productName: text,
                });
              }}
            ></TextInput>
          </View>
          <View style={this.styles.searchButtonContainer}>
            <View style={this.styles.searchButton}>
              <TouchableOpacity onPress={this.searchHandler}>
                <Text style={{ fontWeight: "bold" }}>Ara</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.state.itemNotFound ? (
          <View>
            <Text>Ürün Bulunamadı</Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={this.state.resultData}
              renderItem={this.renderItem}
            ></FlatList>
          </View>
        )}
      </View>
    );
  }

  styles = StyleSheet.create({
    searchButtonContainer: {
      flexDirection: "row",

      justifyContent: "flex-end",
      alignItems: "flex-end",
      flex: 1,
    },
    searchButton: {
      borderColor: "black",
      borderWidth: 1.5,
      backgroundColor: "white",
      width: 35,
    },
    filterPanelContainer: {
      borderWidth: 1.5,
      borderColor: "black",
      margin: 5,
      borderRadius: 5,
      height: 50,
    },
    filterPanel: {
      flex: 1,
      flexDirection: "row",
    },
    resultPanelContainer: {},
    lblUrunAdi: {
      fontSize: 12,
      fontWeight: "bold",
      flex: 1,
    },
    txtUrunAdi: {
      borderWidth: 1.5,
      margin: 3,
      borderColor: "black",
      backgroundColor: "white",
      flex: 1,
      height: 20,
    },
  });
}
