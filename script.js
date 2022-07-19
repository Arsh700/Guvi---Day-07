/* Person class to hold all details */

// class person{

//     constructor(firstName, lastName, age, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.dob= dob;
// }

// getDetails(){

//     console.log(`My name is ${this.firstName} ${this.lastName} and my age ${this.age} - DOB ${this.dob}`)
// }


// }

// var getDetails = new person('Mohamed','Arsath',26,'04/09/1996');

// getDetails.getDetails();

/* Class to calculate the uber price */

// The Uber Fare Construct

// Base Fare : this is the flat fee that Uber charges for each ride, 
// it varies according to the car category UberX, Uber Black, SUV, etc.

// Cost per Minute : This is what Uber charges for every minute from the 
// moment the ride begins. It takes into account traffic and other circumstances that can cause a ride to take longer than expected.

// Cost per Mile : This is what Uber charges for every mile drive. Drivers
//  usually take the fastest route, but when traffic or other instructions 
//  are foreseen, they will choose a different route. Uber charges for the shortest distance in a pre-quote fare.

// Booking Fee : This is an extra fee that Uber charges to cover its operational 
// costs. It is not included in Uber Black and SUV fares.

// Surge Price : This is an additional multiplier that is added when there is a lot of
//  strain in the system, basically a supply and demand function. So if you are in a surge 
//  area, your overall fee can multiply by up to x3.

// Tipping : This is purely optional, while there is an Uber tipping platform, 
// the passenger can give the driver cash at their discretion.

// The Fare is calculated like this:

// Base Fare + ((Cost per minute x time of the ride) + (cost per mile x ride distance) 
// x surge boost multiplier) + booking fee = Passengers Ride Fare
// Minimum Fare

// There is a minimum fare rate that is set to assure a certain level of income for the
//  Uber driver. This varies per city and is based on the above calculation being no lower 
//  than the minimum fee. If the total is lower, then you will be charged the minimum price.


// class uberPrice{
    
//     constructor(baseType,CostperMinute, costperMile, bookingFee, surgePrice, timeoftheRide,rideDistance){
//     this.baseType = baseType;
// this.CostperMinute = CostperMinute;
// this.timeoftheRide = timeoftheRide;
// this.costperMile = costperMile;
// this.rideDistance = rideDistance;
// this.surgePrice=surgePrice;
// this.bookingFee = bookingFee;
// }

// calculation(){

// switch (this.baseType.toLowerCase()) {
//     case 'uberx':
//         return 100;
//     case 'uber black':
//         return 120;
//     case 'suv':
//         return 150; 
//         default:
//             console.log('Please enter the valid vehicle type');
            
// }
// var PassengersRideFare = this.baseType + ((this.CostperMinute * this.timeoftheRide) + (this.costperMile * this.rideDistance) 
// * this.surgePrice) + this.bookingFee; 

// return PassengersRideFare;
    
// }

// }


// let ride1 = new uberPrice('uberx',10,30,35,45,25,10);

// console.log(ride1.calculation());

class Movie {

constructor(title,studio,rating){
  
    rating = 'PG'+rating;
    this.title = title;
    this.studio = studio;
    this.rating = rating;

  
}

getPG(movie){
movie = this.title;
movie.forEach(element => {
    console.log(`${element} studio is ${this.studio} and rating is ${this.rating}` )
});

}


}

var result = new Movie(['Anjaan','Billa','John wick'],"AGS Cinimas"," ");

result.getPG()