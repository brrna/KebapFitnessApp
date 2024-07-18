import { SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

    const navigation = useNavigation();

    function goToMemberSign() {
        navigation.navigate('MemberSign')
    }

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar />
            <Text>KEBAP FITNESS SALONU</Text>
            <MyButton 
                text={"Üye Kaydı Oluştur"} 
                onPress={goToMemberSign} />
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"    
    },
})