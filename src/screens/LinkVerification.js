import React , {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { InfoText,StyledContainer, TopHalf,BottomHalf, IconBg,Colors,PageTitle, EmphasizeText,StyledButton,ButtonText,  } from '../global/formstyles';
import {Octicons,Ionicons} from '@expo/vector-icons'
import ResendTimer from '../context/ResendTimer';
import { baseAPIUrl } from '../context/shared';
import axios from 'axios';
const{brand, primary,green}=Colors;
const Verification =({navigation,route}) =>{

    const[resendingEmail,setResendingEmail]=useState(false);
    const [resendStatus,setResendStatus]=useState('Resend');

    //resendtimer
    const[timeLeft,setTimeLeft]=useState(null);
    const [targetTime,setTargetTime] = useState(null);

    const[activeResend,setActiveResend]=useState(false);
    let resendTimerInterval;

    const{email,userId}=route?.params;

    const calculateTimeLeft =(finalTime) =>{
        const difference = finalTime - +new Date();
        if(difference >= 0){
            setTimeLeft(Math.round(difference / 1000)); 
            //check above
        }else{
            setTimeLeft(null);
            clearInterval(resendTimerInterval);
            setActiveResend(true);
        }
    }

    const triggerTimer = (targetTimeInSeconds = 30) => {
        setTargetTime(targetTimeInSeconds);
        setActiveResend(false);
        const finalTime = +new Date() + targetTimeInSeconds * 1000;
        resendTimerInterval = setInterval(()=>(
            calculateTimeLeft(finalTime), 1000
        ))
    }

    useEffect(()=>{
        triggerTimer();
        return () => {
            clearInterval(resendTimerInterval);
        }
    },[]);

    const resendEmail  = async () =>{
        setResendingEmail(true);
        //make request
        const url =`${baseAPIUrl}/user/resendVerificationLink`;
        try{
        await    axios.post(url,{email,userId});
        setResendStatus('Sent')
        }catch(error){
            setResendStatus('Failed');
            alert(`Resending email failed ${error.message}`);
        }
        setResendingEmail(false);

        setTimeout(()=>{
            setResendStatus('Resend');
            setActiveResend(false);
            triggerTimer();
        },5000)
    }

    return <StyledContainer 
    style={{
        alignItems:'center'
        }}>
    
        <TopHalf>
            <IconBg>
            <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
                <Octicons name ='mail-read' size={125} color={brand}/>
            </IconBg>
            
        </TopHalf>
        <BottomHalf>
            <PageTitle style={{fontSize:25}}>Account Verification</PageTitle>
            <InfoText>Please verify your email using the link sent to  
                <EmphasizeText> {`${email}`}</EmphasizeText>
            </InfoText>

            <StyledButton onPress={() =>{navigation.navigate('Login',{email:email})}} style={{backgroundColor:green, flexDirection: 'row'}} >

                <ButtonText>Proceed </ButtonText>
                <Ionicons name='arrow-forward-circle' size={25} color={primary}/>
            </StyledButton>
            
            <ResendTimer 
            activeResend={activeResend}
            resendingEmail={resendingEmail}
            resendStatus={resendStatus}
            timeLeft={timeLeft}
            targetTime={targetTime} 
            resendEmail={resendEmail} 
            />
            

        </BottomHalf>

    </StyledContainer>
       
    
};

export default Verification;