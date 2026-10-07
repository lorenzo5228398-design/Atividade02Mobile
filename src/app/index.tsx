import Aluno from "@/components/Aluno";
import Funcionario from "@/components/Funcionario";
import Multiplicacao from "@/components/Multiplicacao";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello world !!!</Text>
      <Funcionario nome="Roberto" idade="43" setor="RH" />
      <Aluno nome="Jorge" idade="12" turma="A1" nota1={8} nota2={4} />
      <Multiplicacao valor1={2} valor2={2} valor3={2} />

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
