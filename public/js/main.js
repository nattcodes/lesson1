"use strict";
//Partial
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "nattcode1234",
    title: "Project",
    grade: 1
};
const assignGraded = updateAssignment(assign1, { grade: 99 });
// console.log(assignGraded)
//Required and Read Only
const record = (assign) => {
    return assign;
};
const recordV = Object.assign(Object.assign({}, assignGraded), { verified: true });
// console.log(record)
// console.log(recordV)
//Record
const colorMap = {
    red: 'ff0000',
    green: '00ff00',
    blue: '0000ff'
};
const finalGrades = {
    Mark: 'A',
    John: 'F'
};
const pickResult = {
    studentId: 'kartos',
    grade: 99
};
const omitResult = {
    grade: 99,
    title: 'tyujhn'
};
// console.log(pickResult)
// console.log(omitResult)
