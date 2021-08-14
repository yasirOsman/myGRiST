/**
 * This is the home page that is displayed when a user first logs in,
 * it allows them to navigate the two main sections of the app
 */
import React, { Component, isValidElement } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    Alert,
    ImageBackground,
    Image
} from 'react-native'
import * as images from '../../Styles/images'

import * as store from '../utility/storage'

export default class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            users: {}
        }
        
    }
    
    async componentDidMount () {
        const user = await store.get_current_user();
        const assessment = await store.getAssessment(user.user_id)
        console.log(user)
        console.log(assessment)
        this.setState({username: user.username});
    }

    render(){
        return(
            <View style={styles.container}>
                
                <ImageBackground source={images.background} resizeMode="cover" style={styles.Image}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={images.logo} ></Image>
                    </TouchableOpacity>
                    
                    <Text style={styles.welcome_text}>Welcome to myGRiST, {this.state.username}</Text>
                    <View style={styles.choices}>
                        <Text style={styles.focus_text}>Please choose the focus of the questions from the links below</Text>
                        <TouchableOpacity style={styles.custom_btns} onPress={() => this.props.navigation.navigate('myAssessments')}>
                            <Text style={styles.btn_text}>My new Assessment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.custom_btns} onPress={() => this.props.navigation.navigate('myProfile')}>
                            <Text style={styles.btn_text}>My Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.custom_btns} onPress={() => this.props.navigation.navigate('Sign In')}>
                            <Text style={styles.btn_text}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            
             
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Image: {
        flex: 1,
    },
    welcome_text: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 50
    },
    choices: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "50%",
    },
    focus_text: {
        paddingBottom: "10%",
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center'
    },
    custom_btns: {
        backgroundColor: "#DFF5E9",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 35,
    },
    btn_text: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
    }
});