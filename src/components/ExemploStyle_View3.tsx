import { StyleSheet, Text, View } from "react-native";

const ExemploStyle_View3 = () => {
    return (
        <>
            <View style={styles_local.container_principal}>
                <View>
                    <Text style={styles_local.titulo}>BEM-VINDO</Text>
                    <Text style={styles_local.subTitulo}>Eu mesmo</Text>
                </View>




                <View>
                    <Text style={styles_local.container_comprar}>
                        COMPRAR
                    </Text>
                </View>

                <View>
                    <Text style={styles_local.container_sair}>SAIR</Text>
                </View>
            </View>

        </>
    );
}

export default ExemploStyle_View3;

const styles_local = StyleSheet.create({
    container_principal: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        

    },
    titulo: {
        fontSize: 40


    },
    subTitulo: {
        fontSize: 20,
        textAlign: "center",


    },

    container_comprar: {



        backgroundColor: '#1ff802',
        borderRadius: 3,
        padding: 4,
        borderColor: 'black',
        borderWidth: 2





    },

    container_sair: {

        backgroundColor: '#ff0000',

        padding: 4,

        borderWidth: 2

    }

});
