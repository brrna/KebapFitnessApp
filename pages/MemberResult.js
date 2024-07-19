import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MemberResult = ({ route }) => {

  const { user } = route.params;

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.textView} >
        <Text style={styles.text} >Kayıt Başarıyla Tamamlandı</Text>
      </View>

      <View style={styles.result} >
        <Text style={styles.label} >Üye Adı: {user.userName} </Text>
        <Text style={styles.label} >Üye Soyadı: {user.userSurname} </Text>
        <Text style={styles.label} >Üye Yaşı: {user.userAge} </Text>
        <Text style={styles.label} >Üye Mail: {user.userMail} </Text>
      </View>

    </SafeAreaView>
  )
}

export default MemberResult

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBFOE9",
    flex: 1,
    alignItems: "center"
  },
  result: {
    backgroundColor: "#EBFOE9",
    height: hp(40),
    width: wp(100),
    padding: hp(1),
    justifyContent: "space-between",
    marginLeft: wp(3)
  },
  text: {
    fontWeight: "bold",
    fontSize: hp(3.9),
    color: "#92AF38"
  },
  textView: {
    backgroundColor: "#EBFOE9",
    width: wp(99),
    height: hp(15),
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: hp(3),
    color: "#1F2315"
  }
})