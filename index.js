// add solution here
function theBeatlesPlay ( musicians, instruments) {
  var sentences = [];
  for (let counter = 0; counter < musicians.length; counter ++){
    var sentence = musicians[counter] + ' plays ' + instruments[counter];
    sentences.push(sentence);
  }
  return sentences;
}
// var coolMusicians = [];
// var coolInstruments = [];
// var beatleFacts = theBeatlesPlay(coolMusicians, coolInstruments);
// console.log(beatleFacts);

function johnLennonFacts (facts) {
}
const facts = ["He was the last Beatle to learn to drive!!!",
  "He was never a vegetarian!!!",
  "He was a choir boy and boy scout!!!",
  "He hated the sound of his own voice!!!"];
