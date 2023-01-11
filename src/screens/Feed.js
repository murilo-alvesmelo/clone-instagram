import React from "react";
import { StyleSheet, FlatList, View} from 'react-native'
import Post from "../components/Post";
import Header from "../components/Header";

export default function Feed(){
    const state = {
        posts: [{
            id: Math.random(),
            nickname: 'murilo_am',
            email: 'murilo.melo72@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments:[{
                nickname: 'Tales',
                comment: 'Top dms'
            },{
                nickname: 'Tito',
                comment: 'Show!'
            }]
        },{
            id: Math.random(),
            nickname: 'talesmelquiades',
            email: 'talesmelquiades@hotmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments:[{
                nickname: 'wtito',
                comment: 'supera neguuuu'
            }]
        },{
            id: Math.random(),
            nickname: 'wtito',
            email: 'wedertito8@gmail.com',
            image: require('../../../assets/imgs/gate.jpg'),
            comments:[{
                nickname: 'murilo_am',
                comment: 'Zika!'
            }]
        }]
        }
    return(
        <View style={styles.container}>
            <Header/>
            <FlatList
                data={state.posts}
                keyExtractor={ item => `${item.id}` }
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