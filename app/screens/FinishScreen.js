import { Text, View } from 'react-native'

const FinishScreen = ({ route, navigation }) => {
    let { resultMessage, difficulty, won, score } = route.params

    useEffect(() => {
        if (won) {
            //TODO: Implement High Score saving
        }
    })

    let returnToTitleScreen = () => {
        navigation.navigate("Title Screen", {})
    }

    let goToHighScoreScreen = () => {
        //navigation.navigate("High Score Screen", {})
    }

    return (
        <View>
            <Text styles={styles.results}>{resultMessage}</Text>
            <View styles={styles.buttonContgainer}>
                <Button onClick={() => returnToTitleScreen()}>Return To Title Screen</Button>
                <Button onClick={() => goToHighScoreScreen()}> See High Scores </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    results: {
        flex: 1,
        textSize: 60,
        color: 'black',
        fontSize: 'bold',
        justifyContent: 'center',
        alignContent: 'center'
    },
});


export default FinishScreen
