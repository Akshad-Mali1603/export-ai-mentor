const signupValidation = (name:string, value:string) => {

    switch (name) {
        case "name":
            if (!value) {
                return "Name is required";
            } else if (value.length < 3) {
                return "Name must be at least 3 characters long";
            } else {
                return "";
            }
        case "email":
            if(!value){
                return "Email is required";
            } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "Invalid email format";
            }else{
                return "";
            }

        case "password":
            if(!value){
                return "Password is required";
            }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)){
                return "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character";
            }else{
                return "";
            }
        default:
            return "";    
    }
}
const loginValidation =  (name:string, value:string) => {
    switch (name) {
        case "name":
            if (!value) {
                return "Name is required";
            } else if (value.length < 3) {
                return "Name must be at least 3 characters long";
            } else {
                return "";
            }
        case "email":
            if(!value){
                return "Email is required";
            } else{
                return "";
            }

        case "password":
            if(!value){
                return "Password is required";
            }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)){
                return "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character";
            }else{
                return "";
            }
        default:
            return "";    
    }
}

export default {signupValidation,loginValidation};

