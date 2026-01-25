import { StyleSheet, View, Text, Pressable } from "react-native";

import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {

    // This function can be called by the onPress prop.
    // Or onPress can be directly passed to Pressable.
    // function pressHandler() { onPress(); }

    return (
        <View style={styles.buttonOuterContainer}>
            {/* the ripple effect is not working without the foreground. */}
            {/* an issue for this was created: https://github.com/facebook/react-native/issues/52939 */}
            <Pressable style={({ pressed }) => pressed
                                               ? [styles.buttonInnerContainer, styles.pressed]
                                               : styles.buttonInnerContainer}
                       onPress={onPress}
                       android_ripple={{ color: Colors.primary600, foreground: true }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 12,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
        backgroundColor: Colors.primary500,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    pressed: {
        opacity: 0.75,
    }
});