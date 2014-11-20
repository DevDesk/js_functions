var data = require("./products.json")

var getItems = function (itemData) 
{ 
	return itemData.items
};
// console.log(getItems(data))


var bigData = getItems(data)
var brandFilter = [];
var getItemsByBrand = function (array,brand) 
{
	for (var key in getItems(data)) 
	{
		if (getItems(data)[key].product.brand === brand) 
		{
			brandFilter.push(array[key].product.title);
		} 
	}
return brandFilter} 
getItemsByBrand(getItems(data),"Sony")
// console.log(getItemsByBrand())


var authorFilter = [];
var getItemsByAuthor = function (array,authorName) 
{
	for (var key in getItems(data)) 
	{
		if (getItems(data)[key].product.author.name === authorName) 
		{
			authorFilter.push(array[key].product.title);
		} 
	}
return authorFilter} 
getItemsByAuthor(getItems(data),"eBay")
console.log(getItemsByAuthor())

// var getAvailableProducts = function (stockArray) 
// { 
// 	return itemData.items
// };


// var inStockFilter = [];
// var getAvailableProducts = function (stockArray) 
// {
// 	for (var key in getItems(data)) 
// 	{
// 		if (getItems(data)[key].product.inventories[0].availability === "inStock") 
// 		{
// 			inStockFilter.push(stockArray[key].product.title);
// 		} 
// 	}




// var backorder = 0

// for (var key in data ["items"]) {
// 	if (data ["items"][key].product.inventories[0].availability === "backorder") {
// 		console.log(data["items"][key].product.title);
// 		backorder++;
// 	}
// }
// console.log(backorder)

// return inStockFilter} 
// getAvailableProducts(getItems(data))
// console.log(getAvailableProducts())
