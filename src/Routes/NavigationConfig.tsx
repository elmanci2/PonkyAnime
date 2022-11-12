import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriasList from '../components/CategoriasList';
import TabBar from '../components/TabBar';
import HomeScreen from '../screen/HomeScreen';
import LIkeScreen from '../screen/LIkeScreen';
import ListScreen from '../screen/ListScreen';
import NewsScreen from '../screen/NewsScreen';
import SearchAcreen from '../screen/SearchAcreen';
import SetingScreen from '../screen/SetingScreen';
import Store from '../screen/Store';

const Stack = createStackNavigator();

export function MyStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName='Home' >
            <Stack.Screen name="Home" component={MyTabs} />
            <Stack.Screen name="categorias" component={CategoriasList} />
            <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />} screenOptions={{
            headerShown: false,
            tabBarShowLabel: false

        }} >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Buscar" component={SearchAcreen} />

            <Tab.Screen name="favoritos" component={LIkeScreen} />
            <Tab.Screen name="store" component={Store} />

            <Tab.Screen name="News" component={NewsScreen} />

        </Tab.Navigator>
    );
}
