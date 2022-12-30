import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import React from 'react'
import{colors,parameters} from '../global/styles'
import SearchResulCard from '../components/SearchResulCard'
import { restaurantsData } from '../global/data'

const SCREEN_WIDTH=Dimensions.get('window').width;

const SearchResult = ({navigation,route}) => {
  return (
    <View style={styles.container} >
       
        <View>
            <FlatList
                 style={{backgroundColor:colors.cardbackground}}
                 data={restaurantsData}
                 keyExtractor={(item,index)=>index.toString()}
                 renderItem={({item,index})=>(
                    <SearchResulCard
                    screenWidth={SCREEN_WIDTH}
                    images = {item.images}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    productData={item.productData}
                    OnPressRestaurantCard={()=>{navigation.navigate("DocHomeScreen",{id:index,restaurant:item.restaurantName})}}
              />
                 )}
                 ListHeaderComponent={
                    <View>
                    <Text style={styles.listHeader}>{restaurantsData.length} Results  for {route.params.item}</Text>
                      </View>
                 }
                 
                 showsVerticalScrollIndicator={false}
            />

        </View>
      
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight,
        
    },
    listHeader:{
        color:colors.grey1,
        paddingHorizontal:10,
        paddingVertical:15,
        fontWeight:"bold"

    }
})