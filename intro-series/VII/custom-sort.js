var myObjects = [
    { firstName: "Matt", lastName: "West" },
    { firstName: "Joe", lastName: "Blow" },
    { firstName: "Cameron", lastName: "James" },
    { firstName: "Jessica", lastName: "Drew" }
];

function sortObjects(arr) {
    return arr.sort(function (a, b) {
        if (a.firstName > b.firstName) {
            return 1;
        } if (a.firstName < b.firstName) {
            return -1;
        } else {
            return 0;
        }
    });
}

sortObjects(myObjects);

console.log(myObjects);