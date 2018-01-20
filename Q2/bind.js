//Instance, Definition, 'new', Hierarchy, Chain Properties, Dynamic

$(document).ready(function() {
  let cat = {
    sound: "Meow :3",
    speak: function() {
      displayLog("#logs", this.sound);
      console.log(this.sound);
    }
  };

  displayLog("#logs", "> cat.speak()");
  cat.speak(); // "Meow :3"

  let speakFunction = cat.speak;
  displayLog("#logs", "> speakFunction()");
  speakFunction(); // undefined

  let boundFunction = cat.speak.bind(cat);
  displayLog("#logs", "> boundFunction()");
  boundFunction(); // "Meow :3"


  var speak = function() {
    displayLog("#logs", this.sound);
    console.log(this.sound);
  }
  
  displayLog("#logs", "> speak()");
  speak();

  let speakNew = speak.bind(cat);
  displayLog("#logs", "> speakNew()");
  speakNew();

  let btnUnbnd = document.getElementById("catButtonUnBound");
  btnUnbnd.addEventListener("click", cat.speak);

  let btnBnd = document.getElementById("catButtonBound");
  btnBnd.addEventListener("click",cat.speak.bind(cat));


});
