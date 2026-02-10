import { useState } from "react";
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameOver, setGameOver] = useState(true);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if ( !fontsLoaded ) {
        return <AppLoading />;
    }

    function pickedNumberHanlder(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameOver(false);
    }

    function gameOverHandler() {
        setGameOver(true);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHanlder} />;

    if ( userNumber ) {
        screen = <GameScreen userNumber={userNumber}
                             onGameOver={gameOverHandler} />;
    }

    if ( userNumber && gameOver ) {
        screen = <GameOverScreen />;
    }

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]}
                        style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/background.png')}
                             resizeMode={'cover'}
                             style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: .15,
    },
});
