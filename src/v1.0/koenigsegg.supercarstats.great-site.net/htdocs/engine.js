var car = new Array(), carElement = new Array(), carTable = new Array(), altElement = new Array();
var carData = new Array();
for(i = 0; i < 3; i++){
carData[i] = [speeds[i], accelTimes[i], qtrMile[i], horsepower[i], weights[i], prices[i], facts[i], cars[i], images[i], modelYear[i]];
}
for (var i = 0; i < 3; i++) {
    car[i] = new Car(i + 1);
    carTable[i] = car[i].statsTable("Top speed : " + carData[i][0], "0-60 mph. : " + carData[i][1], "¼ mile time : " + carData[i][2], "Horsepower: " + carData[i][3], "Weight: " + carData[i][4], "Price: " + carData[i][5], carData[i][6]);
      carElement[i] = car[i].createCar(carData[i][7], carData[i][8], "Model year: " + carData[i][9]);
    document.getElementById("main").appendChild(carElement[i]);
}