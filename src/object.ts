
interface Person {

    firstName : string,
    lastName : string,
    middleName?:string,
    age : number,
    getFullName?():string
    random?():void
}

//object literal
const p1:Person = {
    firstName : "Jon",
    lastName : "Snow",
    age : 25,


}



const p2:Person = {

    firstName : "Thanos",
    lastName:  "Badman",
    middleName : "Billy",
    age : 57,

    getFullName()
    {
        return `${this.firstName} ${this.lastName}`
    }
}
