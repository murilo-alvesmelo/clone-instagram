import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from 'react-native'
import Icon  from "react-native-vector-icons/Feather";

export default function Comments(props){

    let view = null
    if(props.comments) {
        view = props.comments.map((i, index) =>{
            return(
                <View style={styles.commentContainer} key={index}>
                    {/* <Gravatar options={{ email: i.email, secure: true }} style={styles.avatar}/> */}
                    <Text style={styles.nickname}>{i.nickname}: </Text>
                    <Text style={styles.comment}>{i.comment} </Text>
                </View>
            )
        })
    }
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name="heart" size={25} style={styles.icon}/>
                <Icon name="message-circle" size={25} style={styles.icon}/>
                <Icon name="send" size={25} style={styles.icon}/>
            </View>
            {view}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    commentContainer: {
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'row',
    },
    nickname: {
        color: '#444',
        fontWeight: 'bold',
    },
    comment: {
        color: '#555',
        fontWeight: "normal"
    },
    iconContainer:{
        flexDirection: 'row',
        marginTop: 5

    },
    icon: {
        marginHorizontal: 5,
    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 10
    }
})