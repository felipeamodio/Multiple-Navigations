import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home/index';
import About from './pages/About/index';
import Settings from './pages/Settings/index';
import Perfil from './pages/Perfil/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs(){
    return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
    )
}


function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Perfil" component={Perfil} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;

