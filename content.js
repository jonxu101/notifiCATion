// alert("content is working!");
// var port = chrome.runtime.connect({name:"mycontentscript"});
// port.onMessage.addListener(function(message, sender, sendResponse){
//     sendResponse("message received!");
//     alert(message.cmd);
//     if(message.cmd == "addcatnow"){
//         var cat = document.createElement("IMG");
//         cat.setAttribute("src", "https://i.ibb.co/x2nthSd/dowork.png");
//         cat.style.position = 'fixed';
//         cat.style.right = 0;
//         cat.style.bottom = 0;
//         cat.style.height = '300px';
//         cat.style.zIndex=1000000;
//         document.body.appendChild(cat);
//     }
// });
// var randomX = function(){
//   var max_width = 1920.0;
//   return Math.floor( Math.random() * max_width );
// };
// var randomY = function(){
//     var max_width = 1080.0;
//     return Math.floor( Math.random() * max_height );
// };
var logo = "https://i.ibb.co/x2nthSd/dowork.png";
var cat1 = "https://i.ibb.co/74b4HFG/cat1.png";
var cat2 = "https://i.ibb.co/z7YjMBG/cat2.png";
var cat3 = "https://i.ibb.co/zXGw86f/cat3.png";
var cat4 = "https://i.ibb.co/vJz83ZW/Untitled20-20210124151312.png";
var cat5 = "https://i.ibb.co/SR8XPgv/Untitled22-20210124171039-1.png";

const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

var randomX = function(){
  return Math.floor(Math.random()*(width)-150)+'px';
}

var randomY = function(){
  return Math.floor(Math.random()*(height)-150)+'px';
}

chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
      if (msg.function == 'addcat1now') {
        var cat = document.createElement("IMG");
        cat.setAttribute("src", cat1);
        cat.style.position = 'fixed';
        cat.style.left = randomX();
        cat.style.top = randomY();
        cat.style.height = '300px';
        cat.style.zIndex=2147483647;
        document.body.appendChild(cat);
      }else if (msg.function == 'addcat2now') {
        var cat = document.createElement("IMG");
        cat.setAttribute("src", cat2);
        cat.style.position = 'fixed';
        // cat.style.right = 0;
        // cat.style.bottom = 0;
        cat.style.left = randomX();
        cat.style.top = randomY();
        cat.style.height = '300px';
        cat.style.zIndex=2147483647;
        document.body.appendChild(cat);
      }else if (msg.function == 'addcat3now') {
        var cat = document.createElement("IMG");
        cat.setAttribute("src", cat3);
        cat.style.position = 'fixed';
        // cat.style.right = 0;
        // cat.style.bottom = 0;
        cat.style.left = randomX();
        cat.style.top = randomY();
        cat.style.height = '300px';
        cat.style.zIndex=2147483647;
        document.body.appendChild(cat);
      }else if (msg.function == 'addcat4now') {
        var cat = document.createElement("IMG");
        cat.setAttribute("src", cat4);
        cat.style.position = 'fixed';
        // cat.style.right = 0;
        // cat.style.bottom = 0;
        cat.style.left = randomX();
        cat.style.top = randomY();
        cat.style.height = '300px';
        cat.style.zIndex=2147483647;
        document.body.appendChild(cat);
      }else if (msg.function == 'addcat5now') {
        var cat = document.createElement("IMG");
        cat.setAttribute("src", cat5);
        cat.style.position = 'fixed';
        // cat.style.right = 0;
        // cat.style.bottom = 0;
        cat.style.left = randomX();
        cat.style.top = randomY();
        cat.style.height = '300px';
        cat.style.zIndex=2147483647;
        document.body.appendChild(cat);
      }
    });
  });