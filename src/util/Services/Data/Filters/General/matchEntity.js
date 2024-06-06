export const matchedEntity = (array, matchKey, matchValue) => {
    // Helper function to get the value of a nested key
    function getValueByKey(obj, keyPath) {
        return keyPath.split('.').reduce((acc, part) => acc && acc[part], obj);
    }

    // Find the first object that matches the given key and value
    const entity = array?.find(obj => getValueByKey(obj, matchKey) === matchValue)

    if (entity) {
        return { match: entity, found: true };
    } else {
        console.log("Array not found ")
        return { match: {}, found: false };
    }
}