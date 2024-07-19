import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Input = ({ label, placeholder, onChangeText }) => {
    return (
        <View style={styles.frame} >
            <Text>{label}</Text>
            <View>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    frame: {
        backgroundColor: "lightgreen",
        height: hp(10),
        width: wp(100)
    }
})