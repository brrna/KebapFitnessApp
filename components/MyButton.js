import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const MyButton = ({onPress, text}) => {

  return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.button} >
            <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    button:{
        backgroundColor: "pink",
        height: hp(10),
        width: wp(10)
    }
})