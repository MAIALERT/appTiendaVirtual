import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

class Header1 extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "green" }}
          centerComponent={{ text: "Titulo", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "red" }}
        />
      </View>
    );
  }
}
export default Header1;
