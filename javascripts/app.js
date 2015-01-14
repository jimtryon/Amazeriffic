var main = function() {
	"use strict";

	/*var tabNumber;

	for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
		var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";

		$(tabSelector).on("click", function() {
			$(".tabs span").removeClass("active");
			$(tabSelector).addClass("active");
			return false;*/
	$(".tabs a span").toArray().forEach(function (element) {
		// create a click handler for this element
		$(element).on("click", function () {
			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			return false;
		});
	});
};

/*var makeTabActive = function (tabNumber) {
	// construct the selector from the tabNumber
	var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
	$(".tabs span").removeClass("active");
	$(tabSelector).addClass("active");
};


};
*/