import React, { Component } from "react";
import { Connect, connect } from "react-redux";
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity} from "react-native";
import Author from "./Author";
import Comments from "./Comments";
import AddComment from "./AddComment";
import Icon from "react-native-vector-icons/Feather";

function Post(props){
        
        const addComment = props.name ? <AddComment postId={props.id}/> : null
        return(
            <View>
                <Author email={props.email} nickname={props.nickname}/>
                <Image source={props.image} style={styles.image}/>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Icon name="heart" size={25} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="message-circle" size={25} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="send" size={25} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <Comments comments={props.comments}/>
                {addComment}
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
    },
    iconContainer: {
        marginTop: 5,
        marginLeft: 5,
        flexDirection: "row"
    },
    icon: {
        marginHorizontal: 5,
    },
})

const mapStateToProps = ({user}) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)