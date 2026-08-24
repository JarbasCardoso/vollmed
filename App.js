
import { View, Text, StyleSheet } from "react-native";
import Button from "./src/App/components/Button";

export default function App() {
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titulo}>Olá Mundo!</Text>
                <Text style={styles.descricao}>Eu estou funcionando !!!</Text>
            </View>
            <Button/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{},
    card :{},
    titulo:{},
    descricao:{},
})