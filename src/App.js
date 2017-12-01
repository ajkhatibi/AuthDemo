import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey : "AIzaSyBkFSuf-eEvEjoc7mP2FKwm4PEJBoOJWhk",
            authDomain : "autodemo-b07dc.firebaseapp.com",
            databaseURL : "https://autodemo-b07dc.firebaseio.com",
            projectId : "autodemo-b07dc",
            storageBucket : "",
            messagingSenderId : "945857464132"
        });
    }

    render(){
        return (
            <View>
                <Header title='AuthDemo' />
                <LoginForm/>
            </View>
        )
    }
}

