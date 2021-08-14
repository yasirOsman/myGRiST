/**
 * This component loads the previous assessments and displays the exact time it was conducted
 */
import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native'
import * as store from '../utility/storage'
import * as images from '../../Styles/images'
export default class PrevReports extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            dateFormat: require("dateformat"),
            date_list: [],

        }
    }

    async componentDidMount(){
        //the details of the user that is currently logged in is collected
        const user = await store.get_current_user();
        //the data of any prevuious assessments are fetched
        const Assessment = await store.getAssessment(user.user_id)
        let dates = []
        // console.log(Assessment)
        /**
         * the list of objects containing the assessment object are  looped through, and an object function is used to return a list of the
         * keys of those object which are the dates that the assessments took place
         * */
        if(Assessment){
            for(let i = 0; i < Assessment.assessments.length;i++){
                let keys = Object.keys(Assessment.assessments[i])
                dates.push(keys[0])
            }
            this.setState({date_list: dates})
            // console.log(Assessment.assessments)
        }
        
        
    }
    //this function displays the date that each assessment took place on, it formats in better looking way
    display_list(){
        let list = this.state.date_list;
        let displays = []
        if(list.length > 0){
            console.log("wrong loop")
            for(i in list){
                displays.push(
                    <View key={Date.now()} style={{paddingVertical:6}}>
                    <View key={Date.now()} style={styles.mainContainer}>
                    <Text key={i} style={styles.choices}>{this.state.dateFormat(parseInt(list[i]),"dddd, mmmm dS, yyyy, h:MM:ss TT")}</Text>
                    </View>
                    </View>
                    )
            }
            return displays
        } else{
            displays.push(
                <View key={Date.now()} style={{paddingVertical:6}}>
                <View key={Date.now()} style={styles.mainContainer}>
                <Text key={Date.now()} style={styles.choices}>You have not done any Assessments yet</Text>
                </View>
                </View>
                )
            // console.log(displays)
            return displays
        }
        
    }
    render(){
        return(
            <ImageBackground source={images.background} resizeMode="cover" style={styles.Image}>
                <View style={styles.container}>
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Image source={images.logo} ></Image>
                        </TouchableOpacity>
                    <Text style={styles.welcome_text}>Last Assessments</Text>
                    {this.display_list()}
               
                </View>
                </ImageBackground>
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
    welcome_text: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 50,
    },
    choices: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
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
    },
    mainContainer:{
        borderWidth:1,
         borderColor:"lightgrey",
         borderRadius: 15,
         backgroundColor: "white",
         paddingVertical:10
    }
});
