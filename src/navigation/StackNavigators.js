import * as React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RequestScreen from '../screens/RequestScreen'
import DestinationScreen from '../screens/DestinationScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';



import Verification from '../screens/LinkVerification';
import MyAccount from '../screens/MyAccountScreen'
import { navigationRef } from '../screens/RootNavigation';
import { CredentialsContext } from '../context/CredentialsContext';
import { NavigationContainer } from '@react-navigation/native';



import SearchResult from '../screens/SearchResult';
import DocHomeScreen from '../screens/DocHomeScreen';
import RootClientTabs from './ClientTabs';
import Decidepage from '../screens/Decidepage';
import MenuProductScreen from '../screens/MenuProductScreen';
import PreferenceScreen from '../screens/PreferenceScreen';
import BookingCard from '../components/BookingCard';




const Home = createNativeStackNavigator();


export function HomeStack(){
    return(

<CredentialsContext.Consumer>
    {({storedCredentials})=>(
        
           <Home.Navigator 
            initialRouteName='Decidepage'
           >
               {storedCredentials ?
               <Home.Screen 
               name="RootClientTabs"
               component={RootClientTabs}
               options = {{headerShown:false}}
               /> : <>
                <Home.Screen 
               name="Login"
               component={Login}
               options = {{headerShown:false}}
               />
              
               
           <Home.Screen 
               name="Signup"
               component={Signup}
               options = {{headerShown:false}}
               />
             <Home.Screen 
               name="Verification"
               component={Verification}
               options = {{headerShown:false}}
               />
              
              
                
               <Home.Screen 
               name="Decidepage"
               component={Decidepage}
               options = {{headerShown:false}}
               />
               </>
               
            }  
            
          

           <Home.Screen 
               name="RequestScreen"
               component={RequestScreen}
               options = {{headerShown:false}}
               />
                

               <Home.Screen 
               name="SearchResult"
               component={SearchResult}
               options = {{headerShown:false}}
               />
           <Home.Screen 
               name="DestinationScreen"
               component={DestinationScreen}
               options = {{headerShown:false}}
               />

               <Home.Screen 
               name="DocHomeScreen"
               component={DocHomeScreen}
               options = {{headerShown:false}}
               />
                
                <Home.Screen 
               name="MenuProductScreen"
               component={MenuProductScreen}
               options = {{headerShown:false}}
               />
               <Home.Screen 
               name="PreferenceScreen"
               component={PreferenceScreen}
               options = {{headerShown:false}}
               />
               <Home.Screen 
               name="BookingCard"
               component={BookingCard}
               options = {{headerShown:false}}
               />

              
               
              
              
               
               
           </Home.Navigator>
           
    )
    
    
    }
</CredentialsContext.Consumer>
    

     
    )
}


