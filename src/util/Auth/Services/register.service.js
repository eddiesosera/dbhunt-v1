import { createUserWithEmailAndPassword } from "firebase/auth";
import { config } from "../../Services/firebase";
import { createItem } from "../../Services/Data";
import { getUsertLocation } from "../../Services/Map/getUserLocation";
import { Timestamp } from "firebase/firestore";
import dayjs from "dayjs";
import { getAddressByCoordinates } from "../../Services/Map/getAddressByCoordinates";

export const Register = async (email, username, password, callBackFunction) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      config,
      email,
      password
    );
    const user = userCredential.user;

    const location = await getUsertLocation();
    const address = await getAddressByCoordinates(location);

    const userRegion = {
      address: address,
      coordinates: location,
    };

    const JoinedOn = dayjs().format();

    const userDetails = {
      email: user.email,
      username: username,
      dateJoined: JoinedOn,
      role: "player",
      region: userRegion,
      avatar: "1",
      hunts: [],
      dragonballs: [],
      awards: 0,
    };

    const newUserId = await createItem("players", userDetails);

    if (callBackFunction) {
      callBackFunction(newUserId);
    }
  } catch (error) {
    console.error("Error during registration: ", error.message);
    return false;
  }
};
