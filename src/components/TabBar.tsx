import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import * as Haptics from "expo-haptics";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { mayColors } from "../constants/Constats"



const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (

    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

      <View style={styles.tabBar}>
        {
          state.routes.map((route, index) => {
            const focused = state.index === index;
            const isActions = route.name === "Actions";
            const itemColor = focused ? mayColors.color2 : 'white';

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
              if (isActions) {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }
            };
            let iconName;
            switch (route.name) {
              case "Inicio":
                iconName = "home";
                break;
              case "Buscar":
                iconName = "search";
                break;
              case 'favoritos':
                iconName = 'heart-outline';
                break;

              case 'store':
                iconName = 'gift-outline'
                break;

              default:
                iconName = 'newspaper-outline'
                break;


            }

            return (
              <Animated.View
                key={route.name}
              >
                <TouchableOpacity
                  onPress={onPress}
                >
                  <View style={[{ alignItems: "center", padding: 5, borderRadius: 5 }, focused ? { backgroundColor: 'white', flexDirection: 'row' } : null,]}>
                    <Ionicons name={iconName as any} size={23} color={itemColor} style={{ marginBottom: 2 }} />
                    {
                      focused ? <Text style={[{ color: itemColor }, styles.tabBarText]}>{route.name}</Text> : null
                    }
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
      </View>
    </View>

  )

}



const styles = StyleSheet.create({

  stylesmenu: {


  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    zIndex: 1,
    justifyContent: 'space-evenly',
    position: 'absolute',
    marginBottom: 10,
    borderRadius: 10,
    bottom: 0,
    width: '95%',
    alignItems: 'center',
    flex: 1,
    backgroundColor: mayColors.color1,

  },

  tabBarText: {
    fontSize: 13,
    textTransform: 'capitalize',
    fontWeight: '700',
    paddingLeft: 2,


  },

});

export default TabBar;