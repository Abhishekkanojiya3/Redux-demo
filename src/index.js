import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Logic from './components/store/Logic';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < Provider store = { Logic } > < App / > < /Provider>);