/**
 * Enhanced object literals
 
1. Định nghĩa key: value cho object
2. Định nghĩa method cho object 

let name = "Javascript"
let price = 1000

let course = {
    name,
    price,
    getName() {
        return name
    }
}


3. Định nghĩa key cho object dưới dạng biến

let fieldName = "name";
let fieldPrice = "price";

const course = {
  [fieldName]: "Javascript",
  [fieldPrice]: 1000,
};

console.log(course);


* Destructuring, Rest

let array = ["javascript", "php", "ruby"];

let [a, ...rest] = array;

console.log(rest);

let course = {
  name: "Javascript",
  price: 1000,
  img: "image-address",
  children: {
    name: "reactjs",
  },
};

let { name, ...other } = course;

console.log(other);

function logger({ name, price, ...rest }) {
  console.log(name);
  console.log(price);
  console.log(rest);
}

logger({
  name: "Javascript",
  price: 1000,
  description: "Description content",
});

* Spread

// Nối mảng

let arr1 = ["Javascript", "PHP", "Ruby"];
let arr2 = ["ReactJs", "Angular"];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Sao chép key: value từ 1 object
// Trùng key, ưu tiên lấy key value được định nghĩa sau

let obj1 = {
  name: "NVTN",
  gender: "female",
  age: 23,
  appearance: "pretty",
};

let obj2 = {
  ...obj1,
  name: "Jenny",
};
console.log(obj2);

// Truyền tham số cho hàm

let arr = ["Javascript", "Php", "ruby"];

function logger(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

logger(...arr);
// logger(...arr) không còn là arr, nhưng khi dùng toán tử rest, các tham số được truyền vào mảng => dùng dc vòng for

* Modules

*/

