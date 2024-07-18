import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const MemberSign = () => {
  return (
    <View>
      <Text>MemberSign</Text>
    </View>
  )
}

export default MemberSign

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        height: hp(100),
        width: wp(100)
    }
})