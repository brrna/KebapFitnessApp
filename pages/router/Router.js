import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Welcome';
import MemberSign from '../MemberSign';
import MemberResult from '../MemberResult';

const Router = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='WelcomeScreen' component={Welcome} />
        <Stack.Screen name='MemberSignScreen' component={MemberSign} />
        <Stack.Screen name='MemberResultScreen' component={MemberResult} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})