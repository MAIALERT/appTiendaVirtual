import * as React from 'react';
import { Text, View, StyleSheet, Image} from "react-native";
//import logoPrincipal from "./assets/imgLogo.png";
import logoPrincipal from "./assets/images/imgOtros/imgPortadaHome.png";

function Home () {
 return(
  <View style={{ flex: 1 }}>
  {/* <View style={styles.container} /> */}
  <Image style={styles.logo} source={logoPrincipal}></Image>
  <Text style={styles.textoHome}>
    Somos tienda online,  te ofrecemos productos de maquillaje totalmente hechos a base de ingredientes naturales.
    Cada uno de nuestros productos cuenta con un sistema de filtro solar, control de imperfecciones, vitaminas A, E y un toque de colágeno que ayuda al cuidado del rostro, fortaleciendo el embellecimiento de la piel.
  </Text>
  {/* <View style={styles.textoHome}/> */}
  <View style={{ flex: 3, backgroundColor: '#000' }} />
</View>
 );

}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex:3,
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  logo: {
    flex: 2.2,
    width: 412,
    //height: 180,
  },
  textoHome: {
    flex: 3,
    fontSize: 14,
    backgroundColor: '#FFDEEF',
    textAlign: 'justify',
    lineHeight: 19,
  },
});

