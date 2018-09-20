import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './firebase/firebase';
import {firebase} from './firebase/firebase';

const App = (props) =>{
    
    return(
        <BrowserRouter>
            <Routes {...props}/>
        </BrowserRouter>
    )
}




firebase.auth().onAuthStateChanged((user)=> {
    ReactDOM.render(<App auth={user}/>, document.getElementById('root'));
})