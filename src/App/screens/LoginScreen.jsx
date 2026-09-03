//Componente de tela
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import LabeledInput from "../components/LabeledInput";
import { ImageBackground } from "react-native-web";
export default function LoginScreen() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}> Faça Login na sua Conta</Text>
     <LabeledInput 
     label="Email:"
     placeholder="Insira seu endereço de  email"/>
     <LabeledInput
      label="Senha:"
      placeholder="Insira sua senha"/>
     
     <Button textButton="Entrar"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:"#FFFFFF",
     paddingTop:62,

    },

    title:{

      fontSize:20,
      fontWeight:700,
      textAlign:"center",
      color:"#6B6E71",
      marginBottom:26,
    }
    
   
})
