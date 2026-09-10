

import { View,Text, TextInput,StyleSheet } from "react-native";

const INPUT_BG="#F5F5F5";
const INPUT_BORDER="#E8E8E8";
const LABEL_COLOR="#36454F";
export default function LabeledInput({label, placeholder }) {

    return (

        <View style={styles.wrapper}>

            <Text style={styles.label}>
                { label}
            </Text>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#B5B5B5"  />
            
        </View>
    )

}


const styles=StyleSheet.create({
    wrapper:{
          width: "100%", //Faz o component ocupar toda a largura da tela disponível
          marginBottom: 14, //Espaçamento entre os componentes
    },

    label:{
        marginBottom:6,
        color: LABEL_COLOR,
        fontSize:14,
        fontWeight:600,
    },
    input:{
        backgroundColor: INPUT_BG,
        borderRadius: 8,
        borderColor: INPUT_BORDER,
        borderWidth: 1, //Define a largura da borda

        shadowColor: "#000", //Define a cor da borda
        shadowOffset: { width: 0, height: 2 }, //Define a posição da sombra 
        shadowOpacity: 0.08, //Define a transparencia da sombra
        shadowsRaduis: 6, // Define o raio da sombra

        fontSize:14,
        color: "#222",
        paddingHorizontal:14,
        paddingVertical:12,


    },
})