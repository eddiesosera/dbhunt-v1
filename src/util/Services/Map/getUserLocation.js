import * as Location from 'expo-location';

export const getUsertLocation=async()=> {
  // Request permission to access location
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.error('Permission to access location was denied');
    return null;
  }

  // Get the current position
  let location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;

  // Return the location object
  return {
    latitude,
    longitude
  };
}
