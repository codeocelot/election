var Election = require('./election');

var Fptp = Object.assign(Election,{})

Fptp.prototype.crunch = function(){
  console.log('Bang@!')
}

module.exports = Fptp;
