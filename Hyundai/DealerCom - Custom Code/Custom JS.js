
// ALL PAGES ----------------------------------------//

// add map div above footer
$('<a href="http://www.beavertonhyundai.com/dealership/directions.htm"><div id="map-canvas"></div></a>').insertBefore('.ddc-footer');


// HOME PAGE ------------------------------------------//

// Add new article header to home page
$(document).ready(function() {
  $('<span>Portland’s #1 Hyundai Dealership</span>').insertAfter('.ddc-content.content-default .h1.ddc-heading-1 span');
});


// NEW & PRE-OWNED INVENTORY SEARCH PAGES -----------//

// Vehicle Search Results
$( document ).ready(function() {
	$("body").addClass("sq1-vsr");
});

// Moves Price filter above Year filter
$($('.ddc-content.ddc-box-1.facetlist.facetlist-internetPrice.panel.panel-default').detach()).prependTo('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-year.panel.panel-default)');

// Moves Price filter above Condition filter
$($('.ddc-content.ddc-box-1.facetlist.facetlist-internetPrice.panel.panel-default').detach()).prependTo('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-compositeType.panel.panel-default)');

// Vehicle Detail Pages -----------------------------//
$( document ).ready(function() {
	$("body").addClass("sq1-vdp");
});


// DIRECTIONS PAGE ------------------------------------//

// Adds class to body to hide google map with css
$('body').addClass('directions');


// MOBILE SITE ---------------------------------------//

// Inserts map div above footer
$('<a href="http://www.beavertonhyundai.com/dealership/directions.htm"><div id="map-canvas"></div></a>').insertBefore('.third-party-service-footer');


// Moves Price filter above Year Filter
$($('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-internetPrice.panel.panel-default) ').detach()).insertBefore('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-year.panel.panel-default)');

// Moves Price filter back above Year filter after resetting filters
$( document ).ajaxComplete(function() {
  $($('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-internetPrice.panel.panel-default) ').detach()).insertBefore('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-year.panel.panel-default)');
});

// Moves Price filter above Condition filter
$($('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-internetPrice.panel.panel-default) ').detach()).insertBefore('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-compositeType.panel.panel-default)');


// Moves Price filter back above Condition filter after resetting filters
$( document ).ajaxComplete(function() {
  $($('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-internetPrice.panel.panel-default) ').detach()).insertBefore('.facetmulti-fieldset:has(.ddc-content.ddc-box-1.facetlist.facetlist-compositeType.panel.panel-default)');
});
