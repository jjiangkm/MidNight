/**
 * Created by ½¯À¤Ã÷ on 2017/7/19.
 */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configure-store';
import App from './App';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;