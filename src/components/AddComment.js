import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function AddComment(){
    const [comment, setComment] = useState('');
    const [editMode, setEditMode] = useState(false)

    const handleAddComment = () =>{
        Alert.alert('Adicionado!', comment)
    }
    
    let commentArea = null
    if(editMode){
        commentArea = (
            <View style={styles.container}>
                <TextInput 
                    placeholder="Comente..."
                    style={styles.input}
                    value={comment}
                    onChangeText={setComment}
                    onSubmitEditing={handleAddComment}
                />
                <TWF onPress={() => setEditMode(false)}>
                    <Icon name="x" size={15}/>
                </TWF>
            </View>
        )
    }else{
        commentArea = (
            <TWF onPress={() => setEditMode(true)}>
                <View style={styles.container}>
                    <Text style={styles.caption}>
                        Adicione um comentario...
                    </Text>
                </View>
            </TWF>
        )
    }
    return(
        <View>
            {commentArea}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC',
    },
    input: {
        width: '90%'
    }
})