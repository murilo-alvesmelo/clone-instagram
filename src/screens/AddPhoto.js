import React, { useState } from "react";
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

export default function AddPhoto(){
    const [image, setImage] = useState(null)
    const [comment, setComment] = useState('')

    const pickImage = async() =>{
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

    function save(){
        Alert.alert('Imagem adicionada!', comment)
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