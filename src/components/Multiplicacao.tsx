import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";


export default function Multiplicacao() {

    const acionarPopUp = () => {
        const valor = (Number(valor1) * Number(valor2) * Number(valor3))
        Alert.alert("Valor final: " + valor);
    }
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [valor3, setValor3] = useState('');

    return (
        <View>

            <Text>VALOR 1: </Text>
            <TextInput placeholder="Digite o primeiro valor: "
                value={valor1}
                onChangeText={(text) => { setValor1(text) }}

            />
            <Text>VALOR 2: </Text>
            <TextInput placeholder="Digite o segundo valor: "
                value={valor2}
                onChangeText={(Text) => { setValor2(Text) }}

            />

            <Text>VALOR 3: </Text>
            <TextInput placeholder="Digite o terceiro valor: "
                value={valor3}
                onChangeText={(text) => { setValor3(text) }}

            />



            <Pressable onPress={acionarPopUp}>
                <Text>Clique aqui para mostrar</Text>
            </Pressable>

        </View >
    )


}