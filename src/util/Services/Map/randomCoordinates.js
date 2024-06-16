export const generateRandomCoordinates = (center, radius, numPoints) => {
    const coordinates = [];

    for (let i = 0; i < numPoints; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const randomRadius = Math.sqrt(Math.random()) * radius; // Ensures even distribution within circle

        const latitudeDelta = (randomRadius / 111300) * Math.cos(center.latitude * Math.PI / 180); // 1 degree latitude ≈ 111300 meters
        const longitudeDelta = (randomRadius / 111300) / Math.cos(center.latitude * Math.PI / 180); // Adjust longitude based on latitude

        const latitude = center.latitude + latitudeDelta * Math.sin(angle);
        const longitude = center.longitude + longitudeDelta * Math.cos(angle);

        coordinates.push({ latitude, longitude });
    }

    console.log(coordinates)

    return coordinates;
}
