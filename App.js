import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import { OriginContextProvider,DestinationContextProvider } from './src/context/context';
import RoootNavigator from './src/navigation/RootNavigator';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Welcome from './src/screens/Welcome';
import React,{useState} from 'react';
import { CredentialsContext } from './src/context/CredentialsContext';
import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


 

const SCREEN_WIDTH = Dimensions.get('window').width
 
export default function App() {
  const  [appReady,setAppReady]=useState(false);
  const[storedCredentials,setStoredCredentials]=useState("");

  const checkLoginCredentials =()=>{
    AsyncStorage
    .getItem('phegsCredentials')
    .then((result)=>{
      if(result !== null){
        setStoredCredentials(JSON.parse(result));
      }else{
        setStoredCredentials(null);
      }
    })
    .catch(error =>console.log(error))
  }

  if(!appReady){
    return(
      <AppLoading 
        startAsync={checkLoginCredentials}
        onFinish={()=>setAppReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <CredentialsContext.Provider value={{storedCredentials ,setStoredCredentials}}>
        <DestinationContextProvider>
          <OriginContextProvider>
            <RoootNavigator/> 
            
          </OriginContextProvider>
        </DestinationContextProvider>  
    
    </CredentialsContext.Provider>
    // <DocAccount/>
    // <Immage/>
    // <Signup/>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
