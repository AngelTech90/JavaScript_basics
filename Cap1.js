
//NOTES


const logIn = valor => console.log(valor);
//with this we can log in console only writing "logIn"

/*with this you can use the function only writing "$"*/
const $ = taker => document.getElementById(taker);

//typeof is a function of js that let us see the var type 
//"logIn(typeof var);" for example"
var Quico = "Pipipi";
logIn(typeof Quico);


//you can put br into two words or vars in your logs in js with "\n"
// logIn("jose \n pedro") for example
    logIn("Jose \n judas");


//you can show specific html elements properties using ".propertie"
//logIn(var.lenght);(for example)
var pedro = "hello world";
logIn(pedro.length);
//this log lenght 10 in console


var Nombre ="Jose";
logIn(Nombre.indexOf('e'));
/*A useful propertie is "indexOf" that let us search a especific element of our var
this show us that "e" is in the position 3*/


//we have the "slice" property that let us take specific positions and show us their content
var mano ="JavaScript";
logIn(mano.slice(2,6));
//this show us "vaSc"


//another is "replace" that let us change the content of some var
var Juan="Python";
logIn(Juan.replace("Python","Java"));
/*This show "Java" at the place of "Python"*/


/*Split makes an array with the size of the number of positions that our var
have and show every for separate*/
var Loca="PENE";
    logIn(Loca.split(''));

/*We can create with this and '-' or ',' like parameter an array which have an only element with 
one position with the value of our var*/
var Loco ="papa";
    logIn(Loco.split('-'));

console.log(Loca[0]);

/*We can convert in number type vars with "Number"*/
var patron = "32",mijo = "45",result="0";
logIn(Number(mijo) + Number(patron));

//and you have a lot of other js and html properties that you can check with the "."


/*OPERATORS
"%" give us the mod of two numbers,"==" give us a bolean atribute if our vars are equal or
isn't*/ 



/*Arrays
we use a var but we add "[]" */

let bocaPlayers = ["messi","maradona","pele"];
/*this array have 3 sites*/

logIn(bocaPlayers[2]);
/*this log "pele" */

logIn(bocaPlayers.length);
/*this log "3"*/


/*For string vars we have the propertie "sort" that show us in alphabet order of our 
elements */
logIn(bocaPlayers.sort());



/*"push" is a propertie that let us add elements in our arrays*/
logIn(bocaPlayers.push("ronald"));
logIn(bocaPlayers[3]);


/*If we want to quit elements of our array we have "pop" and "shift"*/
logIn(bocaPlayers.shift());/*default this quit the first element*/
logIn(bocaPlayers.pop())/*default this quit the last*/

/*for specific elements*/
    logIn(bocaPlayers.shift(2));
    logIn(bocaPlayers.pop(0));

logIn(bocaPlayers);

 /*And we can do opposite of this properties with "unshift" */
    logIn(bocaPlayers.unshift("quico"));/*default this add in the first element*/



 /*Note:indexOf is useful to find specific positions in our arrays, more if it's giant */
    let pepes=[329384249];
    pepes[230434] = "Hilary";

logIn(pepes.indexOf("Hilary"));
/*this shows the exactly positions in console */


/*we can concat different arrays with "concat" propertie */
logIn(bocaPlayers.concat(pepes))



/*OBJECTS IN JS
they're memory spaces with properties that have the data that we code inside */

const house = {

coloredIn:"black",

size:234.234,

mensualCost:"34000$",

wallsMaterial:"fireBricks",

kitchen:["furnance","knife","table","soap"],

}

/*And, cause an object have PROPERTIES we can acces their just like the other */
logIn(house.coloredIn,house.size);



/*LOOPS */

let i;

//for
for(let i =0; i <5;i++){

    logIn(i);
}

//while
while(i > 7){

    logIn(i);
    i++;

}

//do while
do {

    logIn(i);
    i=i+2;

}while(i >= 10)



/*CONDITIONS */



//if
var a = 23;
if(a>5){
    logIn(a," es mayor a 5");
} else{
    logIn(a," es menor a 5");
}

//else if


if(a >= 20){

    logIn(a," es mayor a 20");

} else if(a<20){

    logIn(a," es menor a 20");
}

//switch

let x = 76, y = 23 ;

switch(a){

    case 34:
    logIn(a," es 34");
    break;

    case 23:
    logIn(a," es 23");
    break;

    case 56:
    logIn(a,"es 56");
    break;

    default:
        logIn("unknow");
        break;
}



//FUNCTIONS

/*we stop in min 11:40 */

//return functions

function worker_data(){

    var salary = 23*4;

    return salary;

}

var chamba = worker_data();

logIn(chamba);


//Arrow functions/ anonym fuctions

/*There are functions that don´t have a exactly name and been activated by a var */

