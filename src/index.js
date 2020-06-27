import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';
import { Provider } from "react-redux";
import App from './components/App';
import { Store } from "./components/store/store";


// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render( <Provider store={ Store }><App /></Provider>, document.getElementById('root'));
