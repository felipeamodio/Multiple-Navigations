import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';


export default function Menu(){
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={40} color="#000000" />
        </TouchableOpacity>

    )
}