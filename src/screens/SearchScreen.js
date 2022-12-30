import React from 'react'
import {View ,Text,StyleSheet,FlatList,ScrollView,TouchableWithoutFeedback, ImageBackground, Dimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import SearchComponent from '../components/SearchComponent'
import { filterData2 } from '../global/data'
import{colors,parameters} from '../global/styles'


const SCREEN_WIDTH=Dimensions.get('window').width

export default function SearchScreen({navigation}){
    
    return(
        
        <View style={{flex:1,marginBottom:10}}>
             <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
            
            <SearchComponent/>
        <View style={{marginTop:40}}>
            <View>
                <FlatList 
                    style={{}}
                    data={filterData2}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback
                        onPress={()=>{
                            navigation.navigate("SearchResult",{item:item.name})
                        }}
                        >
                            <View style={styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source={item.image}
                                >
                                    <View style={styles.textView}>
                                        <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View> 
                        </TouchableWithoutFeedback>
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
                    ListFooterComponent={<Footer/>}
                />
            </View>

        </View>
        </View>
    )
} 

const Footer =()=>{
    return(
        <View style={{marginTop:10,marginBottom:20}}>
            <View style={{}}>
        <FlatList 
            style={{marginBottom:30}}
            data={filterData2}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <TouchableWithoutFeedback 
                onPress={()=>{
                    navigation.navigate("SearchResult",{item:item.name})
                }}
                >
                    <View style={styles.imageView}>
                        <ImageBackground
                            style={styles.image}
                            source={item.image}
                        >
                            <View style={styles.textView}>
                                <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                            </View>
                        </ImageBackground>
                    </View> 
                </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={<Text style={styles.listHeader}>More Categories</Text>}
           
        />
        </View>
    </View>
    )

}

const styles=StyleSheet.create({
    
    imageView : {  borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035
},

image :  {     height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10, 
},

listHeader : {  fontSize:16,
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:12
        
        },

textView : {  height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(52, 52, 52,0.3)'
     },


})

