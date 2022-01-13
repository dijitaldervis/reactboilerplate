import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { auth } from "../../firebase";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount(){
      auth.onAuthStateChanged((user)=>{
          if (user){
            this.props.navigation.navigate("Home", {
                user: user
            })
          }
      })
  }

  loginHandler = () => {

   
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
          if (response.user){
              this.props.navigation.navigate("Home", {
                  user: response.user
              })
          }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((uc) => {
        if (uc.user) {
          console.log(uc.user.email);
          console.log("Kişi kaydı yapıldı.");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <View>
        <View style={{ paddingTop: 150 }}>
          <TextInput
            style={this.styles.txtInput}
            placeholder="E-Mail Address"
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
          ></TextInput>
          <TextInput
            style={this.styles.txtInput}
            placeholder="Password"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          ></TextInput>
          <View style={this.styles.btnPanel}>
            <TouchableOpacity
              onPress={this.registerHandler}
              style={this.styles.btnContainer}
            >
              <Text style={this.styles.btnText}>Kayıt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.styles.btnContainer} onPress={this.loginHandler}>
              <Text style={this.styles.btnText}>Giriş</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    txtInput: {
      borderColor: "black",
      borderWidth: 2,
      height: 35,
      backgroundColor: "white",
      borderRadius: 5,
      margin: 5,
    },
    btnContainer: {
      borderColor: "black",
      borderWidth: 2,
      height: 35,
      backgroundColor: "white",
      borderRadius: 5,
      margin: 5,
      marginLeft: 20,
      marginRight: 20,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    btnText: {
      fontWeight: "bold",
    },
    btnPanel: {
      flexDirection: "row",
    },
  });
}
