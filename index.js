// Code your solution here
const findMatching = (array, name) => {
    const lowercaseName = name.toLowerCase();
    const newArray = array.filter(item => item === name || item.toLowerCase() === lowercaseName);
    return newArray;
}

const fuzzyMatch = (array, name) => {
    return array.filter(item => item.substring(0, name.length) === name);
}

const matchName = (array, name) => {
    return array.filter(item => item.name === name);
}