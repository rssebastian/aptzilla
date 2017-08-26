// $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// $(document).load(function() {
// 	$(".carousel").hide();
//   // Run code
// });


$(document).ready(function() {
	$('.carousel').hide();
	$('.carousel').carousel({
				  interval: 2000
					});

	$("#apartmentSearch").on("click", function(event){
		event.preventDefault();
		$("#demoCards").hide();
		$(".carousel").show();
		$(".team").hide();
	});
	$("#searchForm").on("submit", function(event) {
		event.preventDefault();
	});
});