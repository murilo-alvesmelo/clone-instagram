import React, { useState } from "react";
import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput 
} from 'react-native';

export default function Register(){

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                autoFocus={true}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 10, 
        marginTop: 20,
        width: '90%'
    },
    button: {
        marginTop: 30,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 18
    }
})