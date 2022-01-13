import React, { Component } from "react";
import {
  View,
  Text,
  ViewBase,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { auth, fireStore } from "../../../firebase";
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      cartTotal: 0,
    };
  }

  styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    headerContainer: {
      flex: 1,
      flexDirection: "row",
    },
    rowContainer: {
      flexDirection: "row",
    },
    footerContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      borderColor: "#e0e0e0",
      borderWidth: 2,
      margin: 2,
      backgroundColor: "white",
    },
    cartColumn: {
      borderColor: "#e0e0e0",
      borderWidth: 2,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    bodyContainer: {
      flex: 10,
    },
  });

  componentDidMount() {
    var list = [];
    var total = 0;
    fireStore
      .collection("cart")
      .get()
      .then((response) => {
        response.forEach((item) => {
          console.log(item.data());
          list.push(item.data());
        });

        list.map((satir) => {
          total += satir.price * satir.quantity;
        });

        this.setState({
          cartItems: list,
          cartTotal: total,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  renderItem = ({ item }) => {
    return (
      <View style={this.styles.rowContainer}>
        <View style={[this.styles.cartColumn, { flex: 4 }]}>
          <Text>{item.productName}</Text>
        </View>
        <View style={[this.styles.cartColumn, { flex: 2 }]}>
          <Text>{item.quantity}</Text>
        </View>
        <View style={[this.styles.cartColumn, { flex: 2 }]}>
          <Text>{item.price}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={this.styles.mainContainer}>
        <View style={this.styles.headerContainer}>
          <View style={[this.styles.cartColumn, { flex: 4 }]}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>
              Urun Adı
            </Text>
          </View>
          <View style={[this.styles.cartColumn, { flex: 2 }]}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>Adet</Text>
          </View>
          <View style={[this.styles.cartColumn, { flex: 2 }]}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>Fiyat</Text>
          </View>
        </View>
        
        <View style={this.styles.bodyContainer}>
          {this.state.cartItems.length <= 0 ? (
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
              <ActivityIndicator size={"large"}/>
            </View>
          ) : (
            <FlatList
              data={this.state.cartItems}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.productId}
            />
          )}
        </View>
        <View style={this.styles.footerContainer}>
          <View style={{ marginRight: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>Toplam</Text>
          </View>
          <View style={{ marginRight: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#626264" }}>
              {this.state.cartTotal}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
