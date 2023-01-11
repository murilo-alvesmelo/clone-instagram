import React from "react";
import Feed from './screens/Feed';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Icon  from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();


export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) =>({
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTitleStyle: {
                        color: '#000'
                    },
                    tabBarIcon:({ focus, color, size}) =>{
                        let iconName;
                        if(route.name === 'Feed'){
                            iconName: 'home'
                        }else if(route.name === 'AddPhoto'){
                            iconName: 'camera'
                        }else if(route.name === 'Profile'){
                            iconName: 'user'
                        }

                        return <Icon name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: 'pink',
                    tabBarInactiveTintColor: 'gray'
                })}
            >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="AddPhoto" component={Feed}/>
            <Tab.Screen name="Profile" component={Feed}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}