var Election = require('../fptp');
var assert = require('assert')


describe('election constructor',()=>{
  it('should create a valid election',()=>{
    var candidates = ['A','B','C']
    var election = new Election(candidates);
    var key = 1, value = 'A';
    election.vote(key,value);
    assert(election.votes && election.votes['A'] === 1);
  })
})

describe('an election',()=>{
  it('in small pop, should return winner',()=>{
    var candidates = ['A','B','C']
    var election = new Election(candidates);
    election.vote(1,'A');
    election.vote(2,'B');
    election.vote(3,'A');
    assert(election.votes['A'] === 2 );
    election.crunch();
  })
})
