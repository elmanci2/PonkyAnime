import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { params } from '../../types';
import HeaderCompone from '../components/HeaderComponets';


export default function ListScreen({ route, navigation }: params) {

    const { CategoriaName } = route.params;

    return (
        <View  >
            <HeaderCompone name={CategoriaName} />
            <Text> {CategoriaName} </Text>
        </View>
    )
}

const styles = StyleSheet.create({})