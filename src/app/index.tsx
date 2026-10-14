import Aluno from "@/components/Aluno";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";

export default function Index() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);
  const acionarPopUp = () => {
    Alert.alert("Nome completo", nome + sobrenome)
  }
  return (

    <View style={styles.container}>

      <Pressable onPress={() => {
        Alert.alert(`Campo${campo}`)
        console.log('Olá terminal')
      }}>
      </Pressable>
    


      <Aluno />





     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
