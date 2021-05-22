import React from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";

class Buscador extends React.Component {
  state = {
    search: "",
  };
  updateForm = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <View>
        <SearchBar
          placeholder="escriba aqui"
          onChangeText={this.updateForm}
          value={search}
        />
      </View>
    );
  }
}

export default Buscador;
