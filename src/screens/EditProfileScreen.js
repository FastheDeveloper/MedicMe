

import React,{useState,createRef,useContext,useEffect} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

 import {useTheme} from 'react-native-paper';
 import * as ImagePicker from 'expo-image-picker';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

// import ImagePicker from 'react-native-image-crop-picker';

import { CredentialsContext } from '../context/CredentialsContext';
import AsyncStorage  from '@react-native-async-storage/async-storage';


const EditProfileScreen=()=>{

  let [selectedImage, setSelectedImage] =useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(pickerResult);
    if (!pickerResult.cancelled) {
      setSelectedImage(pickerResult.uri)
      this.bs.current.snapTo(1)
    }

    

    // setSelectedImage({ localUri: pickerResult.uri });
  };


  let lauchCameraAsync = async () => {
    
   

    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(pickerResult);
    if (!pickerResult.cancelled) {
      setSelectedImage(pickerResult.uri)
      this.bs.current.snapTo(1)
    }
    

   
  };

    bs=React.useRef(null);
    fall=new Animated.Value(1)
    
    const {colors} =useTheme();
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

     const takePhotoFromCamera=()=>{

     }

     const renderContent = () => (
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            height: 450,
          }}
        >
            <View style={{alignItems:'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={lauchCameraAsync}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={openImagePickerAsync}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={()=>this.bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle} >Cancel</Text>
            </TouchableOpacity>
          
        </View>
      );
         bs=React.useRef(null);

     const renderHeader=()=>(
         <View style={styles.header}>
             <View style={styles.panelHeader}>
                 <View style={styles.panelHandle}></View>
             </View>
         </View>
     )
      
    return(
        <View style={styles.container}>
            <BottomSheet
            ref={this.bs}
            snapPoints={[330,0]}
            renderContent={renderContent}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}

            />
        <Animated.View style={{margin:20,opacity:Animated.add(0.1,Animated.multiply(this.fall,1.0)),}}>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>bs.current.snapTo(0)}>
                    <View style={{
                        height:100,
                        width:100,
                        borderRadius:15,
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                     
                        <ImageBackground
                            source={selectedImage ?{uri:selectedImage}:require('../../assets/blankProfilePic.jpg')}
                            style={{height:100,width:100}}
                            imageStyle={{borderRadius:15}}
                        >
                            <View style={{
                                flex:1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Icon name='camera' size={35} color="#fff" style={{
                                    opacity:0.7,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    borderColor:'#fff',
                                    borderRadius:10
                                }}/>
                            </View>
                        </ImageBackground>
                        
                    </View>
                
                </TouchableOpacity>
                <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>{name}</Text>
            </View>
            <View style={styles.action}>
                <FontAwesome name='user-o' color={colors.text} size={20}/>
                <TextInput
                placeholder='FirstName'
                placeholderTextColor='#666666'
                autoCorrect={false}
                style={[styles.textInput,{
                    color:colors.text
                }]}

                />
            </View>

            <View style={styles.action}>
                <FontAwesome name='user-o' color={colors.text} size={20}/>
                <TextInput
                placeholder='Last-Name'
                placeholderTextColor='#666666'
                autoCorrect={false}
                style={[styles.textInput,{
                    color:colors.text
                }]}

                />
            </View>
            <View style={styles.action}>
                <FontAwesome name='phone' color={colors.text} size={20}/>
                <TextInput
                placeholder='Phone number'
                placeholderTextColor='#666666'
                autoCorrect={false}
                keyboardType='number-pad'
                style={[styles.textInput,{
                    color:colors.text
                }]}

                />
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={()=>{}}> 
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>


        </Animated.View>
        </View>
    )
              
}
export default EditProfileScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#286ef0',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });
  