let Calculator = function(n1,op,n2,result){

    result = 0;

if(op == "*"|| op == "/" || op == "+" || op == "-"){

    switch(op){

        case "*":
        result = n1*n2;
        break;

        case "/":
        result = n1/n2;
        break;

        case "+":
        result = n1+n2;
        break;

        case "-":
        result = n1-n2;
        break;
    }

}

return result;

}

logIn(Calculator(21,"*",4));
/*This return in console the result of 21 * 4 */


/*A shorter way to make it */

var Suma =(n1,n2) => n1 + n2;
logIn(Suma(12,23));

var resta = (n1,n2) => n1-n2;
logIn(resta(21-45));

var multiplicar = (n1,n2) => n1*n2;
logIn(multiplicar(34,4));

var dividir = (n1,n2) => n1/n2;
logIn(dividir(34,2));

//we stop in 17:04

/*NESTED FUNCTIONS*/


/*little practice*/

 function boxSizing(){

  /*there are our vars that take the elements of our HTML*/  
var result = $("span-result"),height = $("input-height").value,width = $("input-width").value;

//we use Number functions to set our var in a number type to make our operation
result.innerHTML = Number(height) + Number(width);

}


/*Function "eval"
eval is a function that let us take values from other elements and read them, and before give us the chance to use the values in operations into the function, here a example*/

var a = 23,b=34,xe =12,ye = 7 ,z = 16;

var combine = eval((a+b+xe)*2);
logIn(combine);

/*Function "parseFloat"

This let us take only the numbers of a single element taking too the decimal part*/

var proveParseFloatA = "10.2121da",proveParseFloatB = "20.5454lasa";

logIn(parseFloat(proveParseFloatA)+ parseFloat(proveParseFloatB));


/*Function "parseInt" 

this let us do the same that "parseFloat", with the difference of don't take the decimal part of the number*/

var proveParseIntA = "10.2121ada",proveParseIntB = "20.5454lasda";

logIn(parseInt(proveParseIntA)+ parseInt(proveParseIntB));

/*we stp in 28:04 */

/*Date.parse function
it's a function that you could use to see the time that goes to january 1970 to the date that you use with the function*/

var date = "june 9,2006 11:30 AM";

result = Date.parse(date);
logIn(result);


/*Methods in JS */

/*FOREACH : forEach method works searching all the elements into an array, and let us use parameters just like vars or properties of the elements that we are searching, like "value", "lenght", and too we can aply it with logic operators to find a specific element*/

/*NOTE:let is used to values that don't change, var it´s used to normal vars */


let numberList = [1,2,3,4,5,6,7,8];

numberList.forEach((value) => {

    logIn(value == 5);

})

let list = [1,2,3,4,5,6,7];

list.forEach((i) => {

    logIn(i);

})


/*SOME : some method works taking in count all the elements into an array and seeing inside and check the positions, and you can use it with properties to find for a specific position or element  */

someExample = [1,2,3,4,5,6] ;

logIn(someExample.some((value) => {

    return value % 2 == 0;
}) 
)
/*This example works aplying "some" method in our array "someExample" to check all our elements, and we put the "value" propertie like parameter of our function
to check the values inside our positions, and before we aply that parameter in a nested arrow function that return a bolean aplying the conditional with logic operators */


/*"every" method works taking in count all the elements into an array and aplying the code into the method for all the elements */

listEvery = [1,2,3,4,5,6];

logIn(listEvery.every((value) => {

    return value > 2;
}))

//this returns 3,4,5,6

/*This example show us how we take all the elements of our array and use like parameter all the values of our arrays, and before we use it into a function that aplied a conditional that returns a bolean
if once of our elements are ">2" */


/*"map" method is used to create and extract all the elements of an array and work with it , aplying a function that can interact with the properties of all the elements of our array */


mapList = [1,1,1,2,3,4]

logIn(mapList.map((value) => {

    return value *
    4;
}));

//this returns 4,4,4,8,12,16

/*We aplied the method to manipulate the "value" propertie of all our array's elements, and before we use it like parameter for a function that return a new array with the new values that been changed in our function */

//we stop in 26:06

/*"filter" method works taking all the elements into our array , and aplying the code that we put into the function with the parameter of ones of our elements*/
let filterList = [3234,5343,5645,4346,3237];

let filterProve = filterList.filter((value) => {

    return value > 4243;

})

logIn(filterProve);

//this returns  4346, 5343, 5645


/*reduce method, works like an iterative method that starts in the first position of our array and it will aply the first parameter like a function, that will interact with the next parameter , and we can define the position in that will be aplied our method*/

//example 1
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reducer);

//this returns 85

//Example 2
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
(accumulator, currentValue) => accumulator + currentValue.x,
0,
);

console.log(sum); // 6