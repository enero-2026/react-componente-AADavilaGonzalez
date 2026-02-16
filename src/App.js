import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import * as api from './api';
import Alumno from './Alumno';
import textStyles from './textStyles';

export default function App() {
  const alumnos = api.getAlumnos();

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={alumnos}
        ListHeaderComponent={
          <Text style={[textStyles.h1, {textAlign: "center"}]}>
            Applicacion de Alumnos Generica
          </Text>
        }
        keyExtractor={
          (item) => item.matricula.toString()
        }
        renderItem={ ({item}) => (
          <Alumno nombre={item.nombre} matricula={item.matricula}/>
        )}
      /> 
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    display: "flex",
    gap: 5,
    backgroundColor: "#131322",
    width: "50%",
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    maxHeight: "90%",
  }
});
