// render.js

window.data = [
{
  "date": "March 16",
  "day": "Monday",
  "desc":""
},
{
  "date": "March 15",
  "day": "Sunday",
  "desc":""
},
{
  "date": "March 14",
  "day": "Saturday",
  "desc":""
},
{
  "date": "March 13",
  "day": "Friday",
  "desc":`<p>A student from the US tests positive. Total 10 cases in Pune.</p>

<p>Coronavirus has been declared an epidemic in Mumbai, Navi Mumbai, Nagpur, Pune and Pimpri Chinchwad.</p>

<p>The move comes close on the heels of similar decisions being taken by the governments of Kerala, Delhi and Karnataka</p>

<p><a href="https://www.google.com/amp/s/www.livemint.com/news/india/coronavirus-maharashtra-orders-closure-of-malls-cinema-halls-in-five-cities-until-31-march/amp-11584102050561.html">View full report here</a></p>

<p>Different parents’ groups, Aam Admi Party (AAP) and transport owners want schools to shut down in the wake of more people testing positive for coronavirus in the city.</p>

<p><a href="https://m.timesofindia.com/city/pune/covid-19-in-pune-chorus-rises-to-cancel-exams-shut-down-schools/amp_articleshow/74604613.cms">View full report here</a></p>`
},
{
  "date": "March 12",
  "day": "Thursday",
  "desc":`<p>Three more cases of coronavirus were detected on Wednesday in Pune, with a total number of patients now standing at eight. Of the 51 people who were quarantined at Naidu hospital, following the first contact between the virus and city this week, two patients’ reports are inconclusive; the rest 48 results are awaited</p>

<p><a href="https://www.google.com/amp/s/punemirror.indiatimes.com/pune/civic/3-new-coronavirus-cases-with-51-in-quarantine-total-8-positive-in-pune/amp_articleshow/74582712.cms">View full report here</a></p>`
},
{
  "date": "March 11",
  "day": "Wednesday",
  "desc":`<p>More 5 have tested positive for the virus in Pune City.
Accenture in Blue ridge IT park was evacuated when the daughter of the couple that had returned from Dubai had tested positive.</p>

<p>The following information is provided by a reddit user who works at Accenture.
He gives clarity on the situation and to avoid rumours:</p>

<ol>
  <li>The Blue Ridge IT Park is in Hindjawadi Phase 2.</li>
  <li>As of March12 Blue Ridge IT Park is not closed down. Accenture is located in 3rd floor IT-01 building and it was temporary evacuated on March12 for deep cleaning. The remaining floors of the building as well as all 9 other buildings and common areas are still open… as of March12.</li>
  <li>The daughter who works at Accenture (of the couple from Dubai) has received a positive test result, however, she does not work for the Blue Ridge office. The cleaning was precautionary.</li>
</ol>

<p>As of March 12 the following measures are in place at Blue Ridge</p>

<ol>
  <li>All food handlers in Qubix are required masks</li>
  <li>All housekeepers and security staff are required to wear masks (not verified in all buildings!)</li>
  <li>Thermal scans of all employees entering the buildings</li>
  <li>Emergency stairwells are open to use instead of cramped elevators (not verified in all buildings!)</li>
  <li>Increased disinfecting of common surfaces like door handles, buttons, etc.</li>
</ol>

<p>Mass screening has started for testing people on Singhad road as the first cases were detected there.</p>

<p>After the cab driver that had tested positive yesterday for corona, Ola and Uber have issued a precaution regarding the pick up of passengers from the airport.
They are distributing sanitizers and masks to their drivers and ensuring safety of all the stakeholders.</p>

<p><a href="https://www.google.com/amp/s/www.businessinsider.in/business/startups/news/coronavirus-pandemic-heres-what-flipkart-zomato-swiggy-ola-uber-are-doing-for-delivery-agents-and-cabbies-who-cant-work-from-home/amp_articleshow/74589898.cms">View a news report here</a></p>`
},
{
  "date": "March 9-10",
  "day": "Monday-Tuesday",
  "desc":`<p>The first 2 cases of Corona Virus emerged and after further tests, total 5 are infectes with the virus in the city.
A couple, their and a cabby is infected. The couple had recently returned from Dubai.</p>

<p>Many schools in Singhad road are planned to shut for 2 days.
Authorities have warned traders to not take advantage of the situation by over pricing the masks and sanitizers.</p>

<p>A Report from the Pune Times website:-</p>

<p>In view of five persons testing positive for the coronavirus infection in Pune, three schools in Sinhgad Road area have decided to remain closed for the next two-three days. Nanded City School and Pawar Public School, located at Nanded city township, will remain shut till Saturday.</p>

<p>Total travellers quarantined in Pune: 12</p>

<p><a href="https://www.google.com/amp/s/m.timesofindia.com/city/pune/as-pune-couple-test-positive-for-covid-19-mayor-says-dont-panic/amp_articleshow/74561100.cms">View a news report here</a></p>`
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
   <div class=container-md>DESCRIPTION</div>
</div>`

for(var i=0;i<window.data.length;i++) {
  var outHtml = temp.replace("DAY", window.data[i].day).replace("DATE", window.data[i].date).replace("DESCRIPTION",window.data[i].desc)
  mainDiv.append(outHtml)
}

});
