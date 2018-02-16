function getTotal() {
	var itemsOrdered ="";
    var pizzaTotal = 0;
	var sizeTotal = 0;
	var sizeSelectionArray = document.getElementById("sizeSelect");
    	for (var i = 0; i < sizeSelectionArray.length; i++) {
			if (sizeSelectionArray[i].checked) {
				var selectedSize = sizeSelectionArray[i].value;
				itemsOrdered = itemsOrdered+selectedSize+"<br>";
    	        }
		} 
    		if (selectedSize === "Personal") {
				sizeTotal = 6;
			} else if (selectedSize === "Medium") {
				sizeTotal = 10;
			} else if (selectedSize === "Large") {
				sizeTotal = 14;
			} else if (selectedSize === "Extra Large") {
				sizeTotal = 16;
			}
	pizzaTotal = sizeTotal;
	console.log(selectedSize+" = $"+pizzaTotal+".00");
	console.log("sizeTotal: $"+pizzaTotal+".00");
    document.getElementById("showTotal").innerHTML = selectedSize; //SHOW output of variables at this point
    document.getElementById("showTotal").innerHTML = pizzaTotal; //SHOW output of variables at this point
	getCrust(pizzaTotal,itemsOrdered); // ALL three of these variables will be passed on to each function

};

function getCrust(pizzaTotal,itemsOrdered) {
	var crustTotal = 0;
	
	var crustSelectionArray = document.getElementById("crustSelect");
    	for (var j = 0; j < crustSelectionArray.length; j++) {
			if (crustSelectionArray[j].checked) {
				var selectedCrust = crustSelectionArray[j].value;
				itemsOrdered = itemsOrdered+selectedCrust+"<br>";
    	        }

			if (selectedCrust === "Cheese Stuffed Crust") {
				crustTotal = 3;
			}
		}
	console.log("selected crust: "+selectedCrust);
	console.log("crustTotal: $"+crustTotal+".00");
	console.log("crustSelect itemsOrdered: "+itemsOrdered);
    // document.getElementById("showTotal").innerHTML = selectedSize; SHOW output of variables at this point
    pizzaTotal = (pizzaTotal + crustTotal);
    console.log("pizzaTotal: $"+pizzaTotal+".00");
	getSauce(pizzaTotal,itemsOrdered); // ALL three of these variables will be passed on to each function

};

function getSauce(pizzaTotal,itemsOrdered) {
	var sauceSelectionArray = document.getElementById("sauceSelect");
    	for (var k = 0; k < sauceSelectionArray.length; k++) {
			if (sauceSelectionArray[k].checked) {
				var selectedSauce = sauceSelectionArray[k].value;
				itemsOrdered = itemsOrdered+selectedSauce+"<br>";
    	        }
		}
	console.log("selected sauce: "+selectedSauce);
	//console.log("sauceTotal: $"+sauceTotal+".00");
	console.log("sauceSelect itemsOrdered: "+itemsOrdered);
    // document.getElementById("showTotal").innerHTML = selectedSize; SHOW output of variables at this point
    // pizzaTotal = (pizzaTotal + sauceTotal);
    console.log("pizzaTotal: $"+pizzaTotal+".00");
	getCheese(pizzaTotal,itemsOrdered); // ALL three of these variables will be passed on to each function

};

function getCheese(pizzaTotal,itemsOrdered) {
	var cheeseTotal = 0;
	
	var cheeseSelectionArray = document.getElementById("cheeseSelect");
    	for (var l = 0; l < cheeseSelectionArray.length; l++) {
			if (cheeseSelectionArray[l].checked) {
				var selectedCheese = cheeseSelectionArray[l].value;
				itemsOrdered = itemsOrdered+selectedCheese+"<br>";
    	        }

			if (selectedCheese === "Extra Cheese") {
				cheeseTotal = 3;
			}
		}
	pizzaTotal = (pizzaTotal + cheeseTotal);
	console.log("selected cheese: "+selectedCheese);
	console.log("cheeseTotal: $"+cheeseTotal+".00");
	console.log("cheeseSelect itemsOrdered: "+itemsOrdered);
    // document.getElementById("showTotal").innerHTML = selectedSize; SHOW output of variables at this point
    console.log("Purchase Total: "+"$"+pizzaTotal+".00");
	document.getElementById("itemsOrder").innerHTML=itemsOrdered;
	document.getElementById("showTotal").innerHTML = "<h3>Total: <strong>$"+pizzaTotal+".00"+"</strong></h3>";
    console.log("pizzaTotal: $"+pizzaTotal+".00");
	getMeat(pizzaTotal,itemsOrdered); // ALL three of these variables will be passed on to each function

};

function getMeat(pizzaTotal,itemsOrdered) {
	var meatTotal = 0;
	var selectedMeat = []; //[] is an array, {} is an object. An array is a type of object intended to be only assigned numeric keys.
	var meatArray = document.getElementById("meatSelect");
		for (var m = 0; m < meatArray.length; m++) {
			if (meatArray[m].checked) {
				selectedMeat.push(meatArray[m].value);
				console.log("selected meat item: ("+meatArray[m].value+")");
				itemsOrdered = itemsOrdered+meatArray[m].value+"<br>";
			}
		}
	var meatCount = selectedMeat.length;
		if (meatCount > 1) {
			meatTotal = (meatCount - 1);
		} else {
			meatTotal = 0;
			}
	pizzaTotal = (pizzaTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat itemsOrdered: "+itemsOrdered);
	console.log("Purchase Total: "+"$"+pizzaTotal+".00");
	document.getElementById("itemsOrder").innerHTML=itemsOrdered;
	document.getElementById("showTotal").innerHTML = "<h3>Total: <strong>$"+pizzaTotal+".00"+"</strong></h3>";
	getVeggie(pizzaTotal,itemsOrdered); // ALL three of these variables will be passed on to each function
};

function getVeggie(pizzaTotal,itemsOrdered) {
	var veggieTotal = 0;
	var selectedVeggie = []; //[] is an array, {} is an object. An array is a type of object intended to be only assigned numeric keys.
	var veggieArray = document.getElementById("veggieSelect");
		for (var n = 0; n < veggieArray.length; n++) {
			if (veggieArray[n].checked) {
				selectedVeggie.push(veggieArray[n].value);
				console.log("selected veggie item: ("+veggieArray[n].value+")");
				itemsOrdered = itemsOrdered+veggieArray[n].value+"<br>";
			}
		}
	var veggieCount = selectedVeggie.length;
		if (veggieCount > 1) {
			veggieTotal = (veggieCount - 1);
		} else {
			veggieTotal = 0;
			}
	pizzaTotal = (pizzaTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie itemsOrdered: "+itemsOrdered);
	console.log("Purchase Total: "+"$"+pizzaTotal+".00");
	document.getElementById("itemsOrder").innerHTML=itemsOrdered;
	document.getElementById("showTotal").innerHTML = "<h3>Total: <strong>$"+pizzaTotal+".00"+"</strong></h3>";
};


function cancel() {
    location.reload();
};