import { StyleSheet, Text, View, Button } from 'react-native';
 
export default function Alumno(props){
    return(
    <View style={styles.container}>
    <Text>{props.nombre}</Text>
    <Text>{props.matricula}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        border: "2px solid black",
        borderRadius: "5px",
        margin: "0.3rem",
        padding: "0.2rem",
    },
});