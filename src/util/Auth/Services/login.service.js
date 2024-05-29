import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { config } from "../../Services/firebase";

export const Login = (email, password, callback) => {

    signInWithEmailAndPassword(config, email, password)
        .then((userCredential) => {
            // After signed in 
            const user = userCredential.user;
            // console.log(user.email)
            callback()
            return (user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage)
        });

}