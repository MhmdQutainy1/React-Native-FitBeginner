import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  LogBox.ignoreLogs(["Warning : Failed Prop Type"])
  
  return (
    <Stack
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="Exercises" options={{
        presentation:"fullScreenModal", 
      }}/>
      <Stack.Screen name="ExercisesDetails" options={{
        presentation:"modal", 
      }}/>
    </Stack>
  )
}