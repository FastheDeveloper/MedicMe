import { View,SafeAreaView,Button,StyleSheet,Image } from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import{colors,parameters} from '../global/styles'
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { restaurantsData,menuDetailedData } from '../global/data'
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

// import Share from 'react-native-share';


export default function BookingCard({id}) {

    
    
    let datesWhitelist = [{
        start: moment(),
        end: moment().add(100, 'days')  // total 4 days enabled
      }];
      let datesBlacklist = [ moment().add(5, 'days') ];

      const [currentColor, setCurrentColor] = useState();
      

  return (
      
    
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:15}}>
          <Avatar.Image
            source={restaurantsData[id=0].images}
            size={80}
          />
          <View style={{marginLeft:20}}>
          <Text style={styles.title}>{restaurantsData[id=0].restaurantName}</Text>
            <Text style={styles.text3}>{restaurantsData[id=0].foodType}</Text>
            
          </View>
        </View>
      </View>
      <ScrollView>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name='cash' color='#777777' size={25}/>
          <Text style={{color:'#777777',marginLeft:20,fontSize:25,marginTop:-4}}>N{menuDetailedData[id=0].price}</Text>
        </View>

        <View style={styles.row}>
          <Icon name='phone' color='#777777' size={20}/>
          <Text style={{color:'#777777',marginLeft:20}}>{menuDetailedData[id=0].phn}</Text>
        </View>

        <View style={styles.row}>
          <Icon name='email' color='#777777' size={20}/>
          <Text style={{color:'#777777',marginLeft:20}}>{menuDetailedData[id=0].email}</Text>
        </View>
        <View
             style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
        }}
        />
       
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Icon name='book' color='#FF6347' size={25}/>
              <Text style={styles.menuItemText}>SELECT A DAY</Text>
              

            </View>
          </TouchableRipple>
          <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                    style={{height: 100, paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: 'white'}}
                    calendarColor={'#2058c0'}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    highlightDateNumberStyle={{color: 'yellow'}}
                    highlightDateNameStyle={{color: 'yellow'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    datesWhitelist={datesWhitelist}
                    //datesBlacklist={datesBlacklist}
                    iconLeft={require('../../assets/left-arrow.png')}
                    iconRight={require('../../assets/right-arrow.png')}
                    iconContainer={{flex: 0.1}}
                />

          <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Image source={require('../../assets/mornsun.png')} style={{height:45,width:45}} />
              <Text style={[styles.menuItemText,{marginTop:10}]}>MORNING SLOTS (AM)</Text>
            </View>
          </TouchableRipple>
          <View  style={{flexDirection:'column'}} >
          <View style={{flexDirection:'row'}}>
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 08:00</Text>
                  </View>
            </View>
          
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 08:30</Text>
                  </View>
            </View>

            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 09:00</Text>
                  </View>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 09:30</Text>
                  </View>
            </View>
          
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 10:00</Text>
                  </View>
            </View>

            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 10:30</Text>
                  </View>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 11:00</Text>
                  </View>
            </View>
          
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 11:30</Text>
                  </View>
            </View>

            
            </View>
            </View>

            <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
              <Image source={require('../../assets/aftsun.png')} style={{height:45,width:45}} />
              <Text style={[styles.menuItemText,{marginTop:10}]}>AFTERNOON SLOTS (PM)</Text>
            </View>
          </TouchableRipple>
          <View  style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 12:30</Text>
                  </View>
            </View>
          
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 01:00</Text>
                  </View>
            </View>

            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 01:30</Text>
                  </View>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 02:00</Text>
                  </View>
            </View>
          
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 02:30</Text>
                  </View>
            </View>

            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 03:00</Text>
                  </View>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 03:30</Text>
                  </View>
            </View>
          
            <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}> 04:00</Text>
                  </View>
            </View>

            
            </View>
            </View>

            <View style={styles.view19}>
                  <View style={styles.view20}>
                    <Text style={styles.text10}> Book Now</Text>
                  </View>
            </View>

         

        </View>
      </View>
      </ScrollView>

    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.white,
    paddingTop:parameters.statusBarHeight
    
    
  },
  userInfoSection: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    fontWeight:'bold'
  },
  view17:{alignItems:'flex-start',
  padding:10,
  backgroundColor:colors.cardbackground,
  marginTop:-5,
},

view18:{
  alignItems:"center",
  paddingVertical:5,
  marginBottom:0,
  width:90,
  borderRadius:12,
  borderWidth:1,
  borderColor:'red'
},

text10:{padding:10,
  fontWeight:"bold",
  fontSize:18,
  },

  view19:{alignItems:"center",
              padding:10,
              backgroundColor:colors.cardbackground,
              marginTop:-5
},


view20:{backgroundColor:colors.buttons,
    alignItems:"center",
    paddingVertical:5,
    marginBottom:0,
    width:320,
    borderRadius:12
 
},
});
