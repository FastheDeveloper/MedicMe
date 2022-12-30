import React from 'react';
import {View,StyleSheet,FlatList,TouchableOpacity,Text} from 'react-native'
import BookingCard from '../components/BookingCard';
import AppointCard from '../components/AppointCard';
import {menuData,Appointments, menuDetailedData,restaurantsData} from '../global/data'
import RequestScreen from './RequestScreen';


export function Route1({navigation}){
    return(
        <View styles={{flex:1}}>
            <View style={styles.view2}>
                <FlatList
                    style={{backgroundColor:'white'}}
                    data={Appointments}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem= {({item,index})=>(
                        <TouchableOpacity onPress={()=>{navigation.navigate('',{index})}}>
                            <AppointCard 
                                productName={item.name}
                                image ={item.image}
                                price={item.time}
                                date={item.date}
                                ailment={item.ailment}
                                productDetails ={item.details}
                            />
                        </TouchableOpacity>
                    )}

                    showsVerticalScrollIndicator={false}
                />

            </View>
        </View>  
    )
}

export const Route2 =()=>(
    <View style={styles.scene} />
)
export const Route3 =()=>(
    <View styles={{flex:1}}>
    <View style={styles.view2}>
        <Text style={{color:'rgba(0,0,0, 0.3)',fontSize:30,fontWeight:'bold',alignSelf:'center'}}>NONE CANCELLED YET</Text>
    </View>
</View> 
)

const styles = StyleSheet.create({
    scene: {
      flex: 1,
      backgroundColor: '#673ab7'
    },
  
  view2:{marginTop:5,
        paddingBottom:20
      },
  
  scene2: { backgroundColor: '#673ab7' }  
  
  });