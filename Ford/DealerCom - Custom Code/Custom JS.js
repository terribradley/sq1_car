// Rearrange Vehicle Search Result Listing Details
loadCheck();
function rearrangeElements() {
  $('.inventory-listing-default .inventoryList li.item.notshared').each(function() {
    $(this).find('a.dialog.video.ddc-btn-small').detach().insertAfter($(this).find('.last'));
    $(this).find('li.windowsticker.cbtn').detach().insertAfter($(this).find('a.dialog.video.ddc-btn-small'));
    $(this).find('.dialog.pointer.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.ddc-btn.ddc-btn-primary').detach().insertBefore($(this).find('.view-link'));
  });
}
function loadCheck() {
  if (window.$) {
    rearrangeElements();
  } else {
    console.log("jQuery not loaded yet. Checking again in half a second...");
    setTimeout(function(){ loadCheck(); }, 500);
  }
}