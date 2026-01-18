import { StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                       keyboardType={"number-pad"}
                       autoCapitalize={"none"}
                       autoCorrect={false}
                       maxLength={2} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#350b20',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    numberInput: {
        width: 60,
        height: 60,
        marginVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ddb52f',
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    }
})