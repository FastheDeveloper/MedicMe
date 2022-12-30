import { StyleSheet, Text, View, TouchableWithoutFeedback,TouchableOpacity,TextInput,Modal,FlatList, Keyboard } from 'react-native'
import React,{useState,useRef} from 'react'
//import { colors } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import{colors,parameters} from '../global/styles'
import { Icon } from 'react-native-elements'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import  filter  from 'lodash/filter';
import { filterData2 } from '../global/data';

export default function SearchComponent() {

    const navigation=useNavigation();
    const [data,setData]=useState([...filterData2])
    const [modalVisible,setModalVisible]=useState(false)
    const[textInputFoccused,setTextInputFoccused]=useState(true)
    const textInput=useRef(0)
    const contains=({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch= text =>{
        const dataS = filter(filterData2,userSearch=>{
            return contains(userSearch,text)
        })
        setData([...dataS])
    }

  return (
    <View style={styles.container}>
       
      <TouchableWithoutFeedback
        onPress={()=>{
            setModalVisible(true)
        }}
      >

          <View style={styles.SearchArea}>
              <Icon name= "search"
                style={styles.searchIcon}
                type='material'
                iconStyle={{marginLeft:5}}
                size={32}
              />
              <Text style={{fontSize:15}}>Who are you looking for? </Text>
          </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType='fade'
        transparent={false}
        visible={modalVisible}
      >
            <View style={styles.modal}>
               <View style={styles.view1}>
                    <View style={styles.TextInput}>
                        <Animatable.View
                        animation={textInputFoccused? "fadeInRight" : "fadeInLeft"}
                        duration={400}
                        >
                             <Icon name={textInputFoccused ? "arrow-back":"search"}
                                onPress={()=>{
                                    if(textInputFoccused)
                                    setModalVisible(false)
                                    setTextInputFoccused(true)
                                }}
                                style={styles.icon2}
                                type="material"
                                iconStyle={{marginRight:5}}
                                />
                        </Animatable.View>
                        <TextInput 
                            style={{width:"90%"}}
                            placeholder=""
                            autoFocus={false}
                            ref ={textInput}

                            onFocus={()=>{
                                setTextInputFoccused(true)
                            }}
                            onBlur={()=>{
                                setTextInputFoccused(false)
                            }}
                            onChangeText={handleSearch}
                        />
                        <Animatable.View
                          animation={textInputFoccused? "fadeInLeft" : ""}
                          duration={400}
                        >
                            <Icon  
                                name={textInputFoccused ? "cancel" : null}
                                iconStyle={{color:colors.grey3}}
                                type="material"
                                style={{marginRight:-10}}
                                onPress={()=>{
                                    textInput.current.clear()
                                    // handleSearch()
                                }}
                            />
                        </Animatable.View>
                    </View>
               </View>
                
                    <FlatList 
                    data={data}
                    renderItem={({item})=>(
                        <TouchableOpacity
                        onPress ={()=>{
                            Keyboard.dismiss
                            navigation.navigate("SearchResult",{item:item.name})
                            setModalVisible(false)
                            setTextInputFoccused(true)
                        }}>
                            <View style={styles.view2}>
                                <Text style={{color:colors.grey2,fontSize:15}}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item=>item.id}
                    />

            </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight,
        alignItems:'center'
    },
    text1:{
        color:colors.grey3,
        fontSize:36
    },
    TextInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:"#86939e",
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:19,
        height:50,

        marginTop:10,
        
        
      
        
    },
    SearchArea:{
        marginTop:10,
        width:"94%",
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:"row",
        alignItems:"center"
    },
    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey1,
    },
    view1:{
        height:70,
        justifyContent:"center",
        paddingHorizontal:10,
    },
    view2:{
        flexDirection:"row",
        padding:15,
        alignItems:"center",
    },
    icon2:{
        fontSize:24,
        padding:5,
        color:colors.grey2
    },
    modal: {
        flex:1
    }
})