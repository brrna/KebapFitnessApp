import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'

const MemberResult = ({route}) => {

    const {user} = route.params;

  return (
    <SafeAreaView style={styles.container} >
        <Text>Kayıt Başarıyla Tamamlandı</Text> 
        <Text>Üye Adı: {user.userName} </Text>
        <Text>Üye Soyadı: {user.userSurname} </Text>
        <Text>Üye Yaşı: {user.userAge} </Text>
        <Text>Üye Mail: {user.Mail} </Text>
    </SafeAreaView>
  )
}

export default MemberResult

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})