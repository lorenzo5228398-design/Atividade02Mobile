import { Text, View } from "react-native";


type MultProps = {
    valor1: number;
    valor2: number;
    valor3: number;


}

export default function Multiplicacao(props: MultProps) {

    return (<View>
        <Text>
            Valor final: {props.valor1 * props.valor2 * props.valor3} 
        </Text>
        
    </View>)

}