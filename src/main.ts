//Partial


type Assignment = {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "nattcode1234",
    title: "Project",
    grade: 1
}

console.log(updateAssignment(assign1, {grade:95}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})