import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Welcome';
import MemberSign from '../MemberSign';

const Router = () => {

    const Stack = createNativeStackNavigator();

    

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='MemberSign' component={MemberSign} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})