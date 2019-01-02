import '../img/icon-34.png';
import '../img/icon-128.png';

//  Blocked urls
var urls = [];

//  Handle incoming connections
chrome.extension.onConnect.addListener(port => {
  //  Listen for a domain to block
  port.onMessage.addListener(url => {
    urls.push("*://*." + url + "/*")
    updateBlocks();
  });
});

function updateBlocks() {
  if (urls.length > 0)
    chrome.webRequest.onBeforeRequest.addListener(() => ({cancel: true}), {urls: urls}, ['blocking']);
}
