//bronnen: https://www.javascripture.com/EventListener, https://tubemint.com/hamburger-menu-html-css-javascript/, https://stackoverflow.com/questions/6799533/how-to-submit-a-form-with-javascript-by-clicking-a-link



  //hamburger menu mobiel
  
function open_the_hamburger(){ //functie om menu te openen wordt aangemaakt
   var get_menu=document.querySelector("nav"); //var die ervoor zorgt dat er iets gedaan wordt met het element in de html met id nav_list
   get_menu.classList.toggle("menu_open"); //zorgt ervoor dat er een class wordt toegevoegt als de variabelen wordt aangeroepen
   
}

var open_it = document.querySelector(".hamburger_button"); //zorgt ervoor dat wanneer er iets gebeurd met de class hamburger_button

  open_it.addEventListener('click', open_the_hamburger); //zorgt ervoor dat wanneer er op het hamburgermenu wordt geclickt de functie wordt aangeroepen


//search mobile
function activate_search(){  
  var open_search=document.querySelector("header");
  open_search.classList.toggle("search_open");
}

var search_it = document.querySelector(".zoekbalk");
search_it.addEventListener('click', activate_search);



//formulier

//function validateForm() {
 // var x = querySelector.forms["myForm"]["voornaam"].value;
 //   if (x == "") {
 //       alert("Name must be filled out");
 //       return false;
 //   }
//}

//var submit_form=document.querySelector(".knoppen_landingspage");
//submit_form.addEventListener('click', validateForm);



//

//bookmark

function opgeslagen_leeslijst(){
  var opgeslagen=document.querySelector("#bookmark_leeg");
      opgeslagen.classList.toggle("gevuld");
}

 // var vullen=document.querySelector(".bookmark");
  //vullen.addEventListener('click', opgeslagen_leeslijst);

  document.querySelector(".bookmark").addEventListener('click', opgeslagen_leeslijst);
   



//knoppen onder artikel

function opgeslagen_aanbeveling(){
    var knop_ingedrukt = document.querySelector(".knoppen_onder_artikel");
      knop_ingedrukt.classList.toggle("aanbevolen");
}

var knop_aanbevolen=querySelector(".ja_knop");
knop_aanbevolen.addEventListener('click', opgeslagen_aanbeveling);

function opgeslagen_aanbeveling2(){
  var knop_ingedrukt = document.getElementById('knop2');
  knop_ingedrukt.classList.toggle("aanbevolen");
}



