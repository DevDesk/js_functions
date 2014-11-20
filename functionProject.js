var data = require("./products.json")

var getItems = function (itemData) { 
return itemData.items
};

var bigData = getItems(data)
// for (var key in data ["items"]) {
// 	if (data ["items"][key].product.inventories[0].availability === "items") {
// 		console.log(data["items"][key].product.title);
// 		items++;
// 	}
// }
// console.log(getItems(data))

// var brandTicker = 0
var newArray = [];
// var brandTicker = 0
var getItemsByBrand = function (array,brand) 
{
for (var key in getItems(data)) {
	if (getItems(data)[key].product.brand === brand) {
		newArray.push(data["items"][key].product.title);
		// brandTicker++;
// 	}
// }
// }
// console.log(brandTicker)

// 	for (var i = 0; i < array.length -1; i++) 
// 	{
// 		// if (brand === brand) {
// 	// if (array[i].product.brand === brand) 
// 	// {
// 	newArray.push(array[key].product.title);
// // 	}
// return newArray;	
}
}
}
// // console.log(getItems(data))
getItemsByBrand(getItems(data),"Nikon")

console.log(newArray)
// console.log(newArray[2])
