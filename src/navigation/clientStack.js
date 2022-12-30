import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'

const clientSearch =createStackNavigator()
export  function ClientStack() {
  return (
    
    <clientSearch.Navigator>
        <clientSearch.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
        />
        
    </clientSearch.Navigator>
  )
}

const styles = StyleSheet.create({})