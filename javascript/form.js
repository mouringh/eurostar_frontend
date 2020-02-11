function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validateForm() {
  var x = querySelector.forms["myForm"]["voornaam"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function opgeslagen_leeslijst(){
  var opgeslagen = document.getElementById('laptop');
      opgeslagen.classList.toggle("gevuld");
}

function opgeslagen_aanbeveling(){
      var knop_ingedrukt = document.getElementById('knop');
      knop_ingedrukt.classList.toggle("aanbevolen");
}

function opgeslagen_aanbeveling2(){
  var knop_ingedrukt = document.getElementById('knop2');
  knop_ingedrukt.classList.toggle("aanbevolen");
}

function active_link(){
  var underline = document.getElementById('a_active');
  underline.classList.toggle("active");
}

