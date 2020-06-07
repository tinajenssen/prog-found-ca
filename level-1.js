// Question 1
var season = "summer";

// Question 2
var person = {
    gender = "female",
    age = 27
};

// Question 3
outOfStock=true;

if(outOfStock === true){
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 4
var numberArray = [10, 12, 17, 19, 25];

var numberOfNumbers = numberArray.length;
console.log(numberOfNumbers)

for(var i = 0; i < numberOfNumbers; i++) {
    console.log(numberArray[i]);
}

// Question 5
for(count = 15; count <= 25; count++) {
    console.log(count);
}

// Question 6
for(count = 15; count <= 25; count++) {
    console.log(count=20);
}

// Question 7

var forSale = [ 
    {
    product: "tent",
    price: 2500,
    available: true
    },
    {
    product: "hammock",
    price: 450,
    available: false
    },
];

for (var i=0; i < forSale.length; i++)
{
console.log (forSale[i].price);
console.log (forSale[i].available);
}

// Question 8
function whatIDontLike (dislikes){
    console.log("I don't like " + dislikes);
}

whatIDontLike("cats");

// Question 9
function subtract (numberOne, numberTwo){
    var total = numberOne - numberTwo;
    console.log(total);
}

subtract (287, 98);

// Question 10
var emptyArray = [];

function light (status){
    var emptyArray = [status];
    console.log ("lights " + status)
};

light ("on");

