import React, { useState } from "react";
import { Connect, connect } from "react-redux";
import { addPost } from "../store/actions/postActions";
import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Image, 
    Dimensions, 
    Platform, 
    ScrollView, 
    Alert
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

function AddPhoto(props){
    const [image, setImage] = useState(null)
    const [comment, setComment] = useState('')

    const noUser = 'Você precisa estar logado para adicionar imagens'

    const pickImage = async() =>{
        if(!props.name){
            Alert.alert('Falha', noUser)
            return
        }else{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            
            
            if(!result.canceled){
                setImage(result.assets[0].uri)
            }
        }
    }

    async function save(){
        if(!props.name){
            Alert.alert('Falha', noUser)
            return
        }else{
            props.onAddPost({
                id: Math.random(),
                nickname: props.name,
                email: props.email,
                image: {uri: image},
                comments: [{
                    nickname: props.name,
                    comment: comment
                }]
            })
            props.navigation.navigate('Feed')
        }
    }
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>
                <View style={styles.imageContainer}>
                   <Image source={{uri: image}} style={styles.image}/>
                </View>
                <TouchableOpacity onPress={pickImage} style={styles.button}>
                    <Text style={styles.buttonText}>Escolha a foto</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="Algum comentario para a foto?"
                    style={styles.input}
                    value={comment}
                    onChangeText={setComment}
                />
                <TouchableOpacity onPress={save} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 20,
        fontWeight: 'bold',
    },
    imageContainer: {
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * 3 / 4,
        resizeMode: "center"
    },
    button: {
        marginTop: 30,
        padding: 10,
        borderWidth: 1,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 20,
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})

const mapStateToProps = ({user}) =>{
    return {
        email: user.email,
        name: user.name
    }
}
const mapDispatchtoProps = (dispacth) =>{
    return {
        onAddPost: post => dispacth(addPost(post)) 
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(AddPhoto)