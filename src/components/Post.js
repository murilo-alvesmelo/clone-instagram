import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Image, Text} from "react-native";
import Author from "./Author";

export default function Post(props){
        return(
            <View>
                <Image source={props.image} style={styles.image}/>
                <Author email='murilo.melo72@gmail.com' nickname='murilo_am'/>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
    }
})