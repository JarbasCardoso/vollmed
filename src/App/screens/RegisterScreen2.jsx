//Componente de tela
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import LabeledInput from "../components/LabeledInput";
import { ImageBackground } from "react-native-web";
export default function RegisterScreen2() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}> Insira mais alguns dados sobre você:</Text>
          <LabeledInput 
          label="CEP:"
          placeholder="Insira seu CEP"/>
          <LabeledInput
           label="Endereço:"
           placeholder="Insira seu endereço seu endereço"/>
          <LabeledInput
           label="Numero:"
           placeholder="Insira o eu numero"/>

           <LabeledInput
           label="Complemento:"
           placeholder="Insira o complemento do seu endereço"/>

          <LabeledInput
           label="Telefone:"
           placeholder="Insira seu telefone"/>
          
          <Button textButton="Voltar"/>

          <Button textButton="Avançar"/>
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
      marginBottom:40,
    }
    

         })