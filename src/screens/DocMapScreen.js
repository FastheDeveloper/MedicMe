
import React,{useState,useRef,useEffect,useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import {filterData,docsAround} from '../global/data'
import {mapStyle} from '../global/mapStyle'
import MapView,{PROVIDER_GOOGLE,Marker, Callout} from 'react-native-maps';
import { colors,parameters } from '../global/styles'

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { markers,mapStandardStyle } from '../global/mapData';
import StarRating from '../components/StarRating'
import { useTheme } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;


const DocMapScreen=()=> {
  const theme = useTheme();

  const initialMapState = {
    markers,
    categories: [
      { 
        name: 'Dentist', 
        icon: <MaterialCommunityIcons style={styles.chipsIcon} name="food-fork-drink" size={18} />,
      },
      {
        name: 'Obsterician',
        icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Neurologist',
        icon: <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Psychologist',
        icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Nurse',
        icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
      },
  ],
    region: {
      latitude: 7.3411,
      longitude: 3.868,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008,
    },
  };

  const [state, setState] = React.useState(initialMapState);
  let mapAnimation=new Animated.Value(0);
  let mapIndex=0;

  useEffect(()=>{
    mapAnimation.addListener(({ value })=>{
      let index=Math.floor(value/CARD_WIDTH + 0.3);
      if(index >= state.markers.length){
        index=state.markers.length - 1;
      }
      if(index <= 0){
        index=0
      }
      clearTimeout(regionTimout);
      const regionTimout=setTimeout(()=>{
        if(mapIndex !== index){
          mapIndex=index;
          const {coordinate}=state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            }
          );
        }
      },10)

    })
  });
const interpolations=state.markers.map((marker,index)=>{
  const inputRange = [
    (index - 1) * CARD_WIDTH,
    index * CARD_WIDTH,
    ((index + 1) * CARD_WIDTH),
  ];
  const scale = mapAnimation.interpolate({
    inputRange,
    outputRange: [1, 1.5, 1],
    extrapolate: "clamp"
  });

  return { scale };
})

const onMarkerPress = (mapEventData) => {
  const markerID = mapEventData._targetInst.return.key;

  let x = (markerID * CARD_WIDTH) + (markerID * 20); 
  if (Platform.OS === 'ios') {
    x = x - SPACING_FOR_CARD_INSET;
  }

  _scrollView.current.scrollTo({x: x, y: 0, animated: true});
}

const _map=React.useRef(null)
const _scrollView=React.useRef(null)
  return (
    <View style={styles.container}>
      <MapView
                ref={_map}
                initialRegion={state.region}
                provider={PROVIDER_GOOGLE}
                style={styles.container}
                customMapStyle={mapStyle}
                >
                    {state.markers.map((marker,index)=>{
                      const scaleStyle={
                        transform:[
                          {
                            scale:interpolations[index].scale
                          }
                        ]
                      }
                      return(
                        <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)}>
                        <Animated.View style={[styles.markerWrap]}>
                            <Animated.Image 
                              source={require('../../assets/medpoint.png')}
                              style={[styles.marker,scaleStyle]}
                              resizeMode='cover'
                            />
                        </Animated.View>
                        </MapView.Marker>
                      )
                    })}
                </MapView>
                <View style={styles.searchBox}>
                    <TextInput 
                      placeholder='Search here'
                      placeholderTextColor='#000'
                      autoCapitalize='sentences'
                      style={{flex:1,padding:0}}
                    />
                    <Ionicons 
                      name='search'
                      size={20}
                    />
                </View>
                    <ScrollView 
                      horizontal
                      scrollEventThrottle={1}
                      showsHorizontalScrollIndicator={false}
                      height={50}
                      style={styles.chipsScrollView}
                      contentInset={{
                        top:0,
                        left:0,
                        bottom:0,
                        right:20,
                      }}
                      contentContainerStyle={{
                        paddingRight:Platform.OS== 'android'?20:0
                      }}
                    >
                      {state.categories.map((category,index)=>(
                        <TouchableOpacity key={index} style={styles.chipsItem}>
                          
                          <Text>{category.name}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                   <Animated.ScrollView
                    ref={_scrollView}
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                    pagingEnabled
                    snapToInterval={CARD_WIDTH + 20}
                    snapToAlignment='center'
                    contentInset={{
                      top:0,
                      left:SPACING_FOR_CARD_INSET,
                      bottom:0,
                      right:SPACING_FOR_CARD_INSET
                    }}
                    contentContainerStyle={{
                      paddingHorizontal:Platform.OS == 'android' ? SPACING_FOR_CARD_INSET : 0
                    }}
                    onScroll={Animated.event(
                      [
                        {
                          nativeEvent:{
                          contentOffset:{
                            x:mapAnimation,
                          }
                        }
                      }
                      ],
                      {useNativeDriver:true}
                    )}
                    >
                      {state.markers.map((marker,index)=>(
                        <View style={styles.card} key={index}>
                          <Image  
                            source={marker.image}
                            style={styles.cardImage}
                            resizeMode='cover'
                          />
                          <View style={styles.textContent}>
                            <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                            <StarRating ratings={marker.rating} reviews={marker.reviews}/>
                            <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
                            <View style={styles.button}>
                              <TouchableOpacity 
                                onPress={()=>{}}
                                style={[styles.signIn,{
                                  borderColor:'#2058c0',
                                  borderWidth:1
                                }]}
                              >
                                <Text style={[styles.textSign,{color:'#2058c0'}]}> Order Now</Text>
                              </TouchableOpacity>
                            </View>
                          </View>

                        </View>
                      ))}

                   </Animated.ScrollView>


    </View>
  );
}
export default DocMapScreen;
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    
    
  },
  map: {
    height:"100%",
     width:"100%"
    },

  bubble:{
    flexDirection:'column',
    alignSelf:'flex-start',
    backgroundColor:'#fff',
    borderRadius:0,
    borderColor:'#ccc',
    borderWidth:0.5,
    padding:15,
    width:150,
    
  },
  arrow:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopColor:'#fff',
    borderWidth:16,
    alignSelf:'center',
    marginTop:-32,
  },
  arrowBorder:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopColor:'#007a87',
    borderWidth:16,
    alignSelf:'center',
    marginTop:-0.5,
  },
  name:{
    fontSize:16,
    marginBottom:5,
  },
  image:{
width:120,
height:80,

  },
  searchBox: {
    position:'absolute', 
    marginTop: 30, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position:'absolute', 
    top:90, 
    paddingHorizontal:10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
      width: '100%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
  }
});


