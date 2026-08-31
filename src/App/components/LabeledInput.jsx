

import { View,Text, TextInput,StyleSheet } from "react-native";


export default function LabeledInput({label, }) {

    return (

        <View style={styles.wrapper}>

            <Text>
                { label}
            </Text>
            <TextInput placeholderTextColor="#B5B5B5"  />
            
        </View>
    )

}


const styles=StyleSheet.create({
    wrapper:{
          width: "100%", //Faz o component ocupar toda a largura da tela disponível
          marginBottom: 14, //Espaçamento entre os componentes
    }
})