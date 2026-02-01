import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 24,
        padding: 24,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: Colors.accent500,
        alignItems: 'center',
    },
    numberText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.accent500,
    }
})