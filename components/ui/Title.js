import { StyleSheet, Text } from 'react-native'

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        padding: 12,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})

