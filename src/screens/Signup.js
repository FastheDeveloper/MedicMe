import React, {useState,useContext} from "react";
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from "formik";
import { Avatar,Icon } from 'react-native-elements';
import{StyledContainer,InnerContainer,PageLogo,PageTitle,SubTitle,StyledFormArea,StyledInputLabel,StyledTextInput,LeftIcon,RightIcon,StyledButton,ButtonText,Colors,MsgBox,Line,TextLink,TextLinkContent,ExtraText,ExtraView} from '../global/formstyles';
import{ActivityIndicator,StyleSheet,View,TouchableOpacity,ScrollView} from 'react-native';
import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import KeyboardAvoidingWrapper from "../global/KeyboardAvoidingWrapper";
import { colors,parameters } from '../global/styles'
import { KeyboardAvoidingView } from "react-native-web";
//Api client
import axios from   'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { CredentialsContext } from "../context/CredentialsContext";
import { baseAPIUrl } from "../context/shared";

const {brand, darkLight,primary} = Colors;


const Signup = ({navigation})=>{
    const [hidePassword,setHidePassword]=useState(true);
    const [show,setShow]=useState(false);
    const[date, setDate] = useState(new Date(2000,0,1));

    const[message,setMessage]=useState();
    const[messageType,setMessageType]=useState();

    //actual date chosen
    const[dob,setDob]=useState();

    const {storedCredentials,setStoredCredentials}=useContext(CredentialsContext);
 

    const onChange=(event,selectedDate)=>{ 
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
        
    }
    
    const showDatePicker = ()=>{
        setShow(true);
    };



//form handling
    const handleSignup = (credentials , setSubmitting)=>{
        handleMessage(null);
        const url =`${baseAPIUrl}user/signup`
        axios
        .post(url,credentials)
        .then((response)=>{
            const result = response.data;
            const {message,status,data} = result;

            if (status !== "PENDING"){
                handleMessage(message,status);
            }else{
                navigation.navigate('Verification',{...data});
               // persistLogin({...data},message,status);
            }

            setSubmitting(false);
        })
        .catch((error) => {
            console.log(error.JSON());
            setSubmitting(false);
            handleMessage("An error occured. Check your network and try again");
        });

    };

        const handleMessage = (message,type="FAILED") => {
            setMessage(message);
            setMessageType(type);
        };
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

    return(
        <ScrollView bounces={false}>
          
            <KeyboardAvoidingWrapper>
        <StyledContainer>
        <View style={styles.view1}>
        <Icon
         type='material-community'
         name='arrow-left'
         color={colors.grey1}
         size={32}
         onPress={()=>navigation.goBack()}
        />
    </View>
            <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
            <InnerContainer>
                <PageTitle>Phegs</PageTitle>
                <SubTitle>Account Signup</SubTitle>
               {show && ( 
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    onChange={onChange}
                />
                )}
                <Formik
                    initialValues={{name:'',email:'',password: '',confirmpassword:''}}
                    onSubmit={(values,{setSubmitting})=>{
                        values = {...values,dateOfBirth:dob};
                      if(
                        values.name==''|| 
                          values.email ==''||
                           values.password =='' ||
                           values.dateOfBirth =='' ||
                             values.confirmpassword =='' 
                             ){
                          handleMessage('Please fill all the fields');
                          setSubmitting(false);
                        }else if(values.password !== values.confirmpassword){
                            handleMessage('Passwords don\'t match');
                          setSubmitting(false);
                        }
                        else{
                            handleSignup(values, setSubmitting);
                        }
                    }}
                >{({handleChange,handleBlur, handleSubmit,values,isSubmitting})=> (
                <StyledFormArea>
                    <MyTextInput 
                        label='Full Name'
                        icon='person'
                        placeholder='FAS'
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
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
                        label='Date of Birth'
                        icon='calendar'
                        placeholder='YYYY - MM - DD'
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('dateOfBirth')}
                        onBlur={handleBlur('dateOfBirth')}
                        value={dob ? dob.toDateString() : ''}
                        isDate={true}
                        editable={false}
                        showDatePicker={showDatePicker}
                    />
                    <MyTextInput 
                        label='Password'
                        icon='lock'
                        placeholder='* * * * * * * * *'
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MyTextInput 
                        label='Confirm Password'
                        icon='lock'
                        placeholder='* * * * * * * * *'
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('confirmpassword')}
                        onBlur={handleBlur('confirmpassword')}
                        value={values.confirmpassword}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword = {hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox type={messageType}>{message}</MsgBox>

                    {!isSubmitting && <StyledButton onPress={handleSubmit}>
                        <ButtonText>Signup</ButtonText>
                    </StyledButton>}

                    {isSubmitting && <StyledButton  disabled={true}>
                        <ActivityIndicator size="large"color ={primary}/>
                    </StyledButton>}

                    <Line/>
                    <ExtraView>
                        <ExtraText>Already have an account?</ExtraText>
                        <TextLink onPress={()=> navigation.navigate('Login')}>
                            <TextLinkContent>Login</TextLinkContent>
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

const MyTextInput =({label,icon,isPassword,hidePassword,setHidePassword,isDate,showDatePicker,...props}) =>{
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
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
                </TouchableOpacity>}
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

const styles = StyleSheet.create({

    view1:{
        position:"absolute",
        top:40,
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


})

export default Signup;