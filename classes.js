// Classes and Objects In javascript

class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    #courseList = []

    getInfo(){
        return {name:this.name,age:this.age}
    }

    enrollCourse(name){
        this.#courseList.push(name)
    }

    getCourseList(){
        return this.#courseList;
    }

    login(){
        return "I am logged In"
    }

}


class Subadmin extends User{
    constructor(name,age){
        super(name,age);
    }

    getSubadmin(){
        return "I am from subadmin"
    }

    
}

module.exports = User;

const newTwo = new Subadmin("Minaz",20);

console.log(newTwo.getSubadmin());
console.log(newTwo.login());