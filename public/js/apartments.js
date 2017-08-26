$(document).ready(function(){


	$("#apt-search-btn").on("click", function() {
		// save the character they typed into the character-search input
		var searchedApartment = $("#apartment-search").val().trim();
		
			// replace any spaces between that character with no space
			// (effectively deleting the spaces). Make the string lowercase
			//searchedApartment  = searchedApartment .replace(/\s+/g, "").toLowerCase();
		
			// run an AJAX GET-request for our servers api,
			// including the user's character in the url
			$.get("/api/" + searchedApartment, function(data) {
				// log the data to our console
				console.log(data);
		
				// if the data is false (i.e. not there), then return an error message
				if(data === false) {
					$("#name").text("The force is not strong with this one. Your character was not found. ");
					// don't show the stats section, since there are no stats to show
					$("#stats").hide();
				} else {
					alert(data);
					// show the stats section
					// $("#stats").show();
					// // put the character name in the name tag,
					// $("#statsResults").append("<h2>" + data.name + "</h2>");
					// $("#statsResults").append("<h3>Role: " + data.role + "</h3>");
					// $("#statsResults").append("<h3>Age: " + data.age + "</h3>");
					// $("#statsResults").append("<h3>Force Points: " + data.forcePoints + "</h3>");
					// //$("#name").text(data.name);
					// // the role in the role tag,
					// $("#role").text(data.role);
					// // the age in the age tag,
					// $("#age").text(data.age);
					// // and the force points in the force-points tag
					// $("#force-points").text(data.forcePoints);
				}
			});
	});





	// this will be called when we need the details page
	//$(document).on("click", "button.detailsPageButton", sendInfoToDetailsPage(arrayOfAppartments));

	var arrayOfAppartments = [];

	//var  address = $('.address').val().trim();
	var city = $('#city').val().trim;
	//var state = $('.state').val().trim;
	// var zip = $('.zip').val().trim;
	// var lat = $('.lat').val().trim;
	// var long = $('.long').val().trim;
	// var image_url = $('.image_url').val().trim;
	//var queryURL = "/?";

	// query should look like this: 
	//var finalQuery = "/?address=" + address + "&city=" + city +"&state=" + state + "&zip=" + zip + "&lat=" + lat + "&long=" + long + "&image_url=" + image_url;
	var finalQuery = "sf";

	// this function will send search info to our database
	// and get the data back
	// once the data is received it will be in a json format (array of objects)
	// each object will represent one individual appartment that was listed. 
	// with that data we will create our div for display and once that is done we will insert our
	// new div into our front page. 
	var sendSearchInfo = function(finalQuery) {
		$.ajax(
			{
				method: "GET",
				url: "/api/" + finalQuery
			}
		).done(function(receivedArrayOfApartments) {

			//arrayOfAppartments = receivedArrayOfApartments;
			//  now use the data to post it for the user
			//  received data should be in a json format, array of objects
			//  each object will be a single appartment with information

			//   looping through the array of objects, and getting each object  
			// receivedArrayOfApartments.forEach(function(apartment){
			// 	var apartmentDetails = $('div');
			// 	// we will store the info in this div
			// 	//  add class to each small div if we want to do CSS styling later
			// 	apartmentDetails.addClass('appartmentDisplay');

			// 	apartmentDetails.append("<p>" + apartment.address + "</p>");
			// 	apartmentDetails.append("<p>" + apartment.city + "</p>");
			// 	apartmentDetails.append("<p>" + apartment.state + "</p>");
			// 	apartmentDetails.append("<p>" + apartment.zip + "</p>");
			// 	apartmentDetails.append("<p>" + apartment.lat + "</p>");
			// 	apartmentDetails.append("<p>" + apartment.long + "</p>");
			// 	// we will need to make sure we provide source for the image and insert an image
			// 	// not the url. how dinamically to add source apartmentDetails.addAttr('src', appartment.image_url);
			// 	apartmentDetails.append("<img class='aptImage' src=' " + apartment.image_url + " '>");


			// 	// here we will need to access the DIV from the front and insert our apartmentDetails DIV


		
			// })
			
		})
	};

	//"#apartmentSearch", sendSearchInfo(finalQuery));
	$( "#apartmentSearch" ).click(sendSearchInfo(finalQuery));

	$("#city").click(function(event) {
		event.preventDefault();
		var city = $('#city').val().trim;

		$.get("/api/:zip?", function(data) {
			//alert(data);
		})
	})


});