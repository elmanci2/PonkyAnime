import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { darcolors, DarkMode, mayColors } from '../constants/Constats';
import { useNavigation } from '@react-navigation/native';
import { props } from '../../types';
import { MayconfigsProvider } from '../context/context';


export default function HeaderCompone({ name }: props) {


  const { configData } = useContext(MayconfigsProvider)


  const navigate = useNavigation()
  return (
    <View style={[styles.consted  , configData.darckMode === true ? {backgroundColor:darcolors.color2} : null] } >
      <View style={{ width: '90%', paddingTop: 20, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigate.goBack()} >
          <Ionicons style={styles.incon} name="chevron-back-outline" />
        </TouchableOpacity>
        <Text style={styles.text} > {name} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  consted: {
    position: 'relative',
    width: '100%',
    zIndex: 11,
    top: 0,
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: mayColors.color1,
    flexDirection: 'row',
    paddingLeft: 20,
    marginRight: 20
  },

  incon: {
    color: mayColors.color1,
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 25
  },

  text: {
    color: 'white',
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: "500"
  }
})

