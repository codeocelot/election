var Election = function(candidates){
  this.candidates = candidates;
  this.votes = {};
}

Election.prototype.vote = function(id,candidate){
  debugger;
  if(this.candidates && !this.candidates.indexOf(candidate) !== -1){
    if(!this.votes[candidate]){
      this.votes[candidate] = 1
      debugger;
    } else {
      this.votes[candidate]++;
      debugger;
    }
  } else {
    throw new Error(`invalid candidate ${candidate} selected`);
  }
}

module.exports = Election;
