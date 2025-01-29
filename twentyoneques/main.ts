/*Think of something yoou could store in a typescript object
Write a program that creates objects containing these items. */

interface itCourse{
    name : string;
    location: string;
    onsiteStudents: number;
}
 
let itCourse = {
    name: "Typescript and Javascript",
    location: "Governer House Sindh",
    onsiteStudents:50000
};
console.log(itCourse)