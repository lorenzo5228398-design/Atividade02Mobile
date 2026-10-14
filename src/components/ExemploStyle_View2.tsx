import { StyleSheet, Text, View } from "react-native";

const ExemploStyle_View2 = () => {
    return (
        <>
            <View style={styles_local.container_fixo}>
                <Text style={styles_local.texto}>PRIMEIRO</Text>
                <Text style={styles_local.texto}>SEGUNDO</Text>
                <Text style={styles_local.texto}>TERCEIRO</Text>
            </View>


            <View style={styles_local.container_flex}>
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

        </>
    );
}

export default ExemploStyle_View2;

const styles_local = StyleSheet.create({
    container_fixo: {
        //valor de preenchimento da área disponível
        flex: 1,
        //definição do eixo principal
        flexDirection: 'column',
        //posicionamento dos objetos no eixo principal
        justifyContent: 'space-between',
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
        flexDirection: 'column',
        //cor de fundo
        backgroundColor: '#FFFACD',
        //margem
        margin: 10,
        justifyContent: 'space-around',
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
