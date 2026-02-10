import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
    return <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/success.png')}
                   style={styles.image} />
        </View>
        <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    imageContainer: {
        width: 400,
        height: 400,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})