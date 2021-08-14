/**
 * This is the component that displays all the questions depending on the section
 * it does so through making the questions into appropriate formats and then rendering
 * questionbox components
*/
import { object } from 'prop-types';
import * as React from 'react';
import {
    View,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native'
import questions from '../data/Questions'
import Questionbox from '../views/QuestionBox'
import * as store from '../utility/storage'


export default class SectionQuestions extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            question_list: JSON.parse(JSON.stringify(questions)),
            curr_question_structure: {},
            curr_questions: [],
            code: props.route.params.code,
            showComponent: false,
            currentAnswers: []
        }
    }
    //the question structure and the questions corresponding to it are created
    //it is done in componentDidMount because this is run before the page is rendered
    componentDidMount(){
        const q_structure = this.section_structure(this.state.question_list);
        let empty = []
        console.log(q_structure)
        this.getQuestions(q_structure,empty)
        console.log(q_structure)
        // console.log(q_structure)
        this.setState({curr_question_structure: q_structure, curr_questions: empty})

    }

    //this function gets the correct question structure depending on which section the user is on
    //this is done through recursion.
    section_structure = (question_all) => {
        let returned_list = {}
        if(question_all.hasOwnProperty('_code') && question_all["_code"]===this.state.code){
            
            returned_list = question_all
            return returned_list;
        }

        if(question_all.hasOwnProperty('node') && question_all["node"] instanceof Array){
            for(let i = 0; i < question_all["node"].length; i++){
                if(question_all["node"][i] instanceof Object){
                    const obj = this.section_structure(question_all["node"][i]);
                    if(obj != null){
                        return obj
                    }
                }
            }
        }
        return null;
    }
    // this function gets the questions relevant to this section through the use of the
    //question structure provided
    getQuestions(obj, propertList=[]){
        if(obj != null){
            if(obj["_question"] != null){
                let propObj = {};
                propObj["_question"] = obj["_question"]
                propObj["_code"]= obj["_code"]
                if(obj["_values"] != null){
                    propObj["_values"] = obj["_values"]
                }
                propertList.push(propObj)
            }

            if(obj.node && obj.node.length){
                for(let nodeObj of obj.node){
                    this.getQuestions(nodeObj, propertList);
                }
            }
        }
        
    }

    
    
    //this asynchronous function keeps track of the answers provided by each
    //questionbox and stores them, when the user saves or finishes,
    //the assessment values are also stored in the local storage
    async answer_handle(type){
        const user = await store.get_current_user();
        // const date = this.state.dateFormat(Date.now(),"YYYY-MM-DD hh:mm:ss");
        const formatted_answer = {}
        formatted_answer[Date.now()] = this.state.currentAnswers
        console.log(this.state.currentAnswers)

        if(type==="save"){
            await store.storeAssessment(user.user_id,formatted_answer)
            console.log(formatted_answer)
            this.props.navigation.navigate('Home');
        }else if(type==="finish" || type==="suspend"){
            await store.storeAssessment(user.user_id,formatted_answer)
            this.props.navigation.navigate('Home');
        }
    }
    
    //this function is used to update the question values of each box
    submitAnswer(answer_obj){   
        let updatedAnswers = this.state.currentAnswers 
        updatedAnswers.push(answer_obj) 
        console.log(answer_obj)                            
        this.setState({currentAnswers: updatedAnswers}) 
      
  }
        
               
   
    
    render(){
        let question_boxes = []
        let question_set = this.state.curr_questions
        console.log(question_set)
        if(question_set.length > 0){
            for(let i =0;i < question_set.length;i++){
               
                const question = <Questionbox key={question_set[i]._code} 
                                    code={question_set[i]._code}
                                    values={question_set[i]._values}
                                    question={question_set[i]._question}
                                    submitAnswers={this.submitAnswer.bind(this)}/>
                
                
                    question_boxes.push(question)
                
                
            }
            // console.log(question_boxes)
        }
        
        return(
            <View>
            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "row",flex:1}}>
                    <Button title="go Back" onPress={() =>{this.props.navigation.goBack()}}/>
                </View>
                <Button title="Save" onPress={() =>{this.answer_handle("save")}}/>
            </View>
                <ScrollView>
                
                {question_boxes}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonOrder: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})
