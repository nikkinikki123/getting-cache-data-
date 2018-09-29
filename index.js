var name;
var rollno;
var email;
var adress;
var skills;
var store;


var career;
var per;
var yop;
var sscValue;
var sscmks;
var sscmks1;
var sscradio;

var intermediate;
var intermks;
var intermks1;
var interper;
var interyops;
var interradio;

var btech;
var btechmks;
var btechmks1;
var btechper;
var btechyops;
var btechradio;
var bradio;
var btech;
var diploma;

function getDetails() {
  career=document.getElementById('career').value;
  sscValue=document.getElementById('sscValue').value;
  sscmks=document.getElementById('sscmks');
  sscmks1=document.getElementById('sscmks1');
  per=document.getElementById('sscpercent').value;
  yop=document.getElementById('sscyop').value;


  if(sscmks.checked) {
    sscradio=sscmks.value;

  }
  else {
    sscradio=sscmks1.value;

  }


  intermediate=document.getElementById('interm').value;
  intermks=document.getElementById('intermks');
  intermks1=document.getElementById('intermks1');
  interper=document.getElementById('per').value;
  interyops=document.getElementById('interyops').value;

  if(intermks.checked) {
    interradio=intermks.value;

  }
  else {
    interradio=intermks1.value;

  }

  btech=document.getElementById('btech').value;
  diploma=document.getElementById('diploma').value;
  btech=document.getElementById('bcse').value;
  btechmks=document.getElementById('btechmks');
  btechmks1=document.getElementById('btechmks1');
  btechper=document.getElementById('btechpercent').value;
  btechyops=document.getElementById('btechyop').value;

  if(btech.checked) {
    btechradio=btech.value;

  }
  else {
    btechradio=diploma.value;

  }

  if(btechmks.checked) {
    bradio=btechmks.value;

  }
  else {
    bradio=btechmks1.value;

  }


 console.log(career);
 console.log(sscValue+" "+sscradio+" "+per+" "+yop);
 console.log(intermediate+" "+interradio+" "+interper+" "+interyops);
console.log(btechradio+" "+btech+" "+bradio+" "+btechper+" "+btechyops);

   name=document.getElementById('name').value;
  rollno=document.getElementById('rollno').value;
  email=document.getElementById('email').value;
  adress=document.getElementById('adress').value;
  skills=document.getElementById('skills').value;
  console.log(name+" "+rollno+" "+email+" "+adress+" "+skills);

  if(!window.indexedDB){
    console.log("indexed DB is not working...!");
  }
  var request=window.indexedDB.open("svitDB",1);
  request.onerror=(e)=>{
    console.log(e);
  }
  request.onupgradeneeded=e=>{
    var dbname=e.target.result;
    dbname.createObjectStore("cse",{keyPath:"name"});
     console.log("upgraded....!");
  }
  request.onsuccess=e=>{
    var dbname=e.target.result;
    store=dbname.transaction("cse","readwrite").objectStore("cse");

    store.put(
        {
      "name":name,
       "rollno":rollno,
       "email":email,
       "adress":adress,
       "skills":skills,
       "career":career,
       "edudetails":{
         "ssc": [
           sscValue,
           sscradio,
           per,
           yop
         ],
         "inter": [
           intermediate,
           interradio,
           interper,
           interyops
         ],
         "btech": [
           btech,
           btechradio,
           bradio,
           btechpercent,
           btechyops
         ]


       }
       }
      );

    console.log("success...!");
  }
  localStorage.setItem("fname",name);
  window.open("resume.html","_self");

}
