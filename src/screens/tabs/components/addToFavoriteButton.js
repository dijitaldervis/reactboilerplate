import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
export default class AddToFavoriteButton extends Component {
  constructor(props) {
    super(props);
  }

  buttonHandler = () => {
    console.log(this.props.productId);
    console.log("add to favorite");
  };

  render() {
    return (
      <TouchableOpacity onPress={this.buttonHandler}>
        <FontAwesomeIcon icon={faBookmark} size={20} />
      </TouchableOpacity>
    );
  }
}
