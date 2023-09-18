//1. 
class Student{
    constructor(name, email, age, score){
        this.name = name
        this.email = email
        this.age = age
        this.score = score
    }
}

let student1 = new Student('Kai', 'k@gmail.com', 19 , 95)
let student2 = new Student('Axel', 'a@gmail.com', 18, 20)
let student3 = new Student('Gilbert', 'g@gmail.com', 18, 90)
console.log(student2.age);

let classroom = [student1, student2, student3]
