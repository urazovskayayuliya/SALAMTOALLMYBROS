// let obj={name: 'John', age: 18};
// console.log(obj);

// let obj = new Object();
// obj.name='Paul';
// obj.surname='McCartney';
// obj.age=18;
// obj.status=true;

// delete(obj.name);
// console.log(obj);

// obj.status=undefined;
// obj.age=null;
// console.log(obj);

// if (obj.age == null)
//     if (obj.status==undefined)

// let keyOfObject = Object.keys(obj); //keys of object
// console.log(keyOfObject);
//
// let valueOfObject = Object.values(obj); //values of object
// console.log(valueOfObject);
//
// for (let value of keyOfObject) {
//     console.log(value);
// }
//
// for (let value of valueOfObject) {
//     console.log(value);
// }
let obj = new Object();
obj.az = "Azerbaijani";
obj.ru="Russian";
obj.tr = "Turkish";
let a = Object.entries(obj); //both key and values of object
console.log(a);

// for (let [key, value] of a) {
//     console.log(key);
// }

// let found = a.find(
//     ([key, value]) => value == 18);
// console.log(found[1]);

// let [x,y] = a.find(
//     ([key, value]) => value == true);
// console.log(x, y);


let x = a.map(([key, value]) => '<option value="'+ key +'">' + value + '</option>');
document.getElementById("language").innerHTML = x //tut error
console.log(x);
