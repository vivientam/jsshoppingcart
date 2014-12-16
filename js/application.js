$( document ).ready(function() {
  // Handler for .ready() called.

 // var subTotalPrice = function(i) {
 // 	var subTotal = $($('.item-price')[i]).text().replace('$','')*$($('.quantity')[i]).val()
 // 	alert("The sub-Total price of Salmon is " + subTotal + " .")
 // 	return subTotal;
 // }


var subTotalPrice = function(i) {
 	var subTotal = $($('.item-price')[i]).text().replace('$','')*$($('.quantity')[i]).val()
 	console.log("The sub-Total price of ", $($('.item-name')[i]), " is ", subTotal)
 	return subTotal;
 };

 // subTotalPrice() 

var totalPrice = function() {
   	var totalPrice = 0;

	for (item = 0; item < ($('.item-name').length); item++){
		totalPrice = totalPrice + subTotalPrice(item);
		console.log(totalPrice);
	};
	return totalPrice;
}

$('#calc-prices-button').click(function(){
	totalPrice();
	$('#total-price').text('$' + totalPrice());
})




// $('#total-price').text('$' + parseFloat(totalPrice().toFixed(2))

// $('#total-price').text('$' + parseFloat(totalPrice()).toFixed(2))




// var totalPrice = function
	// var totalPrice = function(t){
	// 	console.log("The total Price is " + totalPrice + " .");
	// 	return t.subTotalPrice ++
	// }
// var add = function(num1, num2){
// 	return num1 + num2
// };

// sumjq = function(selector) {
//     var sum = 0;
//     $(selector).each(function() {
//         sum += Number($(this).text());
//     });
//     return sum;
// }

	// totalPrice = function(subTotalPrice){
	// 	var sum = 0;
	// 	$('.quantity').each(function(){
	// 		sum += Number($(this).text());
	// 	});
	// 	return sum;
	// }

	// console.log(each('.item-price'));
	
	// var subTotalPrice = function(y){
	// 	console.log("The sub-total Price: " + subTotalPrice + " .");
	// 	return y.indPrice * y.quantity;
	// }


	$(".quantity").attr('placeholder', 'Please enter quantity.');

	$('#calc-prices-button').text('Total Price');

	$('#calc-prices-button').click (function(){

		$("#calc-prices-button").addClass("btn btn-warning");
		console.log('Yes.');

		alert("The total price is " + totalPrice(1) + " .")
	});





	var items = [
		{
			name: "Salmon",
			indPrice: 60, 
			quantity: 1
		},
		{
			name: "Tuna",
			indPrice: 50,
			quantity: 1
		},
		{
			name: "Carp",
			indPrice: 40,
			quantity: 1
		},
		{
			name: "Pork",
			indPrice: 50,
			quantity: 1
		},
		{
			name: "Beef",
			indPrice: 40,
			quantity: 1
		},
		{
			name: "Chicken",
			indPrice: 25,
			quantity: 1
		},
		{
			name: "Cereal",
			indPrice: 45,
			quantity: 1
		},
		{
			name: "Milk",
			indPrice: 20,
			quantity: 1
		},
		{
			name: "Sugar",
			indPrice: 10,
			quantity: 1
		}
	
	
	$('.button').on('click', function() {
		alert($(this).parent().remove() )
		console.log("The item ", $($('.item-name')[i]), " has been removed.")
	});

	// var j;
	// for (j = 0; j <= 8; j++){
	// 	// j = 0..8
	// 	var x = items[j];
	// 	console.log(subTotalPrice(x));
	// }
// })


/*
$('#quantity').function(){
		var totalIndPrice = function("#itemPrice", "#quantity");
		console.log("Total item price: " + totalIndPrice.);
		return "#itemPrice" * "#quantity";
	}

	$('#calc-prices-button').on('click', function(){
		var totalPrice = function (a, b, c, d, e, f, g, h, i);
		return a + b + c + d + e + f + g + h + i;
		console.log("TotalPrice: " + totalPrice);

});

*/




// var item;
// for (item = 0; item <= 9; item++){
// 	console.log(item);
// }


// // var indPrice = 

// var subTotalPrice = function(x){
// 	return x.indPrice * x.quantity;
// }

// // var harry = items[8];

// for (item = 0; item < 9; item++){
// 	var harry = items[item];
// 	console.log(subTotalPrice(harry));
// }

// // subTotalPrice(harry);


