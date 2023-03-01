import React, { useState } from "react";
import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput 
} from 'react-native';

import { connect } from "react-redux";
import { createUser } from "../store/actions/userActions";


function Register(props){

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
                autoFocus={false}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => { props.onCreateUser(name, email, password)}}
            >
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

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}
export default connect(null, mapDispatchToProps)(Register)