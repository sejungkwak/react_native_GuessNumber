import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {

    function pressHandler() {
        console.log("pressHandler");
    }

    return (
        <View style={styles.buttonOuterContainer}>
            {/* the ripple effect is not working without the foreground. */}
            {/* an issue for this was created: https://github.com/facebook/react-native/issues/52939 */}
            <Pressable style={({ pressed }) => pressed
                                               ? [styles.buttonInnerContainer, styles.pressed]
                                               : styles.buttonInnerContainer}
                       onPress={pressHandler}
                       android_ripple={{ color: '#300318', foreground: true }}>
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
        backgroundColor: '#72063c',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    pressed: {
        opacity: 0.75,
    }
});