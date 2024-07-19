import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Input = ({ label, placeholder, onChangeText }) => {
    return (
        <View style={styles.frame} >
            <Text style={styles.text} >{label}</Text>
            <View style={styles.input} >
                <TextInput placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    frame: {
        backgroundColor: "#EBFOE9",
        height: hp(11),
        width: wp(100),
        justifyContent: "space-evenly"
    },
    input: {
        backgroundColor: "#EBFOE9",
        height: hp(6),
        padding: 10,
        borderRadius: 10,
        width: wp(98),
        alignSelf: "center",
        borderColor: "#857969",
        borderWidth: 1
    },
    text: {
        marginLeft: wp(2),
        fontSize: hp(2.2),
        fontWeight: "600",
        color: "#1F2315"
    }
})