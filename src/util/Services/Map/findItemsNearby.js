import * as Location from 'expo-location';

export const findItemsNearby = async () => {
    const GOOGLE_MAPS_API_KEY = "AIzaSyCJV08jUrA4c9QCZSMiDvMJPAFbZUywgYQ"
    const location = await getCurrentLocation();
    if (!location) return [];
  
    const { latitude, longitude } = location;
    const radius = 2000; // Radius in meters
  
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&key=${GOOGLE_MAPS_API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results)
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
}
