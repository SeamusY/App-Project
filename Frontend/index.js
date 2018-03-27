import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './src/store/reducers/number'
import configStore from './src/store/configstore'

const store = configStore();

const AppWithRedux = () => (
    <Provider store = {store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('betaproject', () => AppWithRedux);
