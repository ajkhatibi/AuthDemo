import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    };

    signIn(){
        const { email, password } = this.state;
        this.setState({ error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(()=>{
                this.setState({
                    email: '',
                    password: '',
                    error: '',
                    loading: false
                })
            })
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(()=>{
                        this.setState({
                        email: '',
                        password: '',
                        error: '',
                        loading: false
                        })
                    })
                    .catch(()=>{
                        this.setState({ error: 'something went wrong :(', loading: false})
                    })
            })
    };

    renderButton(){
        if(this.state.loading){
            return <Spinner size='small'/>
        }
        return (
            <Button onPress={this.signIn.bind(this)}>Login</Button>
        )
    };

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@email.com'
                        onChangeText={email=>this.setState({ email })}
                        value={this.state.email}
                        label='email'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder='password'
                        onChangeText={password=>this.setState({ password })}
                        value={this.state.password}
                        label='password'
                        secureTextEntry
                    />
                </CardSection>
                    <Text style={styles.textStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20
    }
})