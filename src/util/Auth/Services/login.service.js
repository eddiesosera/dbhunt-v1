import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { config } from "../../Services/firebase";

export const Login = async (email, password, callback) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      config,
      email,
      password
    );
    const user = userCredential.user;

    if (callback) {
      callback();
    }

    return user.email;
  } catch (error) {
    const errorMessage = error.message;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
};
