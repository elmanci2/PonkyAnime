
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MyStack } from './src/Routes/NavigationConfig';
import { NavigationContainer } from '@react-navigation/native';
import { MayConfigFuction } from './src/context/context';


export default function App() {
  return (
    <MayConfigFuction >
      <NavigationContainer>
        <MyStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </MayConfigFuction>


  );
}



