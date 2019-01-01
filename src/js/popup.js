import "../css/popup.css";
var $ = require('jQuery');

/*
  Adding a blocked site
*/
$(".input").change(function(){
  $('.blocked-list').append('<li>' + $(".input").val() + '</li>')

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
