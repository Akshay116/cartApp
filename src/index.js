import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyCahQ0WyvWxQVC-9Q-fpn_iU3qWXqDHRqI",
  authDomain: "cart-a3fcf.firebaseapp.com",
  projectId: "cart-a3fcf",
  storageBucket: "cart-a3fcf.appspot.com",
  messagingSenderId: "325676999378",
  appId: "1:325676999378:web:7d1c2356d69ed79f17830b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);



