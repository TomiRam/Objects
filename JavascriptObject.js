//Build Javascript Objects
var myDog ={
	"name": "Rex",
	"legs": "4",
	"tails": "1",
	"friends":["everything"]
};
//updating object properties
myDog.name = "happy Rex";
//Adding new properties to an object
myDog['bark']= "woof!";
//delete property from object
delete myDog.tails;

//Accessing object properties with Dot notation 
var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
//Acessing object properties with bracket Notation
var testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

//Accessing object properties with Variables
var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
//Testing object properties
var myObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

function checkObj(checkProp){
	//Your Code Here
	if(myObj.hasOwnProperty(checkProp)){
		return myObj[checkProp];
	}else{
		return "Not found"
	}

}
console.log(checkObj("hat"));