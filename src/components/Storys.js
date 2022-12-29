import React from "react";
import { 
    View,
    Text,
    StyleSheet
     } from 'react-native'
import { Gravatar } from "react-native-gravatar";

export default function Story(props){
    const view = props.comments.map((item, index)=> {
        return(
            <View key={index}>
                <Gravatar options={{ email: item.email, secure: true }} style={styles.avatar}/>
            </View>
        )
    })
    return(
        <View style={styles.container}>
            {view}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 20,
        margin: 5,
    }
})