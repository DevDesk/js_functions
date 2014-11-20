var data = require("./products.json")

var getItems = function (itemData) { 
return itemData.items };
// console.log(getItems(data))
var bigData = getItems(data)

// var brandFilter = [];
// var getItemsByBrand = function (array,brand) {
// 	for (var i = 0; i < bigData.length; i++) {
// 		return array[i].product.title
// 	}
// }
// console.log(bigData.length)
// for (var key in getItems(data)) 
// 	{
// 		if (getItems(data)[key].product.brand === brand) 
// 		{
// 			return brandFilter.push(data["items"][key].product.title);
// 		}
// 	}
// }
// brandFilter===(getItemsByBrand(getItems(data),"Nikon"))
// console.log(brandFilter)
// console.log(getItemsByBrand(getItems(data),"Nikon"))
// console.log(array)
