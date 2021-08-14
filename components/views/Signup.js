import React, { Component, isValidElement } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import * as images from '../../Styles/images'
import * as validate from '../utility/validation'
import * as store from '../utility/storage'

export default class Signup extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email:'',
            password: '',
            users: {}
        }
    }
    //this function registers the user after validating the username, password and email
    async register(username,email,password){
        //if the username,email or password are invalid display an alert with the reason
        
        if( validate.validation("username",username)==="invalid"){
            Alert.alert("invalid username", "make sure that the chosen username is between 1 and 15 letters and only contains numbers")
        }else if(validate.validation("email",email)==="invalid"){
            Alert.alert("invalid email", "Please provide a valid email")
        }else if(validate.validation("password",password)==="invalid"){
            Alert.alert("invalid password","make sure the password is atleast 8 characters long")
        }
        //check if the username,email and password are all valid
        if(validate.validation("username",username)==="valid" && 
           validate.validation("email",email)==="valid" &&
           validate.validation("password",password)==="valid"){
                //if the username and email are both not stored in the local storage then store the new user and send the user to the sign in screen 
                if(await validate.user_check("username",username)==="new" && await validate.user_check("email",email)==="new"){
                    new_user = {username,email,password, user_id: username + Date.now()}

                    await store.storeUser(new_user);
                    this.props.navigation.navigate('Sign In')
                } 
                //if the username already exists display an alert informing the user
                else if(await validate.user_check("username",username)==="exists"){
                    Alert.alert("username already taken", "please choose another username");
                }
                //if the email already exists display an alert informing the user
                else if(await validate.user_check("email",email)==="exists"){
                    Alert.alert("email already registered", "this email is already registered, you might want to login instead");
                }
                
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
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(username) => {this.setState({username})}}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => {this.setState({email})}}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => {this.setState({password})}}
                    />
                </View>

                <TouchableOpacity style={styles.registerBtn} onPress={() => this.register(this.state.username,this.state.email,this.state.password)}>
                    <Text style={styles.loginText}>Register</Text>
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
    registerBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#87c4a3",
    },
});