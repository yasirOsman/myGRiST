/**
 * This component is one of the key components as it's the one which
 * makes the questionboxes in which the questions are displayed in.
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
    ScrollView,
    Image
    
} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Slider from '@react-native-community/slider'
import * as images from '../../Styles/images'

export default class QuestionBox extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            answer: "", 
            value: "" ,
            userInput: "",
            yes: false,
            no: false,
            dont_knw: false,         
            code:this.props.code      
              }
    }
    
    //this function clears the current answer in the appropriate way depending on what type of question it is
    clearAnswer(){
        {if(this.props.values=="scale"){
            this.answerUpdate("")}
       else{
            this.CheckBoxAnswer("")
          }
      }
    }
    //this function is used to update the current answer that is selected for this question
    answerUpdate(givenAnswer){        
        this.setState({answer: givenAnswer})
        let answer_obj = {}
        answer_obj[this.state.code] = givenAnswer
        this.callback(answer_obj)     
               
    }

    CheckBoxAnswer(Answer){
        switch(Answer){
            case "YES":
                this.setState({yes: true, no: false, dont_knw: false})
            break;
            case "NO":
                this.setState({yes: false, no: true, dont_knw: false})
            break;
            case "DK":
                this.setState({yes: false, no: false, dont_knw: true})
            break;
            default:
                this.setState({yes: false, no: false, dont_knw: false})
        }
        
       this.answerUpdate(Answer)
       
        
    }
    //this function is used to dynamically update the answer of this question by passing it to the parent component
    //through a callback function
    callback(answer){
        // console.log(Answer)
        answer_object = {code :this.state.code, answer }       
        this.props.submitAnswers(answer_object)
    }
    //to render the correct type of questionbox, a switch statement is used to detect what type of question it is,
    //this is then used to conditionally render the appropriate box
    render(){
        let Type;

        switch(this.props.values){
            case "scale":
                let left_label = "Low Concern"
                let right_label = "High concern"
                Type = (
                    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center',paddingHorizontal: 20,paddingVertical:20 }}>
                        <View>
                            <Text style={styles.Qtext}>Answer: {this.state.answer}</Text>
                            <Slider
                                value={0}
                                onValueChange={value => this.answerUpdate(value)}
                                minimumValue={0}
                                maximumValue={10}
                                step={1}
                                minimumTrackTintColor={"#87C4A3"}
                            />
                        </View>
                        <View style={styles.scaleLabel}>
                        <Text style={styles.Qtext}>0: {left_label}</Text>
                        
                        <Text style={styles.Qtext}>10: {right_label}</Text>
                        </View>
                    </View>
                )
            break;
            case "integer":
                Type = (
                    <View style={styles.IntegerBar}>
                    <TextInput name="userInput" style={styles.TextInputStyle} onChangeText={(text) => this.answerUpdate(text)} />
                    <CheckBox  title='Dont Know' checked={this.state.dont_knw}  checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={"#87C4A3"}onPress={() => this.answerUpdate("DK")}/>
                    </View>
                )
            break;
            case "date-year":
                Type = (
                    <View style={styles.IntegerBar}>
                    <TextInput name="userInput" style={styles.TextInputStyle} onChangeText={(text) => this.answerUpdate(text)} />
                   <CheckBox  title='Dont Know' checked={this.state.dont_knw}  checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={"#87C4A3"}onPress={() => this.answerUpdate("DK")}/>
                    </View>
                )
            break;
            case "nominal":
                   default:
                        //checked icon and unchecked icon denote the visual representation of the inputs, chosen as they closely match the online website version
                        Type = (
                            <View style={styles.CheckBoxContainer}>
                            <CheckBox  title='Yes' checked={this.state.yes} checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={"#87C4A3"} onPress={() => this.CheckBoxAnswer("YES" )}/>
                            <CheckBox  title='No' checked={this.state.no} checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={"#87C4A3"} onPress={() => this.CheckBoxAnswer("NO" )}/>
                            <CheckBox  title='Dont Know' checked={this.state.dont_knw}  checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={"#87C4A3"}onPress={() => this.CheckBoxAnswer("DK")}/>
                            </View>
                        )
        }

        return(
            <View style={{paddingVertical:6}}>
            <View style={styles.mainContainer}>
            
                
                <View>
                    <Text style={styles.question}>{this.props.question}</Text> 
                </View> 
                 {Type}
                 <TouchableOpacity onPress={() => this.clearAnswer()} >               
                    <View style={styles.Bin_icon}> 
                    <Image style={styles.Bin_size}source={images.bin}/>
                    <Text style={styles.Qtext}>Clear answer</Text>
                    </View>
                   
                </TouchableOpacity>
                </View>
          </View>
        );
    }
}

 const styles = StyleSheet.create({
    CheckBoxContainer: {
        alignItems: 'stretch', justifyContent: 'center', flexDirection:'row'
    },
    mainContainer:{
        borderWidth:1,
         borderColor:"lightgrey",
         borderRadius: 15,
         backgroundColor: "white",
         paddingVertical:10
    },
    Qtext: {
        color: "#87C4A3",                
        fontSize: 12,
        textAlign: "center",
        maxWidth: '100%',
        paddingTop: 3
     }, 
     question:{
        color: "#87C4A3",                
        fontSize: 12,
        minWidth:'100%',
        justifyContent: 'center',
        textAlign: 'center'
     },    
     scaleLabel:{
        alignItems: 'stretch', justifyContent: 'space-between', flexDirection:'row' 
     },
      TextInputStyle: {
        borderColor: "lightgrey",
        borderWidth: 3,
        padding: 10,
        color: "lightgrey",        
        width: '75%',
        height:'60%',
        backgroundColor: "white",
        
    },
    Bin_icon:{      
        flexDirection:'row',       
        minWidth:'90%',
        alignContent:'center',
        justifyContent:'center',
        marginBottom: 5

      },
      Bin_size:{
        minWidth:20,
        minHeight:20
      },
      IntegerBar:{ flex: 2, alignItems: 'stretch', justifyContent: 'center',alignItems: 'center',paddingHorizontal: 20,paddingVertical:20 }
})