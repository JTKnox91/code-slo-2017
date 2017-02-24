// new Promise(function (resolve, reject) {
//   asyncFunc(value, function(err, value) {
//     if (err) {
//       reject(err);
//     } else {
//       resolve (value);
//     }
//   });
// });

var Promise = function (func) {
  this.value;
  this.err;
  this.next; //function to run when resoleved

  var resolve = function (value) {
    this.value = value;

    if (this.next !== undefined) {
      this.value = this.next(this.value);
    }
  }
  //invoke the function with resolve and reject args

};

Promise.prototype.then = function(func) {
  this.next = func;

  if (this.value !== undefined) {
    this.value = this.next(this.value)
  }

  return this;
};