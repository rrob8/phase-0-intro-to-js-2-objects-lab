// Write your solution in this file!
let employee = {
    name:"Harold",
    streetAddress:"36-36 202st"
}


function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}