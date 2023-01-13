import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput
} from "react-native"

export default function Login(props){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () =>{
        props.navigation.navigate('Profile')
    }

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoFocus={true}
                keyboardType="email-address"
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
            />
            <TouchableOpacity onPress={login} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 18,
    },
    input: {
        marginTop: 20,
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 5,
        backgroundColor: '#EEE'

    }
})