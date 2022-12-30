import { StyleSheet, Text, View,Dimensions, ScrollView,Image, FlatList,TouchableOpacity } from 'react-native';
import React,{useState,useRef,useEffect,useContext} from 'react';
import{colors,parameters} from '../global/styles'
import {Icon} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
const SCREEN_WIDTH =Dimensions.get('window').width
import {filterData,docsAround, filterreview} from '../global/data'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps'
import {mapStyle} from '../global/mapStyle'
import * as Location from 'expo-location'
import { StyledButton,ButtonText } from '../global/formstyles';
import * as GoogleSignIn from 'expo-google-sign-in';
import { CredentialsContext } from "../context/CredentialsContext";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import StarRating from '../components/StarRating';
import {rating,reviews,index} from '../global/mapStyle'


const HomeObste = ({navigation,route}) => {
  
  

  const [delivery,setDelivery]=useState(true)

  const [latlng,setLatLng]=useState({})

  const checkPermission =async()=>{
  const hasPermission = await Location.requestForegroundPermissionsAsync();
  if(hasPermission.status==='granted'){
    const permission= await askPermission();
    return permission
  }
  return true
};

const askPermission=async()=>{
  const permission = await Location.requestForegroundPermissionsAsync()
  return permission.status==='granted';
};

const getLocation=async()=>{
  try{
    const {granted}=await Location.requestForegroundPermissionsAsync();
    if(!granted) return;
    const{
      coords:{latitude,longitude},
    }=await Location.getCurrentPositionAsync;
    setLatLng({latitude:latitude,longitude:longitude})
  }catch (err){

  }
}

const _map =useRef(1);

useEffect(()=>{
       checkPermission();
       getLocation()
       console.log(latlng)
,[]})

const {storedCredentials,setStoredCredentials}=useContext(CredentialsContext);
let {name,email}=storedCredentials;
const displayName='Janet'
name=name ?name:displayName;

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

  return (
    <View style={styles.container}>
      
      
     

      <View style ={styles.header}>
        <View style =  {styles.icon1}>
          <Icon type="material-community"
                name="menu"
                color={colors.white}
                size={40}
                onPress={()=>{
                  navigation.toggleDrawer()
                }}
          />

        </View>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style ={styles.text1}>Welcome Obstetrician {name} </Text>
        <View style={styles.view1}>
          <View style={styles.view8}>
            <Text style={styles.text2}>Find recent appointments.</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Appointment",{state:0})}}>
              <View style={styles.button1}>
                <Text style ={styles.button1Text}>Open Appointments</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={styles.image1}
              source={require('../../assets/gynecologist.png')}
            />
          </View>
          
        </View>
       
        </View>
        <View>
        
                        <View style={styles.card2} >
                          
                          <View style={styles.textContent}>
                          <Text numberOfLines={1} style={styles.cardtitle}>Rating</Text>
                            <StarRating />
                            
                            
                          </View>

                        </View>
            <View>
            <Text style={[styles.title2,{paddingHorizontal:20,fontSize:30,marginBottom:-15}]}>Reviews</Text>
            <FlatList
              numRows={3}
              
              showsHorizontalScrollIndicator={false}
              data={filterreview}
              keyExtractor={(item)=>item.id}
              renderItem={({item})=>(
                <View style={styles.card}>
                    <View>
                      <Text style={styles.title2}>{item.name}</Text>
                    </View>
                    <View style={styles.view2}>
                    <Text style={styles.title}>{item.review}</Text>
                    </View>
                    
                </View>
              )}

            />
            </View>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text3}>Recent Homes</Text>
            <View style={styles.view4}>
            <Icon type="material-community"
                  name="clock-time-four"
                  color={colors.grey1}
                  size={26}
              />
              <Text style={{marginLeft:5}}>Now</Text>
              <Icon type="material-community"
                  name="chevron-down"
                  color={colors.grey1}
                  size={26}
              /> 
            </View>
          </View>

          <View style={styles.view5}>
              <View style={styles.view6}>
                  <View style={styles.view7}>
                        <Icon type="material-community"
                        name="map-marker"
                        color={colors.black}
                        size={22}
                          />
                  </View>
                  <View>
                  <Text style={{fontSize:18,color:colors.black}}>45,Gabma road </Text>
                  <Text style={{color:colors.grey3}}> Ring road . </Text>
                  </View>
              </View>
              <View>
                    <Icon type="material-community"
                              name="chevron-right"
                              color={colors.grey}
                              size={26}
                                />
              </View>
          </View>

          <View style={{...styles.view5,borderBottomWidth:0}}>
              <View style={styles.view6}>
                  <View style={styles.view7}>
                        <Icon type="material-community"
                        name="map-marker"
                        color={colors.black}
                        size={22}
                          />
                  </View>
                  <View>
                  <Text style={{fontSize:18,color:colors.black}}>LAD medical cenre </Text>
                  <Text style={{color:colors.grey3}}> Orita road. </Text>
                  </View>
              </View>
              <View>
                    <Icon type="material-community"
                              name="chevron-right"
                              color={colors.grey}
                              size={26}
                                />
              </View>
          </View>

         

          
          
      </ScrollView>
     { delivery &&
<View style ={styles.floatButton}>
    <TouchableOpacity
                onPress={()=>{navigation.navigate("RequestScreen",{state:0})}}
            >

        <Icon 
            name = "place"
            type = "material"
            size = {30}
            color = {"#2058c0"}
        />

        <Text style ={{color:colors.grey2}}>Map</Text>
    </TouchableOpacity>
</View>
}
      <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
    </View>
  );
                  
};

