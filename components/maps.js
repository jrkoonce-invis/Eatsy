import React from 'react';
import MapView from 'react-native-maps'
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export default class App extends React.Component<Props> {  
    render() {    
        return (
        <MapView style={{flex: 1, height: 100, width: 300}}
                region={{latitude: 40.1164,
                            longitude: 88.2434,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421}}
                showsUserLocation={true}/> );  
}}
