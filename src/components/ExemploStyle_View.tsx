import { StyleSheet, Text, View } from "react-native";

const ExemploStyle_View = () => {
    return (
        <>
            <View style={styles_local.container_fixo}>
                <View style={[styles_local.fundo_azul,
                styles_local.tamanho_50, styles_local.borda, styles_local.numero]}>

                    <Text style={styles_local.numeroFonte}>1</Text>


                </View>
                <View style={[styles_local.fundo_laranja,
                styles_local.tamanho_50, styles_local.borda, styles_local.numero]}>

                    <Text style={styles_local.numeroFonte}>2</Text>

                </View>
                <View style={[styles_local.fundo_verde,
                styles_local.tamanho_50, styles_local.borda, styles_local.numero]}>

                    <Text style={styles_local.numeroFonte}>3</Text>


                </View>
            </View>
            <View style={styles_local.container_flex}>
                <Text style={styles_local.texto}>HELLO WORLD</Text>
            </View>
        </>
    );
}

export default ExemploStyle_View;

const styles_local = StyleSheet.create({
    container_fixo: {
        //valor de preenchimento da área disponível
        flex: 1,
        //definição do eixo principal
        flexDirection: 'row-reverse',
        //posicionamento dos objetos no eixo principal

        //posicionamento dos objetos no eixo secundário
        alignItems: 'stretch',
        //cor de fundo
        backgroundColor: 'red',
        //margem
        margin: 10,
    },
    container_flex: {
        //valor de preenchimento da área disponível
        flex: 1,
        //definição do eixo principal
        flexDirection: 'row',
        //cor de fundo
        backgroundColor: '#FFFACD',
        //margem
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    fundo_azul: {
        //cor de fundo
        backgroundColor: 'blue',


    },
    fundo_laranja: {
        //cor de fundo
        backgroundColor: 'orange'
    },
    fundo_verde: {
        //cor de fundo
        backgroundColor: 'green'
    },
    tamanho_50: {
        //largura
        width: 50,
        //altura
        height: 50
    },
    flex_pequeno: {
        //valor de preenchimento da área disponível
        flex: 1
    },
    flex_grande: {
        //valor de preenchimento da área disponível
        flex: 1

    },
    borda: {
        //cor da borda
        borderColor: 'black',
        //espessura da borda
        borderWidth: 5
    },
    numero: {
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center'


    },
    numeroFonte: {
        fontSize: 30
    },
    texto: {

        fontSize: 50

    }
});
