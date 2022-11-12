import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { mayColors } from '../constants/Constats'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';



const MenuHome = () => {


  const imagen = 'https://i.pinimg.com/originals/ff/ee/9e/ffee9e40f482feadf393746f0ce124ea.jpg'

  const navigate = useNavigation()

  return (

    <View>
      <View style={styles.container} >
        <View style={styles.user} >
          <Text> logo </Text>
          <View style={styles.UserCOnfig} >
            <TouchableOpacity style={styles.imagenUSerConted} >
              <Image style={styles.imagenUSerConted.img} source={{ uri: imagen }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.hedITems}>

          <TouchableOpacity onPress={() => navigate.navigate('List', { CategoriaName: "anime" })} >
            <Text style={styles.TextItem} > animes </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate.navigate('List', { CategoriaName: "peliculas" })}  >
            <Text style={styles.TextItem} > peliculas </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate.navigate('categorias', { CategoriaName: 'Categorias' })} style={{ alignItems: 'center', justifyContent: "center" }}>
            <Text style={styles.TextItem} > categorias  <Ionicons size={styles.TextItem.icon.size} name='caret-down-outline'> </Ionicons> </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default MenuHome


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: mayColors.color1,
    position: 'absolute',
    zIndex: 2
  }, user: {
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems:'center'

  }, hedITems: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 13
  }, TextItem: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: '500',
    fontSize: 15,
    icon: {
      size: 15
    }
  },
  UserCOnfig: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  imagenUSerConted: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow:'hidden',
    borderWidth:1,
    borderColor:'white',
    img: {
      width: "100%",
      height: "100%",
    }
  }
})