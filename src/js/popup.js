import "../css/popup.css";
var $ = require('jQuery');

/*
  Use Chrome background page to store HTML session
*/
chrome.runtime.getBackgroundPage(bg => {
  //  Get previous session
  if(bg.sessionDataHTML){
    document.body.innerHTML = bg.sessionDataHTML;
  }
  //  Update the session to include changes
  setInterval(function(){
    bg.sessionDataHTML = document.body.innerHTML
  },1000);

  /*
    Adding a blocked site
  */
  $(".input").change(() => {
    $('.blocked-list').append('<li class="blocked-item"><p class="blocked-item--website">' + $(".input").val() + '</p></li>')
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

})
