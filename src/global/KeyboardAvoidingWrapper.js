import React from 'react';
import{KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { Colors } from './formstyles';
const {primary} = Colors;
const KeyboardAvoidingWrapper = ({children})=>{
    return (
        <KeyboardAvoidingView style={{flex:1,backgroundColor:primary}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper