import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return <View style={styles.inputContainer}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    }
})