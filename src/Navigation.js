import React from "react";
import Feed from './screens/Feed';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon  from "react-native-vector-icons/Feather";
import AddPhoto from "./screens/AddPhoto";
import Profile from "./screens/Profile";
import Login from "./screens/Login";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation(){

    function loginOrProfile(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        )
    }

    return(
        <NavigationContainer> 
            <Tab.Navigator
                screenOptions={({ route }) =>({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon:({ focus, color, size}) =>{
                        let iconName;
                        if(route.name === 'Feed'){
                            iconName = 'home'
                        }else if(route.name === 'AddPhoto'){
                            iconName =  'camera'
                        }else if(route.name === 'Profile'){
                            iconName = 'user'
                        }

                        return <Icon name={iconName} size={size} color={color}/>
                    },
                })}
            >
                <Tab.Screen name="Feed" component={Feed}/>
                <Tab.Screen name="AddPhoto" component={AddPhoto}/>
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="Auth" component={loginOrProfile}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
