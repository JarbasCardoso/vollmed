//componente reutilizavel do botão principal do site 



import { Pressable, Text,StyleSheet} from "react-native";
const BG_BUTTON ='#00213D';
const TEXT_PRIMARY= '#FFFFFF';
export default  function Button (){

    return (

        <Pressable style={styles.button}>
            <Text style={styles.title}>Enviar</Text>
        </Pressable>
    )
}

const styles =StyleSheet.create({
    button: {
          backgroundColor: BG_BUTTON,   

    },
    title: {

        color: TEXT_PRIMARY,
    }
})