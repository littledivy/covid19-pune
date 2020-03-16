// render.js

window.data = [3,2,1];

var mainDiv = $("#main-div");

for(var i=0;i<window.data.length;i++) {
  mainDiv.append(window.data[i])
}

var temp = `<br>
<div class="d-flex flex-column flex-md-row flex-items-center flex-md-items-center">
  <div class="col-12 col-md-10 d-flex flex-column flex-justify-center flex-items-center flex-md-items-start pl-md-4">
    <h1 class="text-normal lh-condensed">DATE</h1>
    <p class="h4 text-gray text-normal mb-2">DAY</p>
  </div>
</div>`
