chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getDOM") {
     var asd = document.getSelection ? document.getSelection() : document.selection.createRange().text;
     sendResponse({selected: "" + asd});
 }
 else
   sendResponse({}); // Send nothing..
});
