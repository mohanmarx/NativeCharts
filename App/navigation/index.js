import React from 'react';
import { StatusBar, Button } from 'react-native'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home } from '../screens'

const Stack = createStackNavigator();

function Navigation() {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="rgba(151, 235, 244, .7)" barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        cardStyle: { backgroundColor: '#fff' },
                        headerTitleAlign:"center"
                    }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} options={{
                        title: "Population Charts",
                        headerTitleAlign:"center"
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </React.Fragment>
    )
}

export default Navigation;