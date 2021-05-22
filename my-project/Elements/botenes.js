import React from "react";
import { View } from "react-native";
import { ButtonGroup } from "react-native-elements";

class Botones extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  render() {
    const buttons = ["Boton1", "Boton2", "Boton3"];
    return (
      <View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
      </View>
    );
  }
}

export default Botones;
