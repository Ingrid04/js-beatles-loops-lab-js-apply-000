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
  var crazyFacts =[];
  var counter = 0;
  while (counter < facts.length) {
    crazyFacts.push(facts[counter] + '!!!');
    counter ++ ;
  }
  return crazyFacts;
}
// const peruFacts = ["Machu Picchu is one of the most beautiful mountains in Peru", "Paracas is a nice place to visit"];
// var peruCrazyFacts = johnLennonFacts(peruFacts);
// console.log(peruCrazyFacts);

function iLoveTheBeatles (n) {
  var love = [];
  var counter = n;
  do {
    love.push("I love the Beatles!");
    counter ++;
  } while (counter < 15);

  return love;
}

 var numberLove = iLoveTheBeatles(10);
 console.log(numberLove);
