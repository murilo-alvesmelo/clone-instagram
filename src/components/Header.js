import React, { Component, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import { connect } from "react-redux";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon  from "react-native-vector-icons/Feather";

SplashScreen.preventAutoHideAsync();


function Header(props){
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
                <Text></Text>
                <View style={styles.userContainer}>
                    <Text style={styles.userText}>{props.name ? props.name : 'Anonimo'}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 25,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    userContainer: {
        flexDirection: 'row',
    },
    userText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#808080'
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

const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

export default connect(mapStateToProps)(Header)