import React from "react";
import { View } from "react-native";
import { AirbnbRating } from "react-native-elements";

class Raiting extends React.Component {
  render() {
    return (
      <View>
        <AirbnbRating
          count={5}
          reviews={["Terible", "Malo", "Normal", "Bueno", "Exelente"]}
          defaultRating={0}
          size={40}
        />
      </View>
    );
  }
}
export default Raiting;
