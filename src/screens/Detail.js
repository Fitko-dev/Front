import React from 'react'
import {View, Text,Image, Button } from 'react-native'
import SwiperComponent from '../components/SwiperComponent'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const Detail = ({navigation}) => {
    return(
        <View style={{
            flex:1,
            backgroundColor:"#FFF",
            
        }}>
            <View style={{
                flexDirection:"row",
                width:"100%",
                height:"90%"
            }}>
                <View style={{width:"10%",paddingLeft:20}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image
                            source={require('../images/17.png')}
                            style={{marginVertical:40}}
                        />
                    </TouchableOpacity>     
                </View>
                <View style={{width:"90%"}}>
                        <SwiperComponent/>
                </View>
            </View>

                        <View style={{
                            flexDirection:"row",
                            marginTop:-80,
                            marginHorizontal:20,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:28,
                                color:"#62636a",
                                bottom: 20,
                            }}>
                                Jab & Cross Punch
                            </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#706e6f",
                                paddingLeft:170,
                                fontSize:20
                            }}>
                                3 minutes
                            </Text>
                        </View>

                        
                        <View style={{
                            flexDirection:"row",
                            width:"100%"
                        }}>
                            <View style={{
                                width:"50%",
                                backgroundColor:"#706e6f",
                                height:70,
                                marginTop:20,
                                borderTopRightRadius:25,
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <TouchableOpacity onPress={ () => navigation.navigate("Practice")}
                                        title="Practice Now"
                                        color="#706e6f">
                                            <Text style={{
                                                  color:"#FFF",
                                                  fontSize:17
                                                }}>Practice Now</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                width:"50%",
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20
                            }}>
                                <Text style={{
                                    color:"#62636a",
                                    fontWeight:"bold",
                                    fontSize:17
                                }}>3 minutes</Text>
                            </View>
                        </View>
                        
        </View>
    )
}
export default Detail;