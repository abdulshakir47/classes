const User = require("./classes.js")

const shakir = new User("Abdul Shakir",20)
console.log(shakir.getInfo());


shakir.enrollCourse("React Js")
shakir.enrollCourse("Angular Js")


console.log(shakir.getCourseList());
//console.log(shakir.courseList);


const courses = shakir.getCourseList();
courses.forEach(element => {
    console.log(element);
});

