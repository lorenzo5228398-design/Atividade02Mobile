import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";

export default function Index() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);
  const acionarPopUp = () => {
    Alert.alert("Nome completo", nome + sobrenome)
  }


  return (

    <View style={[styles.container, {gap: 15}]}>



      <Button
        title="Ir para a atividade de alunos"
        onPress={() => { router.navigate('/TelaAlunos') }}
      />

      <Button
        title="Ir para Exemplo Style Text 1"
        onPress={() => { router.navigate('/ExemploStyle_View') }}
      />
      <Button
        title="Ir para a ativadade pessoa"
        onPress={() => { router.navigate('/TelaPessoa') }}
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
