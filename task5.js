// Resume details in JSON FORMAT: 
const resume = {
    "Name": "Natarajan Thanaraj",
    "Qualification": "Mechanical Engineering Graduate",
    "CGPA": "8",
    "University name": "ACCET Karaikudi Anna university",
    "Passed out year": "2015",
    "Years of experience": "3",
    "Age": "28",
    "Location": "Ariyalur",
    "Overseas Experience": "1 year",
    "Language Known": "Tamil,English",
    "Interest": "Sports and career developing",
    "Programming Exp": "No",
    "Programming Languages": "Javascript Basics",
    "Scripting languages": "HTML",
    "Other Skills": "Engineering and General aptitude",
    "Basic Web Knowledge": "Yes",
    "IT Experience": "No"
};

// Exercise 1
// for loop using Object.keys(obj) statement and iterate the json object:
//========================== Solution=================
 const keys = Object.keys(resume);
 for (let i=0; i<keys.length; i++){
    console.log(`${keys[i]} : ${resume[keys[i]]}`);
 }
//===============================Result below for your reference==========

// VM364:3 Name : Natarajan Thanaraj
// VM364:3 Qualification : Mechanical Engineering Graduate
// VM364:3 CGPA : 8
// VM364:3 University name : ACCET Karaikudi Anna university
// VM364:3 Passed out year : 2015
// VM364:3 Years of experience : 3
// VM364:3 Age : 28
// VM364:3 Location : Ariyalur
// VM364:3 Overseas Experience : 1 year
// VM364:3 Language Known : Tamil,English
// VM364:3 Interest : Sports and career developing
// VM364:3 Programming Exp : No
// VM364:3 Programming Languages : Javascript Basics
// VM364:3 Scripting languages : HTML
// VM364:3 Other Skills : Engineering and General aptitude
// VM364:3 Basic Web Knowledge : Yes
// VM364:3 IT Experience : No



// for in loop to iterate the object: Exercise 2
//========================== Solution=================
for (let property in resume) {
    console.log(`${property} : ${resume[property]}`);
};

//===============================Result below for your reference==========
//[Running] node "d:\Guvi class\Day 3\task\task3.js"
// Name : Natarajan Thanaraj
// Qualification : Mechanical Engineering Graduate
// CGPA : 8
// University name : ACCET Karaikudi Anna university
// Passed out year : 2015
// Years of experience : 3
// Age : 28
// Location : Ariyalur
// Overseas Experience : 1 year
// Language Known : Tamil,English
// Interest : Sports and career developing
// Programming Exp : No
// Programming Languages : Javascript Basics
// Scripting languages : HTML
// Other Skills : Engineering and General aptitude
// Basic Web Knowledge : Yes
// IT Experience : No

// [Done] exited with code=0 in 0.12 seconds


//for of loop to iterate over the object;
//================Exercise 3 =================
for (const keys of Object.keys(resume)) {
    console.log(`${keys}: ${resume[keys]}`);
};
//================result =================
// [Running] node "d:\Guvi class\Day 3\task\task3.js"
// Name: Natarajan Thanaraj
// Qualification: Mechanical Engineering Graduate
// CGPA: 8
// University name: ACCET Karaikudi Anna university
// Passed out year: 2015
// Years of experience: 3
// Age: 28
// Location: Ariyalur
// Overseas Experience: 1 year
// Language Known: Tamil,English
// Interest: Sports and career developing
// Programming Exp: No
// Programming Languages: Javascript Basics
// Scripting languages: HTML
// Other Skills: Engineering and General aptitude
// Basic Web Knowledge: Yes
// IT Experience: No

// [Done] exited with code=0 in 0.134 seconds
//================Exercise 3 =================
for (const [key, value] of Object.entries(resume)) {
    console.log(`${key}: ${value}`);
};
// //================result =================
// [Running] node "d:\Guvi class\Day 3\task\task3.js"
// Name: Natarajan Thanaraj
// Qualification: Mechanical Engineering Graduate
// CGPA: 8
// University name: ACCET Karaikudi Anna university
// Passed out year: 2015
// Years of experience: 3
// Age: 28
// Location: Ariyalur
// Overseas Experience: 1 year
// Language Known: Tamil,English
// Interest: Sports and career developing
// Programming Exp: No
// Programming Languages: Javascript Basics
// Scripting languages: HTML
// Other Skills: Engineering and General aptitude
// Basic Web Knowledge: Yes
// IT Experience: No

// [Done] exited with code=0 in 0.146 seconds

//================Exercise 4 =================
// For each 
Object.keys(resume).forEach((element) => console.log(`${element} : ${resume[element]}`));
// //================result =================
// >"Name : Natarajan Thanaraj"
// > "Qualification : Mechanical Engineering Graduate"
// > "CGPA : 8"
// > "University name : ACCET Karaikudi Anna university"
// > "Passed out year : 2015"
// > "Years of experience : 3"
// > "Age : 28"
// > "Location : Ariyalur"
// > "Overseas Experience : 1 year"
// > "Language Known : Tamil,English"
// > "Interest : Sports and career developing"
// > "Programming Exp : No"
// > "Programming Languages : Javascript Basics"
// > "Scripting languages : HTML"
// > "Other Skills : Engineering and General aptitude"
// > "Basic Web Knowledge : Yes"
// > "IT Experience : No"