import { LOGGED_IN, LOGGED_OUT } from './types'
import Toast from 'react-native-simple-toast';

const creds = {
  username: "admin",
  password: "pass"
}

export const login = (values) => (dispatch) => {
  if(!values.username && !values.password){
    Toast.show("enter the username and password")
  }else if (!values.username || values.username !== creds.username) {
    Toast.show("Enter the valid username")
  } else if (!values.password || values.password !== creds.password) {
    Toast.show("Enter the valid password")
  } else {
    Toast.show("Sucessfully LoggedIn")
    dispatch({ type: LOGGED_IN })
  }
}

export const logout = () => (dispatch) => (
  dispatch({ type: LOGGED_OUT })
)