let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert the JSON objects to strings
let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

// Compare the strings
if (obj1String === obj2String) {
  console.log("The JSON objects have the same properties.");
} else {
  console.log("The JSON objects do not have the same properties.");
}

