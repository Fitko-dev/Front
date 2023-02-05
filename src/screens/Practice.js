import React, {useState} from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';

const Practice = () => {
  const [device, setDevice] = useState(null);
  const [data, setData] = useState(null);

  const requestBluetoothPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Bluetooth Permission',
          message: 'This app needs access to your Bluetooth',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Bluetooth');
        searchForBluetoothDevice();
      } else {
        console.log('Bluetooth permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const searchForBluetoothDevice = () => {
    BluetoothSerial.list()
      .then((devices) => {
        console.log(devices);
        setDevice(devices[0]);
        connectToBluetoothDevice();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const connectToBluetoothDevice = () => {
    BluetoothSerial.connect(device.id)
      .then((res) => {
        console.log(res);
        listenToData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listenToData = () => {
    BluetoothSerial.on('read', (data) => {
      setData(data);
      console.log(data);
    });
  };

  const sendData = (text) => {
    BluetoothSerial.write(text)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={requestBluetoothPermission}>
        <Text>Connect to Bluetooth</Text>
      </TouchableOpacity>
      {device && (
        <View>
          <Text>Device: {device.name}</Text>
          <TouchableOpacity onPress={() => sendData('Hello World!')}>
            <Text>Send Data</Text>
          </TouchableOpacity>
        </View>
      )}
      {data && <Text>Data: {data}</Text>}
    </View>
  );
};

export default App;
