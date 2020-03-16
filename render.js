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
  "desc":""
},
{
  "date": "March 12",
  "day": "Thursday",
  "desc":""
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

<p><a href="https://www.google.com/amp/s/m.timesofindia.com/city/pune/as-pune-couple-test-positive-for-covid-19-mayor-says-dont-panic/amp_articleshow/74561100.cms">View a news report here</a></p>

<p>Here is a message from Pawar Public School, Hingewadi to thier stakeholders:</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Pawar Public School (Hinjewadi)

Date: 11th March 2020
In wake of the corona virus outbreak, Pawar Public School, Hinjewadi has decided to take a precautionary measure of keeping the school closed for the students from 12th March 2020 (Thursday) till 31st March 2020.  The examinations which were to be conducted on Friday, 13th March 2020 (Computer for class 9, Sanskrit and Art for classes 6 to 8, Computer and Art for class 5, Computer for classes 1 to 4) stand cancelled.  The students will be allotted average marks for the same.  

The report day shall be on 21st March 2020 as scheduled.  Parents are requested to not bring along their ward/s to the school on that day.

The orientation for the parents that was earlier scheduled on 21st March 2020 is now postponed to 4th April 2020. The general orientation will be at 8 am thereafter the class orientation will be conducted.

The uniform vendor will be present in the school as scheduled earlier i.e  22nd March 2020, 28th March 2020 and 29th March 2020 from 10 am to 2 pm. 

Aadhar card camp will remain as scheduled on 13th March from 11:00 am to 5:00 pm. Students will be accompanied by their parents.

The book vendor will be present in the school as scheduled earlier on 22nd March 2020 and 29th March 2020 from 10 am to 2 pm.

The students are to report to the school directly on 1st April 2020 for the new academic session. 

Regards,
PPSH
</code></pre>`
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
   DESCRIPTION
</div>`

for(var i=0;i<window.data.length;i++) {
  var outHtml = temp.replace("DAY", window.data[i].day).replace("DATE", window.data[i].date).replace("DESCRIPTION",window.data[i].desc)
  mainDiv.append(outHtml)
}

});
