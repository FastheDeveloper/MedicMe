import React, {useState,useContext,useEffect} from 'react';
import { CredentialsContext } from "../context/CredentialsContext";
import AsyncStorage  from '@react-native-async-storage/async-storage';


import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Image,
  Switch,
  StyleSheet,
  TouchableOpacity
 
} from 'react-native';


import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,

  } from '@react-navigation/drawer';

  import {
    Avatar,
    Button,
    Icon
     } from 'react-native-elements'

import {colors} from '../global/styles'

export default function DrawerContent(props){
    let name=''
    let email=''
    const {storedCredentials,setStoredCredentials}=useContext(CredentialsContext);
    if(storedCredentials !=null){
    let {name,email}=storedCredentials;
    
    name=name ;
}else{
    name=name
    email=email
}
const clearLogin = async()=>{
    try{
     if (!__DEV__){
     await    GoogleSignIn.signOutAsync()
     await  AsyncStorage.removeItem('phegsCredentials')
     }else{
       await  AsyncStorage.removeItem('phegsCredentials')
     }
   
     setStoredCredentials('')
    }catch({message}){
        alert('LOGOUT ERROR: ' + message)
    }
 }

    
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:'#2058c0',}}>

                
                <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20,paddingVertical:10}}>
            <Avatar 
                rounded
                avatarStyle={styles.avatar}
                source={{uri:"https://img.icons8.com/material-sharp/24/000000/person-male.png"}}
                size={70}
            />
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'bold',color:colors.pagebackground,fontSize:18}}>{name}</Text>
                <Text style={{color:colors.pagebackground,fontSize:14}}>{email}</Text>
            </View>
          
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',marginTop:10}}>
                <View style={{marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',color:colors.pagebackground,fontSize:18}}>1</Text>
                    <Text style={{color:colors.pagebackground,fontSize:14}}>My Favorite</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
                <View style={{marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',color:colors.pagebackground,fontSize:18}}>0</Text>
                    <Text style={{color:colors.pagebackground,fontSize:14}}>Cart</Text>
                </View>
            </View>


        </View>
        </View>

       
        <DrawerItemList {...props}/>
        <DrawerItem 
            label="Payment"
            icon  ={({color,size})=>(
                <Icon 
                    type="material-community"
                    name= "credit-card-outline"
                    color={color}
                    size={size}
                />
            )}
        />

          <DrawerItem 
            label="Promotions"
            icon  ={({color,size})=>(
                <Icon 
                    type="material-community"
                    name= "tag-heart"
                    color={color}
                    size={size}
                />
            )}
        />

            <DrawerItem 
            label="Settings"
            icon  ={({color,size})=>(
                <Icon 
                    type="material-community"
                    name= "cog-outline"
                    color={color}
                    size={size}
                />
            )}
        />

                  <DrawerItem 
            label="Help"
            icon  ={({color,size})=>(
                <Icon 
                    type="material-community"
                    name= "lifebuoy"
                    color={color}
                    size={size}
                />
            )}
        />


                <View style={{borderTopWidth:0,borderTopColor:colors.grey3}}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkthemeText}>Dark Theme</Text>
                        <View style={{paddingRight:10}}>
                            <Switch 
                                trackColor={{false:"#767577",true:"#81b0ff"}}
                                thumbColor="#f4f3f4"
                            />
                        </View>
                    </View>
                </View>

         

        </DrawerContentScrollView>
        <DrawerItem 
        onPress={clearLogin}
                label="Sign Out"
                icon  ={({color,size})=>(
                    <Icon 
                        type="material-community"
                        name= "logout-variant"
                        color={color}
                        size={size}
                    />
                    
                )}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:-4
    },

    avatar:{
        borderWidth:4,
        borderColor:colors.pagebackground ,
       // source = {image:require("../../assets/denRasaq.jpg")}
      
        
    },

    preferences:{
        fontSize: 16,
        color:colors.grey2,
         paddingTop:10,
         paddingLeft:20,
    },

    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize: 16,
        color:colors.grey2,
         paddingTop:10,
         paddingLeft:0,
         fontWeight:"bold"
    },
    
    
})
