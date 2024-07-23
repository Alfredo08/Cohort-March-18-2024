
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    printInfo = () => {
        console.log(this.firstName, this.lastName, this.age);
    }

    updateName = (fN, lN) => {
        this.firstName = fN;
        this.lastName = lN;
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, id, course){
        super(firstName, lastName, age);
        this.id = id;
        this.course = course;
    }

    printStudentInfo = () => {
        this.printInfo();
        console.log(this.id, this.course, this.certificate);
    }
}

const alex = new Person("Alex", "Miller", 25);
const martha = new Person("Martha", "Smith", 27);
const roger = new Student("Roger", "Anderson", 24, 12345, "Web Fundamentals");

roger.printStudentInfo();




