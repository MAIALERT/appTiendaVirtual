import React, {useState} from 'react';
import axios from "axios";
import { StyleSheet, View} from 'react-native';
import { Input, Button, Icon, Text} from 'react-native-elements';

export default function App() {

  
  //PASO 2
  /*Aqui vamos a crear un estado donde vamos a 
  guardar la data del formulario.(Objeto)*/
  const [formData, setFormData] = useState(defaulFormValues())
  /*vamos hacer que el estado inicial sea una funcion 
  para que lo podamos utilizar en varias partes*/
  
  //PASO 4
  /*initialState => Aqui le vamos a decir a este estado 
  que cuando arranque me inicie con una funcion que en este 
  caso es "defaulFormValues()"


   //PASO 5
  /* Aqui vamos hacer un metodo para que cuando nos cambie
  el campo "CUALQUIERA" para que nos almacene el nombre, deacripcion
  resive dos parametros uno es level y el tipo de campo
  
  */ 
  const onChange = (e, type) => {
    
    /*setFormData: Almacena 
    vas a llevarle lo que ya tiene el formData pero le vas a colocar
    al campo typo el valor del texto
     e.nativeEvent.text => contiene el valor del texto
    
     [type] => Dinamico quiren decir los corchetes
    */
   setFormData({ ...formData, [type]: e.nativeEvent.text})

  }

  //PASO 6 => colocar eventos a los input
  /*le vamos a decir que cuando cambie en el onchange
   recibe funcion tipo flecha como parametro devuelve un evento(e) que es
   el contenido, aqui nos llama la funcion onChange le pasamos el event y el 
   campo que cambio "nombre" lo que va hacer es que el [type] 
   tomo lo que se digite
  */

  //PASO7 REGISTRO
  const registerRol = async () => {
    const result = {
      statusResponse: true,
      error: null
    }
    
    const a = await axios.post('http://192.168.0.103:4000/roles', {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
    })

    if (result.statusResponse) {
      return (result.error)
    }
  }

  return (
  //PASO 1
    <View styles={styles.container}>
  

      <Text></Text> 
      <Text></Text> 
      <Text>Registro Rol</Text> 
      <Text></Text> 
      <Input
        containerStyle={styles.input}
        placeholder='Ingrese el Nombre'
        onChange={(e) => onChange(e, "nombre")}
        rightIcon={
          <Icon
            type="material-community"
            name="pencil"
            iconStyle={styles.icon}
          />
        }
    
      />
       <Input
        containerStyle={styles.input}
        placeholder='Ingrese la Descripcion'
        onChange={(e) => onChange(e, "descripcion")}
        rightIcon={
          <Icon
            type="material-community"
            name="card-text-outline"
            iconStyle={styles.icon}
          />
        }
      /> 
      <Button
        title="Registrar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        //onPress={() => console.log(formData)}
        onPress={() => registerRol()}
      />
    </View>
  );
}
   //PASO 3
  /* Esta constante tipo flecha nos va a devolver los valores del formulario*/
  const defaulFormValues = () => {
    return { nombre: "",descripcion: ""}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
     width: "100%",  
  },
  btnContainer: {
     marginTop: 20,
     width: "80%",
     alignSelf: "center"
  },
  btn: {
   backgroundColor: "#90EE90"
  },
  icon: {
      color: "#90EE90"
  }
});


