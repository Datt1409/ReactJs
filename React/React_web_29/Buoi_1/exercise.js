// Bài 1
const findMax = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMax([5, 6, 7]));

// Bài 2
const findMin = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  return min;
};

console.log(findMin([3, 5, 7, 8, 9]));

// Bài 3

function findSurplus(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] % 2);
  }

  return result;
}

console.log(findSurplus([4, 2, 5, 6, 2, 7]));

// B4

function duplicateStr(str) {
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += str;
  }

  return result;
}

console.log(duplicateStr("hello"));

// B5

function anotherDuplicate(str) {
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += str + "-";
  }

  result = result.slice(0, -1);

  return result;
}

console.log(anotherDuplicate("a"));

// B6

function checkElementExist(arr, num) {
  return arr.includes(num) ? true : false;
}

console.log(checkElementExist([1, 2, 3, 4, 5], 5));
console.log(checkElementExist([1, 2, 3, 4, 5], 6));

// b7

function getElementGreater(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) result.push(arr[i]);
    else result;
  }

  return result;
}

console.log(getElementGreater([1, 2, 3, 4, 5], 3));
console.log(getElementGreater([1, 2, 3, 4, 5], 5));

// B8

function randomHexCode() {
  const hexChar = "0123456789ABCDEF";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexChar.length);
    hexCode += hexChar[randomIndex];
  }

  return hexCode;
}

console.log(randomHexCode());

// b9

function randomRGB() {
  const min = 0;
  const max = 255;
  const red = Math.floor(Math.random() * (max - min + 1) + min);
  const green = Math.floor(Math.random() * (max - min + 1) + min);
  const blue = Math.floor(Math.random() * (max - min + 1) + min);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  return rgbColor;
}

console.log(randomRGB());

// b10
function sortStudent(names) {
  return names.sort((a, b) => b.localeCompare(a));
}

console.log(sortStudent(["Nam", "Hoa", "Tuấn"]));

// B11

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));

// B12

function symmetricDifference(arr1, arr2) {
  let result = [];

  for (let number of arr1) {
    if (!arr2.includes(number) && !result.includes(number)) {
      result.push(number);
    }
  }

  for (let el of arr2) {
    if (!arr1.includes(el) && !result.includes(el)) {
      result.push(el);
    }
  }

  return result;
}

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// B13


