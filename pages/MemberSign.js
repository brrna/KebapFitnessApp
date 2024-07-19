import { Alert, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Input from '../components/Input'
import MyButton from '../components/MyButton'
import { useNavigation } from '@react-navigation/native'

const MemberSign = () => {

  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  const navigation = useNavigation();

  function handleSubmit() {

    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert("Kebap Fitness Salonu", "Bilgiler boş bırakılamaz.")
    } else {
      const user = {
        userName,
        userSurname,
        userAge,
        userMail
      }
      navigation.navigate('MemberResultScreen', { user })
    }
  }

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.frame} >
        <Input label={"Üye Adı"} placeholder={"lütfen adınızı giriniz"} onChangeText={setUserName} />
        <Input label={"Üye Soyadı"} placeholder={"lütfen soyadınızı giriniz"} onChangeText={setUserSurname} />
        <Input label={"Üye Yaşı"} placeholder={"lütfen yaşınızı giriniz"} onChangeText={setUserAge} />
        <Input label={"Üye Maili"} placeholder={"lütfen mailinizi giriniz"} onChangeText={setUserMail} />
      </View>

      <MyButton onPress={handleSubmit} text={"Kaydı Tamamla"} />
    </SafeAreaView>
  )
}

export default MemberSign

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBFOE9",
    height: hp(100),
    width: wp(100),
    alignItems: "center"
  },
  frame: {
    backgroundColor: "#EBFOE9",
    width: wp(100),
    height: hp(60),
    margin: hp(8),
    justifyContent: "space-around"
  }
})