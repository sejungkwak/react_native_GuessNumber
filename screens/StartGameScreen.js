import { useState } from 'react';
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    // validation
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            // show alert
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }]);
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number between 1 and 99</InstructionText>
                <TextInput style={styles.numberInput}
                           keyboardType={"number-pad"}
                           autoCapitalize={"none"}
                           autoCorrect={false}
                           maxLength={2}
                           onChangeText={numberInputHandler}
                           value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 100,
    },
    numberInput: {
        width: 60,
        height: 60,
        marginVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.accent500,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    }
})