var header = document.getElementById("heading");
header.innerHTML = "Supercar Stats!";

var brandDrop = new Array(), carDrop = new Array(), brandElement = new Array(), carElement = new Array(), carTable = new Array(), altElement = new Array();
var a = 0;
// 0,1,2 - 3,4,5 - 6,7,8 - 9,10,11 - 12,13,14 
for (var i = 0; i < 5; i++) {
  brandDrop[i] = new BrandDropdown(i + 1);
  brandElement[i] = brandDrop[i].createDropdown(brands[i]);
}
for (var i = 0; i < 15; i++) {
  carDrop[i] = new CarDropdown(i + 1);
  carTable[i] = carDrop[i].statsTable("Top speed : " + speeds[i], "0-60 mph. : " + accelTimes[i], "¼ mile time : " + qtrMile[i], "Horsepower: " + horsepower[i], "Weight: " + weights[i], "Price: " + prices[i], null, facts[i]);
  switch (i) {
    case 1:
      carElement[i] = carDrop[i].createCarDropdown(cars[i], images[i], "Model year: " + modelYear[i], true);
      altElement[i] = carDrop[i].altDropdown("Chiron Super Sport 300+", images[15]);
      carElement[i].appendChild(altElement[i]);
      break;

    case 2:
      carElement[i] = carDrop[i].createCarDropdown(cars[i], images[i], "Model year: " + modelYear[i], true);
      altElement[i] = carDrop[i].altDropdown("16.4 Super Sport", images[16]);
      carElement[i].appendChild(altElement[i]);
      break;

    case 6:
      carElement[i] = carDrop[i].createCarDropdown(cars[i], images[i], "Model year: " + modelYear[i], true);
      altElement[i] = carDrop[i].altDropdown("Italian Police Huracan", images[18]);
      carElement[i].appendChild(altElement[i]);
      break;

    case 7:
      carElement[i] = carDrop[i].createCarDropdown(cars[i], images[i], "Model year: " + modelYear[i], true);
      altElement[i] = carDrop[i].altDropdown("Aventador J", images[17]);
      carElement[i].appendChild(altElement[i]);
      break;

    case 12:
      carElement[i] = carDrop[i].createCarDropdown(cars[i], images[i], "Model year: " + modelYear[i], true);
      altElement[i] = carDrop[i].altDropdown("DeLorean Future Concept", images[19]);
      carElement[i].appendChild(altElement[i]);
      break;

    default:
      carElement[i] = carDrop[i].createCarDropdown(cars[i], images[i], "Model year: " + modelYear[i], false);
  }
}
for (var i = 0; i < 5; i++) {
  brandElement[i].appendChild(carElement[a]);
  brandElement[i].appendChild(carElement[a + 1]);
  brandElement[i].appendChild(carElement[a + 2]);
  a = a + 3;
}