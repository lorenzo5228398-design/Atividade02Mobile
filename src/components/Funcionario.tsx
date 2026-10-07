import { Text, View } from "react-native";

type FuncionarioProps = {
    nome: string;
    idade: string;
    setor: string;

}

export default function Funcionario(props: FuncionarioProps) {
    return (<View>
        <Text>
            Nome: {props.nome}
        </Text>
        <Text>
            idade: {props.idade}
        </Text>
        <Text>
            idade: {props.setor}
        </Text>
    </View>)

}