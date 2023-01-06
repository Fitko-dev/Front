import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>    
           <View style={{
               backgroundColor:"#706e6f",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <Image
                    source={require('../images/1.png')}
                    style={{
                        height:10,
                        width:30,
                        marginTop:50
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:28,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>Fitko Boxing Coach</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                            source={require('../images/g.png')}
                            style={{height:60,width:60}}
                        />
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["rgba(112,110,111,1)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-20
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#706e6f"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
                   <Image
                    source={require('../images/3.png')}
                    style={{height:20,width:20, left:40}}
                   />
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#706e6f"
                        }}>Recommended</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#706e6f",
                            width:115,
                            marginTop:5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#706e6f",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                style={{height: 1000,
                        flex: 1}}
                contentContainerStyle={{ paddingBottom: 100 }}
                >                
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/4.png')}
                            style={{
                                alignSelf: 'center',
                                width: 100,
                                height: 150,
                                borderRadius: 10,
                            }}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                alignContent: 'center',
                                bottom: -10,
                                left: 10
                            }}>Jab & Cross Punch</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#706e6f",
                                bottom: -40,
                                left: -70, 
                            }}>3 mins</Text>
                        </View>
                    </TouchableOpacity>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                        
                            source={require('../images/5.png')}
                            style={{
                                alignSelf: 'center',
                                width: 100,
                                height: 150,
                                borderRadius: 10,
                                left: -20
                            }}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                alignContent: "center",
                                bottom: -10,
                            }}>Uppercut punch</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#706e6f",
                                bottom: -40,
                                left: -70,
                            }}>3 mins</Text>
                        </View>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/6.png')}
                            style={{
                                width: 100,
                                height: 152,
                                alignSelf: 'center',
                                borderRadius: 10,
                            }}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                alignContent: "center",
                                bottom: -10,
                                left: 30
                            }}>Hook Punch</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#706e6f",
                                bottom: -40,
                                left: -30,
                            }}>3 mins</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#706e6f",
                            paddingTop:3
                        }}>
                        </Text>
                    </View>

                </ScrollView>            

                


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#706e6f"
                        }}>Featured Sets</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#706e6f",
                            width:115,
                            marginTop: 5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#706e6f",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >
                    <Image
                        source={require("../images/18.png")}
                        style={{marginTop:20,marginHorizontal:20}}
                    />
                     <Image
                        source={require("../images/19.png")}
                        style={{marginTop:20,borderRadius:10}}
                    />
                </ScrollView>
            </ScrollView>
        </View>
        
    )
}
export default Home;