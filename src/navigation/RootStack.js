import React from 'react'
import DriverLogin from '../screens/DriverLogin';
import HomeScreen from '../screens/HomeScreen';
import RequestScreen from '../screens/RequestScreen'
import DestinationScreen from '../screens/DestinationScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import DriverSignup from '../screens/DriverSignup';
import Verification from '../screens/LinkVerification';
import SearchResult from '../screens/SearchResult';
import DocHomeScreen from '../screens/DocHomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack =createStackNavigator();

const RootStack =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;
