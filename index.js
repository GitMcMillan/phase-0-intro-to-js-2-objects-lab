
const employee = {
  name: "Bob",
  streetAddress: "111 1st street",
};



// //function nondestructivelyUpdateObject(obj, key, value) {
//   const newObj = { ...obj };

//   newObj[key] = 
//   value;

//   return newObj;
// }
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };

  newEmployee[key] = value;

  return newEmployee;
};



// destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

  employee[key] = value;

  return employee;

};

// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!


function deleteFromEmployeeByKey(employee, name) {
  const newerEmployee = { ...employee, }

  delete newerEmployee.name

  return newerEmployee
};

// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.

function destructivelyDeleteFromEmployeeByKey(employee, name) {
  delete employee.name

  return employee
};































// const employee = {};






// function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
//   return Object.assign({}, employee, {[name]: streetAddress})
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee[key] = value;
//   return employee;
// }



// function deleteFromEmployeeByKey(employee, key) {
//   const copyOfEmployee = {...employee}
//   delete copyOfEmployee [key]
//   return copyOfEmployee


// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//   delete employee [key]
//   return employee
// }
