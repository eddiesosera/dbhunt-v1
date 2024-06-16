import { createUserWithEmailAndPassword } from "firebase/auth";
import { config } from "../../Services/firebase";
import { createItem } from "../../Services/Data";
import { getUsertLocation } from "../../Services/Map/getUserLocation";
import { Timestamp } from "firebase/firestore";

export const Register = (email, username, password, callBackFunction) => {
  createUserWithEmailAndPassword(config, email, password)
    .then(async (userCredential) => {
      // After user is cretaed do the following:

      const user = userCredential.user;

      const location = await getUsertLocation();
      const JoinedOn = Timestamp.now();
      const userDetails = {
        email: user.email,
        username: username,
        // dateJoined: JoinedOn,
        role: "player",
        region: location,
        avatar: "1",
        dragonballs: [],
        awards: [],
      };

      const registerPlayer = await createItem("players", userDetails).then(
        (newUserId) => {
          console.log("Registered user: "+newUserId);
          callBackFunction(newUserId)
        //   return newUserId;
        }
      );

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage);
      return false;
    });
};
