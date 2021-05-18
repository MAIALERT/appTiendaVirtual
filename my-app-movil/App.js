import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import logoPrincipal from "./assets/imgLogo.png";
import logoPrincipal from "./assets/images/imgOtros/logoPrincipal.png";
import home from './Home';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
       
       <Image style={styles.logo} source={logoPrincipal}></Image>
     
       <TouchableOpacity 
        style={styles.button}
        //onPress={() => Alert.alert('Bienvenido!!!')}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Ingresar</Text> 
      </TouchableOpacity>
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="-Crystal-">
        <Stack.Screen name="-Crystal-" component={HomeScreen} />
        <Stack.Screen name="Home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 230,
    height: 230,
    marginBottom: 100,
  },
  button: {
    backgroundColor: "rgba(80,80,80,0.5)",
    alignItems: "center",
    padding: 10,
    width: 150,
    borderRadius: 4,
  },
  navegacion: { 
    color: '#fff',

  },
});


