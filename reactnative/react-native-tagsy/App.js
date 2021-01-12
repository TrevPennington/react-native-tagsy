import 'react-native-gesture-handler';
import * as React from 'react';
import tagReducer from './store/tagReducer';
import AppNavigator from './AppNavigator';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'


const store = createStore(tagReducer, applyMiddleware(thunkMiddleware));

class App extends React.Component {
  render() {
    return (
      <Provider store ={store}>
        
          <AppNavigator />
        
      </Provider>
    )
  }
}

export default App