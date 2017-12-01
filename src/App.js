import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            loggedIn: null
        };
    };

    componentWillMount(){
        firebase.initializeApp({
            apiKey : "AIzaSyBkFSuf-eEvEjoc7mP2FKwm4PEJBoOJWhk",
            authDomain : "autodemo-b07dc.firebaseapp.com",
            databaseURL : "https://autodemo-b07dc.firebaseio.com",
            projectId : "autodemo-b07dc",
            storageBucket : "",
            messagingSenderId : "945857464132"
        });
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn: true })
            }
            this.setState({loggedIn: false })
        })
    }

    renderUserState(){
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large'/>;

        };
    }

    render(){
        return (
            <View>
                <Header title='AuthDemo' />
                {this.renderUserState()}
            </View>
        )
    }
}

