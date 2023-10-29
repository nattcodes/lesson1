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

const assignGraded: Assignment = updateAssignment(assign1, {grade: 99})
// console.log(assignGraded)



//Required and Read Only

const record = (assign: Required<Assignment>): Assignment => {
    return assign
}

const recordV: Readonly<Assignment> = {
    ...assignGraded, verified: true
}
// console.log(record)
// console.log(recordV)


//Record
const colorMap: Record<string, string> = {
    red: 'ff0000',
    green: '00ff00',
    blue: '0000ff'
}

type Students = 'Mark' | "John"
type Grades = 'A' | 'B' | 'C' | 'D' | 'F'

const finalGrades: Record< Students, Grades> = {
    Mark: 'A',
    John: 'F'
}
// Pick and Omit

type AssignmentResult = Pick<Assignment, "studentId" | "grade">
type AssignPreview = Omit<Assignment, "studentId">;

const pickResult: AssignmentResult = {
    studentId: 'kartos',
    grade: 99
    
}
const omitResult: AssignPreview = {
    grade: 99,
    title: 'tyujhn'
}
// console.log(pickResult)
// console.log(omitResult)