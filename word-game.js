function longestWord (message) {
    var splitMessage = message.split(" "); 
     //console.log(splitMessage); 
    var counter = 0;
    var word = null;
     
     for (var i=0; i<splitMessage.length; i++) {
       //console.log(splitMessage[i]); 
       if (splitMessage[i].length >= counter) {
        counter = splitMessage[i].length;
         //console.log(counter); 
         word = splitMessage[i];
         //console.log(splitMessage); 
       }
     }
   return word;
   }
   //console.log(longestWord('The dog jumped over the shipyard fence'));
   //console.log(longestWord('The yellow dog barked loud')); 
   
   
   function shortestWord (message) {
    var splitMessage1 = message.split(" "); 
    var shortestWord = splitMessage1[0];
   
     for (var i=0; i<splitMessage1.length; i++) {
       console.log(splitMessage1[i]); 
      if (splitMessage1[i].length <= shortestWord.length) {
      shortestWord = splitMessage1[i];
      }
     }
     return shortestWord;
   }
   //console.log(shortestWord('The dog jumped over the shipyard fence')); 
   
   
   function wordLengths (message) {
    var splitMessage2 = message.split(" ");
    var length = 0; 
     
     for (var i=0; i<splitMessage2.length; i++) {
       var string = splitMessage2.join(''); 
       //console.log(string);
     }
    return string.length;
   }
   //console.log(wordLengths('The dog jumped over the shipyard fence')); 