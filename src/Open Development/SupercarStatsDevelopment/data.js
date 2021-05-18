var brands = [
  "Bugatti",

  "Ferrari",

  "Lamborghini",

  "McLaren",

  "Other"
];


// Make = brand
// Model = car

var cars = [
  "Divo",
  "Chiron",
  "Veyron",

  "Roma",
  "LaFerrari",
  "FXX K",

  "Huracan",
  "Aventador",
  "Countach",

  "P1",
  "Speedtail",
  "Spider",

  "DMC DeLorean",
  "Koenigsegg One:1",
  "Ford GT"
];


var images = [
  "images/Bugatti-Divo.png",
  "images/Bugatti-Chiron.png",
  "images/Bugatti-Veyron-16.4.png",

  "images/Ferrari-Roma.png",
  "images/LaFerrari.png",
  "images/Ferrari-FXX-K.png",

  "images/Lamborghini-Huracan.png",
  "images/Lamborghini-Aventador.png",
  "images/Lamborghini-Countach.png",

  "images/McLaren-P1.png",
  "images/McLaren-Speedtail.png",
  "images/McLaren-Spider.png",

  "images/DMC-Delorean.png",
  "images/Koenigsegg-One-1.png",
  "images/Ford-GT.png",

  "images/Chiron-Super-Sport-300.png",
  "images/Veyron-16.4-Super-Sport.png",

  "images/Aventador-J.png",
  "images/Huracan-Police.png",

  "images/Delorean-Concept.png"
]


var prices = [
  "$5.4 million",
  "$2.9 million",
  "$1.9 million",

  "$340,000",
  "$1.5 million",
  "$2.6 million",

  "$208,000",
  "$500,000",
  "$300,000",

  "$1.5 million",
  "$1.4 million",
  "$208,800",

  "$100,000",
  "$2.9 million",
  "$35,880"
];


var speeds = [
  "236 mph",
  "304 mph",
  "267 mph",

  "199 mph",
  "220 mph",
  "249 mph",

  "202 mph",
  "217 mph",
  "185 mph",

  "217 mph",
  "250 mph",
  "204 mph",

  "130 mph",
  "273 mph",
  "216 mph"
];


var accelTimes = [
  "2.4 sec.",
  "2.3 sec.",
  "2.5 sec.",

  "3.2 sec.",
  "2.4 sec.",
  "2.6. sec.",

  "2.9 sec.",
  "2.9 sec.",
  "5.3 sec.",

  "2.6 sec.",
  "2.9 sec.",
  "3.1 sec.",

  "9.6 sec.",
  "2.9 sec.",
  "2.9 sec."
];


var qtrMile = [
  "9.4 sec.",
  "9.4 sec.",
  "9.4 sec.",

  "11.2 sec.",
  "9.7 sec.",
  "9.7 sec.",

  "10.9. sec.",
  "10.3 sec.",
  "13.5 sec.",

  "9.8 sec.",
  "To Be Announced",
  "10.3 sec.",

  "14.7 sec.",
  "10.0 sec.",
  "To Be Announced"
]


var horsepower = [
  "1,459 bhp",
  "1,479 bhp",
  "1,184 bhp",

  "604 bhp",
  "936 bhp",
  "836 bhp",

  "621 bhp",
  "749 bhp",
  "434 bhp",

  "903 bhp",
  "1,036 bhp",
  "570 bhp",

  "130 bhp",
  "1,360 bhp",
  "460 bhp"

]


var weights = [
  "2.16 tons (4,323 lbs.)",
  "2.18 tons (4,359 lbs.)",
  "2.02 tons (4,044 lbs.)",

  "1.73 tons (3,461 lbs.)",
  "1.75 tons (3,494 lbs.)",
  "1.28 tons (2,568 lbs.)",

  "1.57 tons (3,135 lbs.)",
  "1.81 tons (3,615 lbs.)",
  "1.32 tons (2,646 lbs.)",

  "1.54 tons (3,075 lbs.)",
  "1.58 tons (3,153 lbs.)",
  "1.50 tons (3,016 lbs.)",

  "1.4 tons (2,718 lbs.)",
  "1.48 tons (2,954 lbs.)",
  "1.85. tons (3,705 lbs.)"
]


var facts = [
  "As is with many of Bugatti's newest models, the design is slightly similar to one of the earlier types of cars Bugatti made.",
  "A special version of the Chiron Super Sport 300+ model broke a world record for land speed in a production automobile in 2019.",
  "One special model of the Veyron was the 16.4 Super Sport. It set a world record for land speed in a production automobile in 2010.",

  "The key to this car is a key fob that communicates to the car to allow the dirver to start the car. The design of the small, square key is the Ferrari logo.",
  "This car was one of the first super/sports cars to be built with an electric/gas hybrid motor. It is also rear wheel drive, while many other high-end racing cars are four-wheel drive.",
  "This car is the result of extensive research and development on the LaFerrari model. It has been redesigned to improve its performance on tracks by removing as much weight as possible.",

  "The Italian police force use special models of the Lamborghini Huracan as patrol cars. There is a compartment in the front that can be used to hold organs needing to be transported quickly.",
  "Similar to te Huracan, the Aventador has many different versions, ranging from the SVJ, a performance focused style, to the roofless Aventador J with a suprising amount of power packed into it.",
  "The name comes from a swear word, exclaimed by the head of the Bertone design house when first seeing the car's design for the first time.",

  "There were 21 prototypes of the P1 sold before official production began. There are so many different customizable configurations of the P1 that McLaren offers that no two P1s have been built the same.",
  "There is a certian driving mode called Velocity mode, which is activated by a button in the roof of the cabin. This mode must be used in order to achieve the 250 mph top speed.",
  "The name 'Spider' is given to roofless or convertable McLaren model. This specific model shown and analyzed is the 720S. Other models include the 600LT, GT, and the concept model 570S.",

  "Its not really a supercar... DMC started development on an electric model of the DeLorean in 2012, but results of the finished car have yet to be released.",
  "The name comes from the unique achievement of the worlds first car with a 1:1 weight to power ratio. The exact amount is 1,360 kg weight to 1,360 bhp of power.",
  "The 2020 GT has been extremely engineered for top perfromance: the body is the first carbon fiber body produced by Ford, the suspension puts the car extremely close to the ground, the tailights haveb even been hollowed out in the center to minimize drag."
];


var modelYear = [
  "2020",
  "2018",
  "2012",

  "2021",
  "2014",
  "2017",

  "2014",
  "2011",
  "1974",

  "2013",
  "2018",
  "2020",

  "1981",
  "2014",
  "2020"
];