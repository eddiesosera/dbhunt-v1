export const calculateCircleCoordinates = (center, radius) => {
    const earthRadius = 6371; // Radius of the Earth in km
    const latRadian = center.latitude * Math.PI / 180; // Convert latitude to radians

    // Latitude delta in degrees
    const latDelta = (radius / 1000 / earthRadius) * (180 / Math.PI);

    // Longitude delta in degrees
    const lonDelta = (radius / 1000 / earthRadius) * (180 / Math.PI) / Math.cos(latRadian);

    const coordinates = [];

    // Generate circle coordinates
    for (let angle = 0; angle <= 360; angle += 10) {
        const latitude = center.latitude + (latDelta * Math.sin(angle * Math.PI / 180));
        const longitude = center.longitude + (lonDelta * Math.cos(angle * Math.PI / 180));
        coordinates.push({ latitude, longitude });
    }

    return coordinates;
};