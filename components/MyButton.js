import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const MyButton = ({onPress, text}) => {

  return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.button} >
            <Text style={styles.text} >{text}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#92AF38",
        height: hp(7),
        width: wp(96),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    text: {
      fontWeight: "regular",
      fontSize: 18,
      color: "#1F2315"
    }
})