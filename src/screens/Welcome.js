import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { Formik } from "formik";
import{StyledContainer,InnerContainer,PageLogo,PageTitle,SubTitle,StyledFormArea,StyledInputLabel,StyledTextInput,LeftIcon,RightIcon,StyledButton,ButtonText,Colors,MsgBox,Line,TextLink,TextLinkContent,ExtraText,ExtraView, WelcomeContainer, Avatar, WelcomeImage} from '../global/formstyles';
import{View,ScrollView, AsyncStorage} from 'react-native';
import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import * as GoogleSignIn from 'expo-google-sign-in';
const {brand, darkLight,primary} = Colors;

const Welcome = ()=>{
    const [hidePassword,setHidePassword]=useState(true);
    const {storedCredentials,setStoredCredentials}=useContext(CredentialsContext);
    const {name,email}=storedCredentials;

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
        <ScrollView bounces={false}>
        <>
            <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
            <InnerContainer>
                <WelcomeImage resizeMode='cover' source={require('../../assets/table.jpg')}/>
                <WelcomeContainer>
                <PageTitle welcome={true}>Welcome Friend</PageTitle>
                <SubTitle welcome = {true}>Farouq Seriki</SubTitle>
                <SubTitle welcome = {true}>fas@gmail.com</SubTitle>
                <StyledFormArea>
                <Avatar resizeMode='cover' source={require('../../assets/phegslogoo.png')}/>
                <Line/>
                    <StyledButton onPress={()=>{}}>
                        <ButtonText>LOGOUT</ButtonText>
                    </StyledButton>
                </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
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

export default Welcome;