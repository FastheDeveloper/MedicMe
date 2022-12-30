import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './StackNavigators';
import { colors } from '../global/styles';
 import {Icon} from 'react-native-elements';
import RootClientTabs from './ClientTabs';
import MyAccountScreen from '../screens/MyAccountScreen';
import DrawerContent from '../components/DrawerContent';


const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator
            drawerContent={props=><DrawerContent {...props} />}
            screenOptions={{swipeEnabled: false}}
            
        >
            <Drawer.Screen
                name="HomeStack"
                component={HomeStack}
                options = {{
                    title:"Home",
                    drawerIcon:({focussed,size})=><Icon type="material-community"
                                                         name="home"
                                                         color={focussed? '#7cc':colors.grey2}
                                                         size={size}
                                                         />,
                                                         
                    headerShown:false
                }}  
            />
            <Drawer.Screen
                
                name="History"
                component={MyAccountScreen}
                options = {{
                    title:"History",
                    drawerIcon:({focussed,size})=>
                        <Icon type="material"
                            name="history"
                            color={focussed? '#7cc':colors.grey2}
                            size={size}
                            />,
                    headerShown:false,

                }}  
            />
            
           
        </Drawer.Navigator>
    )
}