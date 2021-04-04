// Write your solution in this file!
let driver = {address: '11 11th st'}
function updateDriverWithKeyAndValue(driver, key, value) {
    const copyDriver = {...driver};
    copyDriver[key] = value;
    return copyDriver;
}

console.log ("");
console.log(driver);
console.log("updateDriverWithKeyAndValue: ");
console.log(updateDriverWithKeyAndValue(driver, "name", "Sam"));
console.log(driver);

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

cosole.log ("")
console.log(driver);
console.log("destructivelyUpdateDriverWithKeyAndValue");
console.log(destructivelyUpdateDriverWithKeyAndValue(driver, "nickname", "lil"));
console.log(driver);
console.log (destructivelyUpdateDriverWithKeyAndValue(driver, "zodiac", "libra"));


function deleteFromDriverByKey(driver, key) {
    const copyDriver = {...driver};
    delete copyDriver.Key;
    return copyDriver;
}

cosole.log("");
console.log(driver);
cosole.log("deletedFromDriverByKey");
console.log(deleteFromDriverByKey("nickname"));

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}


console.log("");
console.log(driver);
console.log("destructivelyDeleteFromDriverByKey");
console.log(destructivelyDeleteFromDriverByKey(driver, "address"));
console.log(driver);