export default HomeObste


   
const styles = StyleSheet.create({
  floatButton:{
        position:'absolute',
        bottom:10,right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center'
  },
  cardtitle: {
    fontSize: 20,
    // marginTop: 5,
    fontWeight: "bold",
  },
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight
    },
    header:{
      backgroundColor:colors.blue,
      //paddingTop:parameters.statusBarHeight,
      height:parameters.headerHeight,
      alignItems:"flex-start"
     
    },
    
    image1:{
     
      height:100,
      width:100,
    
    },
    
    image2:{height:60,width:60,
            borderRadius:30,
          },
    
    home:{
     backgroundColor:colors.blue,
     paddingLeft:20,
     
    },
    
    text1:{
     color:colors.white,
     fontSize:21,
     paddingBottom:20,
     paddingTop:20
    },
    
    text2:{
     color:colors.white,
     fontSize:16
    },
    
    view1:{
     flexDirection:"row",
     flex:1,
     paddingTop:30
    },
    
    button1:{
      height:40,
      width:170,
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
    
    },
    card:{
     alignItems:'flex-start',
     margin:SCREEN_WIDTH/22
    
    },
    card2: {
       alignItems:'flex-start',
       paddingHorizontal:20,
       paddingTop:10
      },
    
    view2:{marginBottom:5,
          borderRadius:15,
          backgroundColor:colors.grey6
        },
    
        title:{
          color:colors.black,
          fontSize:16
        },
        title2:{
            color:colors.black,
            fontSize:16,
            fontWeight:'bold',
            paddingTop:10,
          },
    view3:{flexDirection:"row",
             marginTop :5,
             height:50,
             backgroundColor:colors.grey6,
             alignItems:"center",
             justifyContent:"space-between",
            marginHorizontal:15
            
             },
    text3:{marginLeft:15,
            fontSize:20,
            color:colors.black
      },
    
    view4:{ flexDirection:"row",
            alignItems:"center",
            marginRight:15,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingVertical:2,
            borderRadius:20
            },
    
    view5:{ flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:colors.grey4,
    borderBottomWidth:1,
    flex:1
    },
    
    view6:{
    
    
    alignItems:"center",
    flex:5,
    flexDirection:"row"
    },
    view7:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20
    
    },
    
    map:{
       
    height: 150,
     marginVertical: 0,
     width:SCREEN_WIDTH*0.92
    },
    
    text4:{ fontSize:20,
          color:colors.black,
          marginLeft:20,
          marginBottom:20
        },
    
    icon1:  {marginLeft:10,
           marginTop:5
          },

    view8: {flex:4,
          marginTop:-25
        } ,
    carsAround: {
    width: 28,
    height: 14,
    
    }, 
    
    location: {
      width: 16,
      height: 16,
      borderRadius:8,
      backgroundColor:colors.blue,
      alignItems:"center",
      justifyContent:"center"
      
      }, 
      
    view9:{width:4,
    height:4,
    borderRadius:2,
    backgroundColor:"white"
    }

   
});
