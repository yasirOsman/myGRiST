/**
 * This component displays the sections that are part of the My Profile part,
 * it allows the users to navigate to the desired section
*/
import * as React from 'react';
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


export default class MyProfile extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={images.background} resizeMode="cover" style={styles.Image}>
                <TouchableOpacity style={styles.logo} onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={images.logo} />
                    </TouchableOpacity>
                    <Text style={styles.welcome_text}>My profile</Text>
                    <View style={styles.choices}>
                        <Text style={styles.focus_text}>Please choose a section to answer</Text>
                        <TouchableOpacity style={styles.custom_btns} onPress={() => this.props.navigation.navigate('SectionQuestions',{code:"gen-demog"})}>
                            <Text style={styles.btn_text}>My personal details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.custom_btns} onPress={() => this.props.navigation.navigate('SectionQuestions',{code:"adv-life-event"})}>
                            <Text style={styles.btn_text}>My life journey</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.custom_btns} onPress={() => this.props.navigation.navigate('SectionQuestions',{code:"gen-health-care"})}>
                            <Text style={styles.btn_text}>My health and care</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.custom_btns} onPress={() => this.props.navigation.navigate('SectionQuestions',{code:"gen-involve-social"})}>
                            <Text style={styles.btn_text}>My involvement with life and others</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.custom_btns} onPress={() => this.props.navigation.navigate('SectionQuestions',{code:"gen-person-thinking"})}>
                            <Text style={styles.btn_text}>My personality and way of thinking</Text>
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
        justifyContent: "center",
    },
    logo:{
        marginBottom: 0,
        position: 'relative',
        bottom: 80,
        left: 10,
    },
    welcome_text: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 50,
        position: 'relative',
        bottom: 40
    },
    choices: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "50%",
    },
    focus_text: {
        paddingBottom: "10%",
        fontSize: 18,
        marginTop: 25,
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