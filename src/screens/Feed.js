import React from "react";
import { StyleSheet, FlatList, View} from 'react-native'
import Post from "../components/Post";
import Header from "../components/Header";
import { Connect, connect } from "react-redux";

function Feed(props){
    return(
        <View style={styles.container}>
            <Header/>
            <FlatList
                data={props.posts}
                keyExtractor={ item => `${item.id}`}
                renderItem={({ item }) =>
                    <Post key={item.id} {...item}/>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fcff'
    }
})

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(Feed)