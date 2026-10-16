import ExemploStyle_View from "@/components/ExemploStyle_View";
import { StyleSheet, View } from "react-native";

export default function exemploStyle_Test() {



    return (

        <View style={styles.container}>




            <ExemploStyle_View />




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
