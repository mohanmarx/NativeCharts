import React, { useEffect } from 'react'
import { TouchableOpacity, Text, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux'
import { login } from '../redux/actions/auth'
import SplashScreen from 'react-native-splash-screen'

function Login(props) {
    useEffect(() => {
        if (props.loggedIn) {
            SplashScreen.show()
            setTimeout(() => {
                SplashScreen.hide()
            }, 3000);
            props.navigation.replace('Home')
        }
    }, [props.loggedIn, props.navigation])
    return (
        <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 30 }}>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={values => props.login(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            style={style.input}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            placeholder="Username"
                            placeholderTextColor="#ccc"
                        />
                        <TextInput
                            style={style.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="Password"
                            placeholderTextColor="#ccc"
                        />
                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                            <Text style={style.btnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}
const stateProps = (state) => ({ loggedIn: state.auth.loggedIn })
export default connect(stateProps, { login })(Login)

const style = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        marginBottom: 50,
        backgroundColor: '#f8f8f8',
        color: "#000"
    },
    button: {
        backgroundColor: 'rgba(151, 235, 244, .7)',
        marginHorizontal: 30,
        borderRadius: 50,
        padding: 15,
        alignItems: "center"
    },
    btnText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 18,
        textTransform: "uppercase"
    }
})