//Accessing Nested Objects
var myStorage ={"car":{
	"inside":{ 
		"glove box": "maps",
		"passenger": "crumps"

	},
	"outside":{
		"trunk": "jack"
	}
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
	
console.log(gloveBoxContents)