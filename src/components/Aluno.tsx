import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";


export default function Aluno() {

    const acionarPopUp = () => {
        const media = (Number(nota1) + Number(nota2)) / 2
        Alert.alert(
            "Nome completo",
            nome + "\n" +
            idade + "\n" +
            turma + "\n" +
            "Média: " + media
        );
    }
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [turma, setTurma] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    return (
        <View>

            <Text>Nome: </Text>
            <TextInput placeholder="Digite seu nome: "
                value={nome}
                onChangeText={(text) => { setNome(text) }}

            />
            <Text>Idade: </Text>
            <TextInput placeholder="Digite sua idade: "
                value={idade}
                onChangeText={(Text) => { setIdade(Text) }}

            />

            <Text>Turma: </Text>
            <TextInput placeholder="Digite seu turma: "
                value={turma}
                onChangeText={(text) => { setTurma(text) }}

            />

            <Text>Primeira nota: </Text>
            <TextInput placeholder="Digite sua primeira nota: "
                value={nota1}
                onChangeText={(text) => { setNota1(text) }}
                keyboardType="numeric"

            />

            <Text>Segunda nota: : </Text>
            <TextInput placeholder="Digite sua segunda nota: "
                value={nota2}
                onChangeText={(text) => { setNota2(text) }}
                keyboardType="numeric"
            />

            <Pressable onPress={acionarPopUp}>
                <Text>Clique aqui para mostrar</Text>
            </Pressable>

        </View >
    )

}