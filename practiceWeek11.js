//----------04/19/22------------
//Destructuring an Array

//Ex.)
// let names = ['name1', 'name2', 'name3', 'name4', 'name5'];

// const [item1, item2, ...remainingItems] = names;

// console.log(item1);
// console.log(item2);
// console.log(names);//Returns: [ 'name1', 'name2', 'name3', 'name4', 'name5' ]
// console.log(remainingItems);//Returns: [ 'name3', 'name4', 'name5' ]

//Object Destructuring

//Ex.)
let song = {
    tupac: "hail marry",
    biggie: "sky is the limit",
    kendrick: {name: "Kendrick Lamar", albums: 5}
};

const {
    biggie,
    tupac,
    kendrick: {albums}
} =  song;

console.log(tupac); //Returns: hail marry
console.log(biggie);//Returns: sky is the limit
console.log(albums);//Returns: 5


