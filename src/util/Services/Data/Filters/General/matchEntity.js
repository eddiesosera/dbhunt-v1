export const matchEntity = (array, matchKey, matchValue) => {
 // Helper function to get the value of a nested key
 function getValueByKey(obj, keyPath) {
    return keyPath.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Find and return the first object that matches the given key and value
return array.find(obj => getValueByKey(obj, matchKey) === matchValue);
}