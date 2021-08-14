/**
 * This component deals with the local storage of the application through
 * the use of functions.
*/
import AsyncStorage from '@react-native-community/async-storage';

//This function stores new registered users
const storeUser = async (userObject) => {
    try {
        //get the list of existing users
        let user_list = await getUsers()
        console.log(user_list)
        //check if any users are already registered
        if(user_list == null){
            const first_list = {users: [userObject]}
            await AsyncStorage.setItem('users',JSON.stringify(first_list))
        }
        else{
        //push new user onto the list
        user_list.users.push(userObject)
        console.log(user_list)
        //add the updated user list back to the storage 
        await AsyncStorage.setItem('users', JSON.stringify(user_list)); 
        }
    }
    catch(error){
        alert(error)
    }
 }
//this function returns the list of existing users
const getUsers = async () => {
    try {
        //get the list of existing users
        const user_list = await AsyncStorage.getItem('users');
        //parse the Json into an object and return it
        return JSON.parse(user_list)  
        
       } catch (error) {
          alert(error)
       }
 }
//this function stores the assessments answers provided by the user
const storeAssessment = async (UserId,answerTree) => {
    try {
        let previous_assessments = await getAssessment(UserId)
        if(previous_assessments ==null){
            const first_assessment = {assessments: [answerTree]}
            await AsyncStorage.setItem(UserId + '_assessment', JSON.stringify(first_assessment));
        }else{
            previous_assessments.assessments.push(answerTree);
            await AsyncStorage.setItem(UserId + '_assessment', JSON.stringify(previous_assessments));
        }
    }catch(error){
        alert(error)
    }
 }
//this function returns the list of assessments completed by a specific user
const getAssessment = async (userId) => {
    try {
       const assessment_list = await AsyncStorage.getItem(userId + '_assessment');

       return JSON.parse(assessment_list);
    }catch(error){
        alert(error)
    }
 }
//this function stores the credentials of the currently logged in user
 const store_current_user = async (user) => {
    try {
        await AsyncStorage.setItem('currentUser',JSON.stringify(user));
    }catch(e){
        alert(e)
    }
 }
//this function gets the details of the currently loggin in user
const get_current_user = async () =>{
     try {
        const curr_user = await AsyncStorage.getItem('currentUser');

        return JSON.parse(curr_user);
     } catch(e) {
         alert(e)
     }
 }

 //this function removes the data of the user that logged out from the storage
const loggout_user = async () =>{
    try {
        await AsyncStorage.removeItem('currentUser');
    } catch(e){
         alert(e)
        }
 }

 //this functions deletes all stored users
 const reset_userlist = async () =>{
     try {
        await AsyncStorage.removeItem('users');
     } catch(e){
         alert(e)
     }
 }

 //this functions deletes the stored assessments for specific users
 const reset_assessments = async (userId) =>{
    try{
        await AsyncStorage.removeItem(userId + '_assessment')
    }catch(e){
        alert(e)
    }
 }
 export {storeUser, getUsers, storeAssessment, getAssessment, store_current_user, get_current_user, loggout_user, reset_userlist, reset_assessments};