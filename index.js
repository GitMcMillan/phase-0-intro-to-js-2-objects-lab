const employee = {};






function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
  return Object.assign({}, employee, {[name]: streetAddress})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}



function deleteFromEmployeeByKey(employee, key) {
  const copyOfEmployee = {...employee}
  delete copyOfEmployee [key]
  return copyOfEmployee


}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee [key]
  return employee
}
