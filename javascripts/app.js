var main = function() {
	"use strict";

	var makeTabActive = function (tabNumber) {
		// construct the selector from the tabNumber
		var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
		$(".tabs span").removeClass("active");
		$(tabSelector).addClass("active");
	};

	$(".tabs a:nth-child(1)").on("click", function () {
		// make all the tabs inactive
		makeTabActive(1);
		return false;
	});

	$(".tabs a:nth-child(1)").on("click", function () {
		// make all the tabs inactive
		makeTabActive(2);
		return false;
	});

	$(".tabs a:nth-child(1)").on("click", function () {
		// make all the tabs inactive
		makeTabActive(3);
		return false;
	});
};