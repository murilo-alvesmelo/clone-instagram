import React from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/userActions";
import { 
    View, 
    StyleSheet, 
    Text,
    TouchableOpacity,
    Platform
} from 'react-native'
import { Gravatar } from "react-native-gravatar";

function Profile(props){
    const options = { email: props.email, secure: true}

    const logout = () =>{
        props.onLogout()
        props.navigation.navigate('Auth')
    }
    return(
        <View style={styles.container}>
            <Gravatar options={options} style={styles.avatar}/>
            <Text style={styles.nickname}>{props.name}</Text>
            <Text style={styles.email}>{props.email}</Text>
            <TouchableOpacity 
                onPress={logout} 
                style={styles.button}
            >
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 40 : 30,
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    nickname: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 10,
        fontSize: 20,
    },
    button: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 80,
        borderColor: '#000',
        marginTop: 20,
        padding: 10,
    }
})

const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)