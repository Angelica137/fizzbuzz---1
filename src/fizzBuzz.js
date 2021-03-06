var Fizzbuzz = function(){};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Fizzbuzz.prototype.says = function(number) {
  if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }
};