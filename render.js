// render.js

window.data = [
{
  "date": "March 9-10",
  "day": "Monday",
  "desc":""
},
{
  "date": "March 11",
  "day": "Monday",
  "desc":""
}
];

$(document).ready(function() {
      var mainDiv = $("#main-div");

var temp = `<br>
<div class="d-flex flex-column flex-md-row flex-items-center flex-md-items-center">
  <div class="col-12 col-md-10 d-flex flex-column flex-justify-center flex-items-center flex-md-items-start pl-md-4">
    <h1 class="text-normal lh-condensed">DATE</h1>
    <p class="h4 text-gray text-normal mb-2">DAY</p>
  </div>
</div>`

for(var i=0;i<window.data.length;i++) {
  var outHtml = temp.replace("DAY", window.data[i].day).replace("DATE", window.data[i].date)
  mainDiv.append(outHtml)
}

});
