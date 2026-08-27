//Componente de tela
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import LabeledInput from "../components/LabeledInput";
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Olá Mundo!</Text>
        <Text style={styles.descricao}>Bem vindo ao site da Lolla Mello!</Text>
     
     </View>
     <LabeledInput/>
      <Button textButton="Cadastrar"/>
      <Button textButton="Ler" />
      <Button textButton="Alterar" />
      <Button textButton="Excluir" />
      <Button  />

    </View>
  );
}

const styles = StyleSheet.create({
    container:{},
    card :{},
    titulo:{},
    descricao:{},
})
