import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import {store} from './app/lib/store'
import {AppContainer} from './app/views/containers/index'


console.log(store.getState())
const  unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe()


ReactDOM.render(
    <Provider store={store}> 
         <AppContainer />
    </Provider>
    ,document.getElementById("root")
);

