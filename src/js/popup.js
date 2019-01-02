import "../css/popup.css";
var $ = require('jQuery');

/*
  Adding a blocked site
*/
$(".input").change(function(){
  $('.blocked-list').append('<li class="blocked-item"><span class="blocked-item--website">' + $(".input").val() + '</span>')
  $('.blocked-list').append('<span class="blocked-item--delete">X</span></li>')
  // $('.blocked-list').append('<i class="blocked-item--delete fas fa-times" onclick=""></i></li>')

  //  Validate the domain input is correct
  //  ""
  //  ""
  //  ""

  //  Clear the input field
  //  $(".input").val('')

  //  Establish connection with extension to send messages
  var port = chrome.extension.connect({
    name: "Content script"
  })

  //  Pass the blocked domain to extension
  port.postMessage($(".input").val());
});

/*
  Removing a blocked site
*/
$(".blocked-item--delete").click(function() {
  console.log("item is being deleted...")
})
