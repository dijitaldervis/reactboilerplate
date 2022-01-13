import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./src/screens/login-screen";
import Tab1 from "./src/screens/tabs/tab1";
import Tab2 from "./src/screens/tabs/tab2";
import Tab3 from "./src/screens/tabs/tab3";
import DrawerContent from "./src/drawer-content";
import Account1 from "./src/screens/account/account1";
import Account2 from "./src/screens/account/account2";

const BottomTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  createBottomTabbedPage = () => {
    return (
      <BottomTab.Navigator
        activeColor="#ffefe7"
        inactiveColor="#bd9985"
        barStyle={{ backgroundColor: "#c95313" }}
      >
        <BottomTab.Screen name="Tab1" component={Tab1} options={{title:"Ürünler"}} />
        <BottomTab.Screen name="Tab2" component={Tab2} options={{title:"Ara"}}/>
        <BottomTab.Screen name="Tab3" component={Tab3} options={{title:"Sepet"}}/>
      </BottomTab.Navigator>
    );
  };

  createTopTabbedPage = () => {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="Account" component={Account1} />
        <TopTab.Screen name="Orders" component={Account2} />
      </TopTab.Navigator>
    );
  };

  createDrawerPage = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Main" children={this.createBottomTabbedPage} />
        <Drawer.Screen name="Account" children={this.createTopTabbedPage} />
      </Drawer.Navigator>
    );
  };

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Home"
            children={this.createDrawerPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
