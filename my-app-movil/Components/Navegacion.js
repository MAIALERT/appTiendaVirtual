import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
function Navegacion() {
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="-Crystal-" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={home} />
        </Stack.Navigator>
      </NavigationContainer>

    )
     

}
export default Navegacion;