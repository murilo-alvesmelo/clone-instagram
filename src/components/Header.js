import React, { Component, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import icon from '../../assets/imgs/icon.png'
import Icon  from "react-native-vector-icons/Feather";

SplashScreen.preventAutoHideAsync();


export default function Header(){
    const [fontsLoaded] = useFonts({
        'OleoScript-Regular': require('../../assets/fonts/OleoScript-Regular.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    return(
        <View style={styles.container}>
            <View style={styles.rowContainer} onLayout={onLayoutRootView}>
                <Text style={styles.title}> Instagram </Text>
                <View style={styles.rowIcons}>
                    <Icon name="plus" size={25} style={styles.icon}/>
                    <Icon name="heart" size={25} style={styles.icon}/>
                    <Icon name="inbox" size={25} style={styles.icon}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    rowIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    title: {
        color: '#000',
        fontFamily: 'OleoScript-Regular',
        height: 30,
        fontSize: 24
    }
})