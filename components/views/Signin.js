
import React, { Component, isValidElement } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Button,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import * as images from '../../Styles/images'

import * as store from '../utility/storage'
import * as validate from '../utility/validation'

export default class Signin extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password: '',
            users: {}
        }
    }

    //this function checks if the provided email exists and validates the password and logs in the user
    async login(email,password){
        //check if email exists
        if(await validate.user_check("email",email)==="exists"){
            
            const userlist = await store.getUsers();
            //filter out the user object if the email exists
            user_data = userlist.users.filter(user => user.email === email)
            //compare the password in the object to the provided password
            if(user_data[0].password===password){
                //store the user data of the user to login 
                console.log(await store.getUsers());
                await store.store_current_user(user_data[0]);
                this.props.navigation.navigate('Home');
            }else{
                Alert.alert("wrong password", "The password provided is incorrect")
            }
        } else {
            Alert.alert("wrong email", "the provided email address is not registered")
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={images.logo} />
                
                <StatusBar style="default" />
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => {this.setState({email})}}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => {this.setState({password})}}
                    />
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign up')}>
                    <Text style={styles.register_button}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={() => this.login(this.state.email,this.state.password)}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        marginBottom: 40
    },
    inputView: {
      backgroundColor: "#dff5e9",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    register_button: {
      height: 30,
      marginBottom: 10,
      marginTop: 10,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#87c4a3",
    },
});