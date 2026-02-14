import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as api from './api';
import Alumno from './Alumno';
import { ScrollView } from 'react-native-web';

export default function App() {
  const alumnos = api.getAlumnos();
  console.log(alumnos);

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text>Applicación de Alumnos Generica</Text>
        <ScrollView>{
          alumnos.map(alumno =>
            (<Alumno nombre={alumno.nombre} matricula={alumno.matricula}></Alumno>)
          )
        }</ScrollView>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    display: "flex",
    gap: "5px",
    backgroundColor: "#03d47d",
    width: "50vw",
    border: "5px solid black",
    borderRadius: "10px",
    padding: "1em",
    maxHeight: "90vh",
  }
});
