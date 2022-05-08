const employee = {
  name: "alex",
  streeAddress: "11 reno",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.name = "Sam";
  employee.streetAddress = "12 Broadway";

  return employee;
}

function deleteFromEmployeeByKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
