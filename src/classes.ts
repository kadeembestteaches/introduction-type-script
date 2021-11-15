class Employee
{
    firstName:string;
    lastName:string;
    age:number;
    department:string;


    constructor(fn:string,ln:string,a:number,depart:string)
    {
        this.firstName=fn;
        this.lastName=ln;
        this.age=a;
        this.department=depart;
    }

    getFullName():string
    {

        return `${this.firstName} ${this.lastName}`
    }
}


class Circle {

    radius:number;

    constructor(r:number)
    {
        this.radius = r;
    }
}

//Create an Object or Instance

const emp1:Employee = new Employee("Kadeem","Best",91,"I.T");
const emp2:Employee = new Employee("Bruce", "Wayne",52,"Marketing");

//create an array of Employees

const employees:Employee[] =[emp1];

employees.push(emp2);
employees.push(new Employee('Dianna',"Prince",5000,"CEO"));




//const emp2:Employee = new Circle(7); // THis will give you an error because the reference variable is of type Employee. However, we called a circle constructor