import React from 'react';
import {View,StyleSheet,FlatList,TouchableOpacity,Text} from 'react-native'
import BookingCard from '../components/BookingCard';
import MenuCard from '../components/MenuCard';
import {menuData, menuDetailedData,restaurantsData} from '../global/data'
import RequestScreen from './RequestScreen';


export function Route1({navigation}){
    return(
        <View styles={{flex:1}}>
            <View style={styles.view2}>
                <FlatList
                    style={{backgroundColor:'white'}}
                    data={menuDetailedData}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem= {({item,index})=>(
                        <TouchableOpacity onPress={()=>{navigation.navigate('PreferenceScreen',{index})}}>
                            <MenuCard 
                                productName={item.meal}
                                image ={item.image}
                                price={item.price}
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
    <View style={styles.scene} />
)
export const Route4 =()=>(
    <View styles={{flex:1}}>
    <View style={styles.view2}>
        <Text>jhsfjhsj</Text>
    </View>
</View> 
)
export const Route5 =()=>(
    <View style={styles.scene} />
)
export const Route6 =()=>(
    <View style={styles.scene} />
)
export const Route7 =()=>(
    <View style={styles.scene} />
)
export const Route8 =()=>(
    <View style={styles.scene} />
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