import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function Pessoa() {
    const acionarPopUp = () => {
    Alert.alert("Nome completo", nome + sobrenome)
  }
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    return (
    <View>
         
      <Text>Nome: </Text>
      <TextInput placeholder="Digite seu nome: "
        value={nome}
        onChangeText={(text) => { setNome(text) }}

      />
      <Text>Sobrenome: </Text>
      <TextInput placeholder="Digite seu Sobrenome: "
        value={sobrenome}
        onChangeText={(text) => { setSobrenome(text) }}

      />

      <Pressable onPress={acionarPopUp}>
        <Text>Clique aqui para mostrar</Text>
      </Pressable>
      
    </View >
    )
}