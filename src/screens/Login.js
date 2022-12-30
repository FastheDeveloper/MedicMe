import React, {useState,useContext,useEffect,useRef,useMemo,useCallback} from "react";
import { StatusBar } from 'expo-status-bar';
import { Formik } from "formik";
import{StyledContainer,InnerContainer,PageLogo,PageTitle,SubTitle,StyledFormArea,StyledInputLabel,StyledTextInput,LeftIcon,RightIcon,StyledButton,ButtonText,Colors,MsgBox,Line,TextLink,TextLinkContent,ExtraText,ExtraView} from '../global/formstyles';
import{Text,View,ScrollView,ActivityIndicator,Dimensions,Platform,StyleSheet} from 'react-native';
import { colors,parameters } from '../global/styles'
import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { CredentialsContext } from "../context/CredentialsContext";
import * as GoogleSignIn from 'expo-google-sign-in';
import { Avatar,Icon } from 'react-native-elements';
const {brand, darkLight,primary} = Colors;
import BottomSheet, { BottomSheetFlatList,BottomSheetSectionList } from '@gorhom/bottom-sheet';
const SCREEN_HEIGHT=Dimensions.get('window').height;
const SCREEN_WIDTH=Dimensions.get('window').width;


import KeyboardAvoidingWrapper from "../global/KeyboardAvoidingWrapper";

//Api client
import axios from   'axios'
import * as Google from 'expo-google-app-auth';

