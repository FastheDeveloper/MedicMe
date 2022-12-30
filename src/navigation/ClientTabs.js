import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {colors} from '../global/styles'
// import {Icon} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from '../screens/HomeScreen';
import DocMapScreen from '../screens/DocMapScreen'
import SearchScreen from '../screens/SearchScreen';
import MyAccount from '../screens/MyAccountScreen'
import SearchResult from '../screens/SearchResult';
import EditProfileScreen from '../screens/EditProfileScreen'
import {useTheme} from 'react-native-paper';

const ClientTabs = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();

export default function RootClientTabs(){
    
    return(
        <ClientTabs.Navigator 
        
        screenOptions = {{
            activeTintColor :colors.buttons
        }}
        >
            <ClientTabs.Screen 
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown:false,
                    tabBarLabel : "Home",
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='home'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }}
            />
            <ClientTabs.Screen 
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    headerShown:false,
                    tabBarLabel : "Search",
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='search'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }}
            />
            <ClientTabs.Screen 
                name='DocMapScreen'
                component={DocMapScreen}
                options={{
                    headerShown:false,
                    tabBarLabel : "Find",
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='map'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }}
            />
            <ClientTabs.Screen 
                name='MyAccount'
                component={ProfileStackScreen}
                options={{
                    headerShown:false,
                    tabBarLabel : "Account",
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='person'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }}
            />
            
        </ClientTabs.Navigator>
    )
}

const ProfileStackScreen=({navigation})=>{
    const {colors}=useTheme();
    return(
    <ProfileStack.Navigator
    screenOptions={{
        headerStyle:{
            backgroundColor:'#fff',
           
            shadowOpacity:0
        },
        headerTintColor:'#000',
        headerShadowVisible:false,
        
    }}>
        <ProfileStack.Screen
        name='MyAcmgjcount'
        component={MyAccount}
        options={{
          title:'',
            headerLeft:()=>(
                <Icon.Button
                name='menu'
                size={25}
                backgroundColor='#fff'
                color='#000'
                onPress={()=>navigation.openDrawer()}
                />
            ),
            headerRight:()=>(
                <MaterialCommunityIcons
                name='account-edit'
                size={25}
                backgroundColor='#fff'
                color='#000'
                onPress={()=>navigation.navigate('EditProfile')}
                />
            ),
            
        }}
        />
        <ProfileStack.Screen
            name='EditProfile'
            options={{
                
                title:'Edit Profile',
                headerTitleAlign: 'center',
               
                
                
             }}
            
             
             component={EditProfileScreen}
        />
    </ProfileStack.Navigator>
    
)}
