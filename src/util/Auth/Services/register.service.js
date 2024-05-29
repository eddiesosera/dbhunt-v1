import { createUserWithEmailAndPassword } from "firebase/auth"
import { config } from "../../Services/firebase";

export const Register = (email, password, callBackFunction) => {

    createUserWithEmailAndPassword(config, email, password)
        .then((userCredential) => {
            // After user is cretaed do the following

            const user = userCredential.user;
            callBackFunction();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage)
        });

};