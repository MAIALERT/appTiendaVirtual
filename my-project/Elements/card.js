import React from "react";
import { View } from "react-native";
import { Card, Icon, Button, Text } from "react-native-elements";

class Card1 extends React.Component {
  render() {
    return (
      <View>
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image source={require("../assets/checked.png")}></Card.Image>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    );
  }
}
export default Card1;
