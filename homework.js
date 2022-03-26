//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const myValues = Object.values(person3)
console.log(myValues);




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name
    this.age = age


    this.printinfo = () => {
        console.log("I am "+this.name+" "+this.age)

    }

}

//know this is incorrect, tried to figure it out
Person = (val) => "age" + val;
    



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const myPromise = () => {
    return new Promise((resolve, reject)=>{
            if (String.length){
                resolve('Big word')

            }
            else {
                reject('Small Number')
            }
    })



}



myPromise()
.then((bigword)=>{console.log(bigword)})
.catch((smallnumber)=>{console.log(smallnumber)})


//wasn't sure what to pass in
//wasn't sure what to put to find length
//Just attempted