// Rest parameter
/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */

const sum = (a = 0, b = 0, ...other) => {
  let total = a + b;
  for (let n of other) total += n;

  return total;
};

console.log(sum());

// Spread Operator
// Hoạt động với Array hoăc object
// SỬ dụng để copy các giá trị trong mảng hoặc các cặp key trong object

const arr = [1, 2, 3];
const obj = {
  x: 1,
  y: 2,
};

// Tạo mảng mới
const clone = [...arr];
const cloneObj = { ...obj };

// Tách các giá trị khi truyền vào hàm
console.log(...arr)// Interpolation // Cho phép nhúng trực tiếp các biểu thức JS vào chuỗi // Template string ``
`${arr} ${1 + 2} ${sum(1, 2, 3)}`;

// Template tag
console.log`prefix ${arr} suffix`;

// Destructuring assignment
// Hoạt động với mảng, object

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const {id, title, price, category} = product

// Keyword type {} || [] = object | array
// Với object thì lấy theo key
// Với array thì lấy theo vị trí (index)
const [a,b,c] = arr

const renderProduct = ({id, title, price, description, category, title}) => {
    return `<div>${title}</div>`
}