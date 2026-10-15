import Aluno from "@/components/Aluno";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

export default function Index() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);
  const acionarPopUp = () => {
    Alert.alert("Nome completo", nome + sobrenome)
  }

type Alunos = {

nome: string,
idade: number,
turma: string,
nota1 : number,
nota2: number

}

const aluno1 = {nome: "Roberto" , idade: 12, turma: "A1", nota1: 10, nota2: 4}
const aluno2 = {nome: "Anaconda" , idade: 11, turma: "A2", nota1: 5, nota2: 4}
const aluno3 = {nome: "Jorge" , idade: 14, turma: "A1", nota1: 10, nota2: 10}
const aluno4 = {nome: "Robson" , idade: 15, turma: "A2", nota1: 2, nota2: 4}

const lista: Alunos[] = [aluno1, aluno2, aluno3, aluno4] 

  return (

    <View style={styles.container}>

      


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
