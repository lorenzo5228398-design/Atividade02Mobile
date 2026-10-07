import { Text, View } from "react-native";


type AlunoProps = {
    nome: string;
    idade: string;
    turma: string;
    nota1: number;
    nota2: number;


}

export default function Aluno(props: AlunoProps) {

    return (<View>
        <Text>
            Nome: {props.nome}
        </Text>
        <Text>
            idade: {props.idade}
        </Text>
        <Text>
            turma: {props.turma}
        </Text>
        <Text>
            Média: {(props.nota1 + props.nota2) / 2}
        </Text>
    </View>)

}