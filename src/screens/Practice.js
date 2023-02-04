import React from "react";
import { View, Text, Image, ImageBackground, Timer, NativeBaseProvider, Center } from "native-base";
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler';
import { BleManager } from 'react-native-ble-manager';
import BLESocket from '../BleSocket';
const Practice = () => {

    const BleHandler = () =>
    {
        const {
            requestPermissions,
            scanForPeripherals,
            allDevices,
            connectToDevice,
            connectedDevice,
            heartRate,
            disconnectFromDevice,
          } = BLESocket();

        BleManager.scan([], 10, (error, devices) =>
        {
            console.log('Running Scan');
            console.log(devices);

            requestPermissions(isGranted => {
                if (isGranted) {
                  scanForPeripherals();
                }})
            
            BleManager.connect(device.id)
            .then(() => {
                console.log('connected');
            })
            .catch((error) => {
                console.log('Could not connect', error);
            })


        })
        
    }

    return (
        <NativeBaseProvider>
            <TouchableOpacity style={{
            justifyContent: "center",
            backgroundColor:"#706e6f",
            marginTop: "100%",
            marginLeft: "30%",
            marginRight: "30%",
            height:50,
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            paddingHorizontal:20,
            }}
            onPress={BleHandler}
            >
                <Text style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",

                }}>Connect Device</Text>
            </TouchableOpacity>
        </NativeBaseProvider>
    )
}


export default Practice;