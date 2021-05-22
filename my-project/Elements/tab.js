import React from "react";
import { View } from "react-native";
import { Tab } from "react-native-elements";

class Tab1 extends React.Component {
  render() {
    return (
      <View>
        <Tab>
          <Tab.Item title="titulo 1" />
          <Tab.Item title="titulo 2" />
          <Tab.Item title="titulo 3" />
        </Tab>
      </View>
    );
  }
}
export default Tab1;
