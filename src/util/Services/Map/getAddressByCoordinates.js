import axios from "axios";
import { GOOGLE_API } from '@env';

export const getAddressByCoordinates = async (coordinates) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${GOOGLE_API}`
    );

    // Returns neighborhood. See more on formatting structure: https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding
    const address = response.data.results[0]?.address_components[3].long_name;

    return address;
  } catch (err) {
    console.log("Failed to fetch. More info: ", err);
    throw err; // Rethrow the error to be handled by the caller
  }
};
