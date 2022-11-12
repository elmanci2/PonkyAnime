import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import MenuHome from '../components/MenuHome'
import { DarkMode } from '../constants/Constats'



const HomeScreen = () => {

  return (

    <View style={{ height: "100%" , position:'relative' }} >
      <MenuHome />
      <ScrollView style={{ height: '100%', position: 'relative', backgroundColor:DarkMode.color }}>
      
      </ScrollView>
    </View>
  )
}

export default HomeScreen