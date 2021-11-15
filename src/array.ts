

//Explict Declaration whereby the array must only have STRING VALUES
const movies:string[] = ["Titanic","Matrix","Lion King"];

movies.push("Avengers");
//movies.push(5);// this will give me an error. I cannot store a number to a string array


//IMplict declaration 
const numbers = [3,8,-8,-5,0];

numbers.push(55);
//numbers.push("Blah");// This will give you an error


//This array can store ANY type of values!! 
const randomValues:any[] =["Testing",2,true,{}];



const displayAllMovies = (movies:string[]):void=>{

        movies.forEach(movie=>console.log(movie));
}


displayAllMovies(["Titanic","Matrix","blah"]);