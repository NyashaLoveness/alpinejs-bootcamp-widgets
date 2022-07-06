var cars = [ {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CL 61045"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 16875"
  },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CK 32655"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "EcoSport",
    "reg_number": "CL 11318"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CJ 16103"
  },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CL 42789"
  },  {
    "color": "blue",
    "make": "Volkswagen",
    "model": "Jetta",
    "reg_number": "CA 46977"
  },  {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CY 25661"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CY 35475"
  },  {
    "color": "white",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CY 54886"
  },  {
    "color": "white",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CJ 16455"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 57166"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CL 77790"
  },  {
    "color": "blue",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CY 98904"
  },  {
    "color": "white",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CF 75599"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CA 5510"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Focus",
    "reg_number": "CF 75586"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CA 46137"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CK 22692"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CF 33543"
  },  {
    "color": "red",
    "make": "Volkswagen",
    "model": "Touran",
    "reg_number": "CA 94890"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 82252"
  },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Yaris",
    "reg_number": "CL 9538"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CF 62002"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CJ 67577"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CA 77852"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CY 52435"
  },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CL 76173"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CL 38315"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CA 34015"
  }, {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 41166"
  }]
  
  
  //Question 8
  function carsForTown(townname) {
    function nameOfTown(name) {
        switch(name) {
        case 'CJ': return 'Paarl';
          break;
        case 'CY': return 'Bellville';
          break;
        case 'CF': return 'Kuilsriver';
          break;
          case 'CL': return 'Stellenbosch';
          break;
          case 'CK': return 'Malmesbury';
          break;
          case 'CA': return 'Cape Town';
          break;   
                 }
    }
    
    var arrCar = [];
   for (let prop in cars) {
       var carReg = cars[prop].reg_number.substring(0,2);
         var name = nameOfTown(carReg);
             if (name == townname) {
              arrCar.push(cars[prop]);
     }
   }
    return arrCar;
  }
  //console.log(carsForTown('Malmesbury')); 
  
  //Question 9
  function numberOfCars (carColor, townName) {
    function nameOfTown(name) {
        switch(name) {
        case 'CJ': return 'Paarl';
          break;
        case 'CY': return 'Bellville';
          break;
        case 'CF': return 'Kuilsriver';
          break;
        case 'CL': return 'Stellenbosch';
          break;
        case 'CK': return 'Malmesbury';
          break;
        case 'CA': return 'Cape Town';
          break;   
                 }
    }
    //all cars for specific color and specific town 
    var arrCar = [];
   for (let prop in cars) {
       var carReg = cars[prop].reg_number.substring(0,2);
         var name = nameOfTown(carReg);
             if (name == townName && cars[prop].color == carColor) {
              arrCar.push(cars[prop]);
      }
    }
      return arrCar;
  }
  /*console.log(numberOfCars('blue', 'Cape Town'));
  console.log(numberOfCars('red', 'Paarl'));*/
  
  //Question 10
  function numberOfCarsPerModel(carColor, carModel, townName) {
       function nameOfTown(name) {
        switch(name) {
        case 'CJ': return 'Paarl';
          break;
        case 'CY': return 'Bellville';
          break;
        case 'CF': return 'Kuilsriver';
          break;
        case 'CL': return 'Stellenbosch';
          break;
        case 'CK': return 'Malmesbury';
          break;
        case 'CA': return 'Cape Town';
          break;   
                 }
    }
    var arrCar = [];
    for (let prop in cars) {
        var townCode = cars[prop].reg_number.substring(0,2); 
      var nameTown = nameOfTown(townCode); 
      if (nameTown == townName && carModel == cars[prop].model && carColor == cars[prop].color) {
          arrCar.push(cars[prop]); 
      }
    }
    return arrCar;  
  }
  /*console.log(numberOfCarsPerModel('orange','Hilux','Bellville'));*/
  
  