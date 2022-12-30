import { View,SafeAreaView,Button,StyleSheet } from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import{colors,parameters} from '../global/styles'
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { CredentialsContext } from "../context/CredentialsContext";
import AsyncStorage  from '@react-native-async-storage/async-storage';
// import Share from 'react-native-share';
const MyAccountScreen =  () => {
  // const myCustomShare=async()=>{
  //   const shareOptions={
  //     message:'This is a test message'
  //   }
  //   try{as
  //     const ShareResponse=await Share.open(shareOptions);
  //   }catch(error){
  //     console.log('Error=>',error);
  //   }
  // }

  const {storedCredentials,setStoredCredentials}=useContext(CredentialsContext);
  let {name,email}=storedCredentials;
  
  name=name ;
  
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
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:15}}>
          <Avatar.Image
            source={require('../../assets/blankProfilePic.jpg')}
            size={80}
          />
          <View style={{marginLeft:20}}>
            <Title style={[styles.title,{
              marginTop:15,
              marginBottom:5
            }]}>{name}</Title>
            <Title style={styles.caption}>{email}</Title>
          </View>
        </View>
      </View>
      <ScrollView>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name='map-marker-radius' color='#777777' size={20}/>
          <Text style={{color:'#777777',marginLeft:20}}>User Location</Text>
        </View>

        <View style={styles.row}>
          <Icon name='phone' color='#777777' size={20}/>
          <Text style={{color:'#777777',marginLeft:20}}>User Phone Number</Text>
        </View>

        <View style={styles.row}>
          <Icon name='email' color='#777777' size={20}/>
          <Text style={{color:'#777777',marginLeft:20}}>User email</Text>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox,{
            borderRightColor:'#ddd',
            borderRightWidth:1
          }]}>
            <Title>Recents</Title>
            <Caption></Caption>
          </View>

          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
          </View>

        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='heart-outline' color='#FF6347' size={25}/>
              <Text style={styles.menuItemText}>Your Favorties</Text>

            </View>
          </TouchableRipple>

          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='share-outline' color='#FF6347' size={25}/>
              <Text style={styles.menuItemText}>Payment</Text>

            </View>
          </TouchableRipple>

          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='share-outline' color='#FF6347' size={25}/>
              <Text style={styles.menuItemText}>Tell Your Friend</Text>

            </View>
          </TouchableRipple>

          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='account-check-outline' color='#FF6347' size={25}/>
              <Text style={styles.menuItemText}>Support</Text>

            </View>
          </TouchableRipple>

          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='cog-outline' color='#FF6347' size={25}/>
              <Text style={styles.menuItemText}>Settings </Text>

            </View>
          </TouchableRipple>

        </View>
      </View>
      </ScrollView>

    </SafeAreaView>
    
  )
}

export default MyAccountScreen;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.white,
    
    
  },
  userInfoSection: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
