$(document).ready(function() {
  var Cat = function(name) {
    this.name = name;
  };

  Cat.prototype = {
    sound: "Meow!",
    isSleeping: false,
    goToSleep: function() {
      this.isSleeping = true;
      console.log(`isSleeping: ${this.isSleeping}`);
      displayLog("#logs", `isSleeping: ${this.isSleeping}`);
    },
    wakeUp: function() {
      this.isSleeping = false;
      console.log(`isSleeping: ${this.isSleeping}`);
      displayLog("#logs", `isSleeping: ${this.isSleeping}`);
    },
    talk: function() {
      console.log(`${this.name}: ${this.sound}`);
      displayLog("#logs", `${this.name}: ${this.sound}`);
    }
  };

  var kitty = new Cat("Mr. Fluffles");
  kitty.goToSleep();

  kitty.wakeUp();

  kitty.talk();
  console.log(kitty);
});

/*
  function Cat(name) {
      this.name
  }
*/

/*
  class Cat {
      constructor(name) {
          this.name = name;
          this.sound = "Meow!"
      }

      speak() {
          console.log(this.sound);
      }
    }
*/
