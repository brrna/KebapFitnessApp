import { Image, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Welcome = () => {

    const navigation = useNavigation();

    function goToMemberSign() {
        navigation.navigate('MemberSignScreen')
    }

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar />
            <Text style={styles.text} >HOŞGELDİN</Text>
            <Image 
                source={require("../assets/images/kebap-gym.jpeg")} 
                style={styles.image} />
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
        backgroundColor: "#EBFOE9",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: hp(15),
        marginTop: hp(10)
    },
    image: {
        height: hp(50),
        width: wp(100),
        resizeMode: "contain"
    },
    text: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#1F2315"
    }
})