// render.js

window.data = [3,2,1];

var mainDiv = $("#main-div");

for(var i=0;i<window.data.length;i++) {
  mainDiv.append(window.data[i])
}

