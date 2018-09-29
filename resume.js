

var firstname=localStorage.getItem("fname");






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
  var data=store.get(firstname);
  console.log(data);
  data.onsucess=e=>{
    var res=e.target.result;
    console.log(res);
    var main=document.getElementById("main");
    var left=document.createElement("div");
    left.classList.add("leftDiv");
    var dname=document.createElement("hr");
    dname.textContent=res.name;
    left.appendChild(dname);
    main.appendChild(left);
    var hr=document.createElement("hr");
    left.appendChild(hr);
    var roll=document.createElement("p");
    roll.textContent=res.rollno;
    left.appendChild(roll);
    var email=document.createElement("p");
    email.textContent=res.email;
    left.appendChild(email);




    var right=document.createElement("div");
    right.classList.add("rightDiv");
   var career=document.createElement("p");
     career.textContent=res.career;
    right.appendChild(career);
    main.appendChild(right);
    var hr=document.createElement("hr");
    right.appendChild(hr);




  }

  console.log("success...!");
}
