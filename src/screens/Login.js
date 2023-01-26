import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from '../store/actions/userActions'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput
} from "react-native"


function Login(props){
    const [name, setName] = useState('murilo_am')
    const [email, setEmail] = useState('murilo.melo72@gmail.com')
    const [password, setPassword] = useState('123456')

    const login = () =>{
        props.onLogin({email, password, name})
        props.navigation.navigate('Profile')
    }
    const signup = () =>{
        props.navigation.navigate('Register')
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
            <TouchableOpacity onPress={signup} style={styles.button}>
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

const mapDispatchToProps = (dispacth) => {
    return {
        onLogin: user => dispacth(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)