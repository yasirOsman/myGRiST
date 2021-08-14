import AsyncStorage from '@react-native-community/async-storage';

//this function checks whether the provided email or username exists in the storage
const user_check = async (type,val)=>{
    try {
        //get the list of users from the storage
        const unparsed_obj = await AsyncStorage.getItem('users'); 
        const user_obj = JSON.parse(unparsed_obj)
        //if the email is being checked, get a list of all emails and see if it is in there
        if(type==="email" && (user_obj != null)){
            const email_list = user_obj.users.map(u=>u.email)
            for(i in email_list){
                if(email_list[i]===val){
                    //return "exists" if the email is found in the list
                    return "exists";
                }
            }
            //return new if the email is not found in the list
            return "new";
        } 
        //if the username is being checked, get a list of all usernames and see if it is there
        else if(type==="username" && (user_obj != null)){
            const username_list = user_obj.users.map(u=>u.username)
            console.log(username_list)
            for(i in username_list){
                if(username_list[i]===val){
                    //return "exists" if the username is found in the list
                    return "exists";
                }
            }
            //return "new" if the username is not found in the list
            return "new";
        }
        //this is for when no users are registered yet
        if((type==="email" || type==="username") && (user_obj == null)){
            return "new";
        }
        //return null if an unkown type is provided
        return null;
    }
    catch(e){
        alert(e)
    }
}

//this function validates the username, email and password against regular expressions
const validation = (type,val) => {
    if(type==="username"){
        //the username can be any letter, lower and upper case and any number but only 2 special characters are allowed which are ". and _"
        const username_regex = new RegExp(/^[a-zA-Z0-9_\.]{1,15}$/);
        if(username_regex.test(val)){
            return "valid"
        }
        return "invalid"
    }

    if(type==="email"){
        //the email can be any letter or number but only dash, undescore or dot are allowed as special characters
        const email_regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
        if(email_regex.test(val)){
            return "valid"
        }
        return "invalid"
    }
    
    if(type==="password"){
        //the password is required to have atleast 8 characters and atleast 1 uppercase letter
        const pass_regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        if(pass_regex.test(val)){
            return "valid";
        }
        return "invalid";        
    }

    return "invalid"
}
export {user_check, validation};

