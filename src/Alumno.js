import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import textStyles from './textStyles';

export default function Alumno(props){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => { setIsOpen(!isOpen); };

  return(
    <View style={styles.container}>
      <Text style={textStyles.h3}>
        <Text>{props.nombre}</Text>
        {isOpen && <Text> | Matricula: {props.matricula}</Text>}
      </Text>
      <TouchableOpacity style={styles.button} onPress={toggle}>
        <Text style={textStyles.body}>Mostrar Detalles</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 3,
      borderColor: "black",
      borderRadius: 5,
      margin: 10,
      padding: 10,
    },
    data: {
      flex: 1,
      flexDirection: "row",
    },
    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "#151f20",
      maxWidth: "20%",
      borderRadius: 3,
      padding: 3,
      margin: 3,
    },
});
