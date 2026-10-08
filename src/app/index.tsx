import Aluno from "@/components/Aluno";
import Multiplicacao from "@/components/Multiplicacao";
import Pessoa from "@/components/Pessoa";
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, View } from "react-native";

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
      <Pessoa />


      <Aluno />


      <Multiplicacao />


      <Image source={{ uri: "https://i.pinimg.com/originals/fd/c0/fb/fdc0fb6914df284f053e9a54c3e2bd72.png" }}
        style={{ width: 200, height: 200 }}
      />


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
