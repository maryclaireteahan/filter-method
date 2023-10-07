  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paulArr = people.filter(p => p.name === "Paul");
console.log(paulArr);

const paulObj = people.filter(p => p.name === "Paul")[0];
console.log(paulObj);
// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// ----------------ORIGINAL------------------------------------

// const hasStrongSkills = student =>{
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// } ;

// ----------------SIMPLIFIED---------------------------------------

// const candidates = students.filter(hasStrongSkills)
// console.log(candidates);
// const hasFiveYearsExp = skill => skill.yrsExperience >= 5;
// const hasStrongSkills = student =>{
//   let strongSkills = student.skills.filter(hasFiveYearsExp);
//   return strongSkills.length > 0;
// } ;
// const candidates = students.filter(hasStrongSkills)
// console.log(candidates);

// ----------------SIMPLIFIED FURTHER--------------------------------


const hasFiveYearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student =>student.skills.filter(hasFiveYearsExp).length > 0;
const candidates = students.filter(hasStrongSkills)
console.log(candidates); 
const names = candidates.map(candidate => [candidate.name]);
console.log(names);