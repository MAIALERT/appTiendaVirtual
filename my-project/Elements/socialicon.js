import React from "react";
import { View } from "react-native";
import { SocialIcon } from "react-native-elements";

class Social extends React.Component {
  render() {
    return (
      <View>
        <SocialIcon light raised={false} type="gitlab" />
        <SocialIcon title="Facebook" button type="facebook" />
      </View>
    );
  }
}
export default Social;
