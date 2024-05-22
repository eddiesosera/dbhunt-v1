import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "..";

export const Login = (email, password, callBackFunction) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log("Logged in user: " + user.email)

            callBackFunction
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage)
        });

}