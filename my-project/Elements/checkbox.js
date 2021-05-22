import React from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

class CheckBox1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IsChecked: true,
    };
  }
  updateForm(newState) {
    this.setState(newState);
  }
  render() {
    return (
      <View>
        <CheckBox
          onPress={() => this.updateForm({ IsChecked: !this.state.IsChecked })}
          checked={this.state.IsChecked}
          title="Click Here"
        />
      </View>
    );
  }
}

export default CheckBox1;
