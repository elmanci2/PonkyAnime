
import { FlatList, StyleSheet, Text , View , TouchableOpacity  } from 'react-native'
import React from 'react'
import { categorias, DarkMode, generos, mayColors } from '../constants/Constats'

import { Ionicons } from "@expo/vector-icons";
import HeaderCompone from './HeaderComponets';
import { useNavigation } from '@react-navigation/native';
import { params } from '../../types';


export default function CategoriasList({ route }: params) {

  const navigation = useNavigation()

  const { CategoriaName } = route.params

  return (
    <View style={styles.container} >

      <HeaderCompone name={CategoriaName} />

      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', padding: 20 }} >
        {
          categorias.map(e =>
            <TouchableOpacity key={e} style={styles.categoriasContainer} onPress={() => navigation.navigate('List', { CategoriaName: e })}  >
              <Text style={styles.textCategorias}> {e} </Text>
            </TouchableOpacity>
          )
        }
      </View>

      <FlatList
        data={generos}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate('List', { CategoriaName: item.name })} style={styles.itemContainer} >

            <Text style={styles.text} > {item.name}    </Text>
            <Ionicons name="chevron-forward-outline" size={20} style={styles.icon} />

          </TouchableOpacity>}
      />
    </View>
  )
}

/* <ion-icon ></ion-icon> */
const styles = StyleSheet.create({
  icon: {
    color: mayColors.color2,
  },

  container: {
    height: '100%',
    width: '100%',
    backgroundColor: DarkMode.color,
    flex: 1,
  },

  textCategorias: {
    textTransform: "capitalize",
    fontWeight: '600',
    color: 'white'

  },

  categoriasContainer: {
    flexDirection: 'row',
    backgroundColor: mayColors.color2,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },

  itemContainer: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: 'center',
    width: "100%",
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },

  text: {
    justifyContent: 'space-around',
    color: mayColors.color2 /* mayColors.color2 */,
    fontWeight: '500',
    fontSize: 18,
    textTransform: 'capitalize',
  }
})


