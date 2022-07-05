function findItemsOver20 (quantityCheck) {
    var results = [];
    for (let prop in quantityCheck) {
      if (quantityCheck[prop].qty > 20) {
     results.push(quantityCheck[prop]); 
      }   
    }
    return results;
  }
  
  function findItemsOver(quantityCheck, threshold) { 
    var results2 = [];
      for (let prop in quantityCheck) {
        if (quantityCheck[prop].qty > threshold) {
         results2.push(quantityCheck[prop]); 
        }
      } 
    return results2; 
  }
  