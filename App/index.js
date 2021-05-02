import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './navigation'
import SplashScreen from 'react-native-splash-screen'

function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000);
  }, [])
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
