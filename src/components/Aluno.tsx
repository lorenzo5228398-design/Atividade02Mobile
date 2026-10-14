import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";


export default function Aluno() {


    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [turma, setTurma] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [media, setMedia] = useState(0);
    const [ativado, setAtivado] = useState(false);


    const acionarPopUp = () => {
        setMedia((Number(nota1) + Number(nota2)) / 2)
        setAtivado(true);
        

    }

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
            <Text>



                {(ativado) &&
                    ((media > 7) ?
                        <View>

                            <Text>Média: {media}</Text>

                            <Text>Status: Aprovado!!</Text>

                        </View>
                        :
                        <View>

                            <Text>Média: {media}</Text>

                            <Text>Status: Reprovado!!</Text>
                        </View>)

                }


            </Text>
        </View >
    )

}