import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  signOut = () => {
    auth
      .signOut()
      .then((x) => this.props.navigation.navigate("Login"))
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={this.styles.topPart}>
          <View>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("Main");
            }}>
              <Text>Shop</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("Account");
            }}>
              <Text>Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={this.styles.bottomPart}>
          <TouchableOpacity
            style={this.styles.btnContainer}
            onPress={this.signOut}
          >
            <Text style={this.styles.btnText}>Çıkış</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    topPart: {
      margin: 10,
      backgroundColor: "#FFFFFF",
      flex: 10,
    },
    bottomPart: {
      margin: 10,
      backgroundColor: "#b9b9b9",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    btnContainer: {
      flex: 1,
      alignItems: "center",
      height: "100%",
    },
    btnText: {
      fontWeight: "bold",
      color: "#044e5d",
    },
  });
}
