import { StyleSheet, Text, View } from 'react-native'
import{colors,parameters} from '../global/styles'
import React from 'react'
import{StyledContainer,StyledPicker,InnerContainer,PageLogo,PageTitle,SubTitle,StyledFormArea,StyledInputLabel,StyledTextInput,LeftIcon,RightIcon,StyledButton,ButtonText,Colors,MsgBox,Line,TextLink,TextLinkContent,ExtraText,ExtraView} from '../global/formstyles';
import { StatusBar } from 'expo-status-bar';
import { Formik,Form,useFormik } from "formik";
import { TouchableOpacity } from 'react-native-gesture-handler';
const Decidepage = ({navigation}) => {
  return (
   
        
         <StyledContainer>
              <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
            <InnerContainer style={{marginTop:30}}>
                <PageTitle>Phegs</PageTitle>
                <SubTitle>CONTINUE AS A </SubTitle>
                
                <View  >
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                    <View style={styles.button1}>
                    <Text style ={styles.button1Text}>USER</Text>
                    </View>
                    </TouchableOpacity>

                   
              </View>
                
        </InnerContainer>
        </StyledContainer>
    
  )
}

export default Decidepage

const styles = StyleSheet.create({

    button1:{
        height:40,
        width:300,
        backgroundColor:colors.black,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
      },
      
      button1Text:{
       color:colors.white,
       fontSize:17,
       marginTop:-2
      
      }

})