const Login = ({navigation,route})=>{

    const bottomsheet1=useRef(1);
    const snapPoints1 = useMemo(()=>['50%'],[])
    const handleSheetChange1= useCallback((index)=>{},[])

      const  renderFlatListItem=useCallback(({item})=>(
      <View>
        <View style={styles.view10}>
            <View style={styles.view11}>
              <Icon 
                type ="material-community"
                name ="clock-time-four"
                color ={colors.white}
                size ={18}
              />  
            </View>
            <View>
                <Text style={{fontSize:15,color:colors.grey1}}>{item.street}</Text>
                <Text style={{color:colors.grey4}}>{item.area}</Text>
            </View>
  
        </View>
      </View>
  ),[])
 
        

    const [hidePassword,setHidePassword]=useState(true);
    const[message,setMessage]=useState();
    const[messageType,setMessageType]=useState();
    const [googleSubmitting,setGoogleSubmitting] = useState(false);
    //context
    const {storedCredentials,setStoredCredentials}=useContext(CredentialsContext);
    const handleLogin = (credentials , setSubmitting)=>{
        handleMessage(null);
        const url = "https://glacial-brook-14205.herokuapp.com/user/signin"
        axios
        .post(url,credentials)
        .then((response)=>{
            const result = response.data;
            const {message,status,data} = result;

            if (status != 'SUCCESS'){
                handleMessage(message,status);
            }else{
                
                persistLogin({...data[0]},message,status);
               
            }

            setSubmitting(false);
        })
        .catch(error => {
            console.log(error.JSON());
            setSubmitting(false);
            handleMessage("An error occured. Check your network and try again");
        })

    }

        const handleMessage = (message,type="FAILED") => {
            setMessage(message);
            setMessageType(type);
        }
        const persistLogin =(credentials,message,status) => {
            AsyncStorage.setItem('phegsCredentials',JSON.stringify(credentials))
            .then(()=>{
              
                handleMessage(message,status);
                setStoredCredentials(credentials)
            })
            .catch((error)=>{
                console.log(error)
                handleMessage('Persisting Login Failed')
            })
        }

        useEffect(()=>{
            initAsync();
        })

        const androidClientId='864624692290-pgoco3g3b4bk78jjpk9d145fpkkdccqk.apps.googleusercontent.com'
        const iosClientId='364731117388-e37kaeil8t49s7tggcd233958ld2a155.apps.googleusercontent.com'


        const initAsync = async ()=>{

            try{
                await GoogleSignIn.initAsync({
                    clientId: Platform.OS === 'android' ? androidClientId: iosClientId
                })
                getUserDetails();
            }catch({message}){
                console.log("Google signin error:" +message); 
            }
        }
        const getUserDetails =async()=>{
           const user = await GoogleSignIn.signInSilentlyAsync();
            setGoogleSubmitting(false);
           user && persistLogin({...user},"Google signin successful",'success');
        }
        const handleGoogleSignin = async()=>{
           try{
               setGoogleSubmitting(true);
            await GoogleSignIn.askForPlayServicesAsync();
            const {type,user}= await GoogleSignIn.signInAsync();
            if(type === 'success'){
                getUserDetails();
            }else{
                handleMessage('Google sign in cancelled');
                setGoogleSubmitting(false);
            }
           }catch({message})  {
               handleMessage('Google sign in error' + message)
           }

        };
           

    return(
        <ScrollView bounces={false}>
        <KeyboardAvoidingWrapper>
            <StyledContainer>
            <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
            <InnerContainer>
                <PageLogo resizeMode='cover' source={require('../../assets/phegslogoo.png')}/>
                <PageTitle>Phegs</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{email:route?.params?.email,password: ''}}
                    enableReinitialize={true}
                    onSubmit={(values,{setSubmitting})=>{
                        
                      if(values.email==''|| values.password ==''){
                          handleMessage('Please fill all the fields');
                          setSubmitting(false);
                        }else{
                            handleLogin(values, setSubmitting);
                        }
                    }}
                >{({handleChange,handleBlur, handleSubmit,values, isSubmitting})=> (<StyledFormArea>
                    <MyTextInput 
                        label='Email Address'
                        icon='mail'
                        placeholder='example@gmail.com'
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyBoardType='email-address'
                    />
                    <MyTextInput 
                        label='Password'
                        icon='lock'
                        placeholder='******'
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox type={messageType}>{message}</MsgBox>
                    {!isSubmitting && <StyledButton onPress={handleSubmit}>
                        <ButtonText>Login</ButtonText>
                    </StyledButton>}

                    {isSubmitting && <StyledButton disabled={true}>
                        <ActivityIndicator size="large"color ={primary}/>
                    </StyledButton>}
                    <Line/>

                   {!googleSubmitting && (<StyledButton google ={true} onPress={handleGoogleSignin}>
                        <Fontisto 
                        name='google'
                        color={primary}
                        size={25}
                        />
                        <ButtonText google = {true}>Sign in with Google</ButtonText>
                    </StyledButton> 
                    )}

                    {googleSubmitting && (
                        <StyledButton google ={true} disabled={true} >
                        <ActivityIndicator size="large"color ={primary}/>
                    </StyledButton>
                    )}
                    
                    <ExtraView>

                        <ExtraText>Don't have an account already?</ExtraText>
                        <TextLink onPress ={()=>navigation.navigate('Signup')}>
                            <TextLinkContent>Signup</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>

        </ScrollView>
    );
}

const MyTextInput =({label,icon,isPassword,hidePassword,setHidePassword,...props}) =>{
    return(
        <View>
            <LeftIcon>
            <Octicons 
            name={icon} 
            size={30}
            color={brand}
            />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    <Ionicons 
                    size={30}
                    color={darkLight}
                    name={hidePassword ? 'md-eye-off' : 'md-eye'}
                    />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;
const styles = StyleSheet.create({
    container1:{flex:1,
      paddingTop:parameters.statusBarHeight,
      
  },
  
  container: {
    
      flex: 1,
      paddingTop:parameters.statusBarHeight
     
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
     
    },
  
    view1:{
      position:"absolute",
      top:25,
      left:12,
      backgroundColor:colors.white,
      height:40,
      width:40,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      marginTop:2, 
      zIndex: 8
      
    },
  
    view2:{
      height:SCREEN_HEIGHT*0.25,
      alignItems:"center",
      zIndex: 5, 
      backgroundColor:colors.white
    },
    
    view3:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:2,   
        marginBottom:10,
        backgroundColor: colors.white,
        //height:30,
        zIndex:10,
         
      
    },
    view4:{
          flexDirection:"row",
          alignItems:"center",
          
    },
    view5:{
        backgroundColor:colors.grey7,
        width:SCREEN_WIDTH*0.70,
        height:40,
        justifyContent:"center",
        marginTop:10,
        
    },
    view6:{
      backgroundColor:colors.grey6,
      width:SCREEN_WIDTH*0.70,
      height:40,
      justifyContent:"center",
      marginTop:10,
      paddingLeft:0
  },
    text1:{
        marginLeft:10,
        fontSize:16,
        color:colors.grey1
    },
  
    image1:{  height:70,
              width:30,
              marginRight:10,
              marginTop:10
          },
   view7:{
       flexDirection:"row",
       alignItems:"center"
   },
   view8:{
       marginLeft:10
   },
   view10:{
      alignItems:"center",
      flex:5,
      flexDirection:"row",
      paddingVertical:10,
      borderBottomColor:colors.grey5,
      borderBottomWidth:1,
      paddingHorizontal:15
   },
   view11:{
      backgroundColor:colors.grey,
      height:30,
      width:30,
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center",
      marginRight:15,
      marginTop:15,
   },
  
   contentContainer: {
      backgroundColor: 'white',
    },
  
  view12:{
      alignItems:"center",
      paddingVertical:10,
      borderBottomWidth:1,
      borderBottomColor:colors.grey4
  },
  
  text2:{
      fontSize:18,
      color:colors.grey1
  },
  text3:{
      fontSize:16,
      color:colors.black,
      fontWeight:"bold",
      marginRight:5,
   
  },
  
  text4:{color:colors.grey2,
      marginTop:4
              },
  
  view13:{
      flexDirection:"row",
      alignItems:"flex-start",
      justifyContent:"space-between",
      paddingHorizontal:15,
      paddingVertical:5
  },
  
  button1:{
      height:40,
      width:100,
      backgroundColor:colors.grey6,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20
   },
  
  button2:{
      height:50,
      backgroundColor:colors.grey10,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      marginHorizontal:30
   },
  
  
  
   button1Text:{
     
     fontSize:17,
     marginTop:-2,
     color:colors.black
  
   },
  
   button2Text:{
      color:colors.white,
      fontSize:23,
      marginTop:-2,
     
  
    },
  
    
  view14:{
   
  
    alignItems:"center",
    flex:5,
    flexDirection:"row"
  },
  view15:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20
    
  },
  
  view16:{
      flexDirection:"row",
      alignItems:"baseline"
  },
  
  text5:{
      fontSize:12,
      color:colors.black,
      marginLeft:3,
      fontWeight:"bold",
      paddingBottom:1
      
  },
  
  view17:{
      
    },
  
  view18:{
    
  
  
    },
  
  view19:{flex:1.7,
      alignItems:"flex-end",
    
  },
  
  icon:{paddingBottom:2},
  
  image2:{height:60,width:60 },
  
  view20:{marginRight:10 },
  
  text6:{
      fontSize:15,
      color:colors.black,
      fontWeight:"bold", 
  },
  
  view21:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginHorizontal:30,
      marginTop:15
  },
  
  view22:{
      alignItems:"center",
      marginBottom:-20
  },
  
  sectionHeaderContainer: {
  backgroundColor: "white",
  marginTop:30,
  paddingLeft:15
  },
  
  text7 : {
  fontSize:28,
  color:colors.black,
  marginRight:5,
  
  },
  
  text8:{
  fontSize:15,
  color:colors.grey2,
  textDecorationLine:"line-through"
  
  
  },
  
  button3:{
  
  height:60,
  backgroundColor:colors.black,
  alignItems:"center",
  justifyContent:"center",
  width:SCREEN_WIDTH-110,
  marginBottom:10
  },
  
  view23:{
  flexDirection:"row", 
  backgroundColor:colors.cardbackground,
  // elevation:10,
  justifyContent:"space-between",
  alignItems:"flex-end",
  paddingHorizontal:20,
  height:80,
  
  },
  
  button2Image:{
  height:55,
  width:55,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:colors.grey6,
  marginBottom:10,
  
  }
  ,
  text9:{fontSize:15,
     color:colors.grey1
  },
  
  
  map:{
      marginVertical: 0,
      width:SCREEN_WIDTH,
      zIndex: -1
    }, 
    
    centeredView: {
      zIndex:14
    },
    modalView: {
      marginHorizontal: 20,
      marginVertical:60,
      backgroundColor: "white",
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      zIndex:16
    }, 
    
    view24:{
      flexDirection:"row",
      justifyContent:"space-between",
     marginVertical:15,
      paddingHorizontal:20   
  }, 
  
  view25:{
      flexDirection:'row',
     alignItems:"baseline"
  },
  
  flatlist:{
      marginTop:20
  },
  
  text10:{color:colors.grey2,
         paddingLeft:10
      }
  
  
  })
  
  
  
  