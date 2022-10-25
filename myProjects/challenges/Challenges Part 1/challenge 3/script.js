
let firstTimeDolphins = 97//Number(prompt("Please, enter with a first Dolphins's note")) ;
let secondTimeDolphins = 85//Number(prompt("Please, enter with a second Dolphins's note"));
let thirdTimeDolphins = 99// Number(prompt("Please, enter with a third Dolphins's note"));

let firstTimeKoalas = 92//Number(prompt("Please, enter with a first Koalas's note")) ;
let secondTimeKoalas = 92  //Number(prompt("Please, enter with a second Koalas's note")) ;
let thirdTimeKoalas = 99//Number(prompt("Please, enter with a third Koalas's note")) ;

const averageDolphins = (firstTimeDolphins + secondTimeDolphins + thirdTimeDolphins) / 3 ;
const averageKoalas = ( firstTimeKoalas + secondTimeKoalas + thirdTimeKoalas) / 3 ;
console.log(`The Dolphin's average is ${averageDolphins} and the Koalas's average is ${averageKoalas}.`);

/*ORIGUNAL CHALLENGE

if (averageDolphins === averageKoalas) {
    console.log("We have a draw, congrats both teams!");
} else if (averageDolphins > averageKoalas) {
    console.log("The winner is Dolphins's Team, congrats!!");
} else {
    console.log ("The winner is the Koalas's Team !");
}*/

//BÔNUS I e II
if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100){
    console.log("We have a draw, congrats both teams!");
} else if (averageDolphins >= 100 && averageDolphins > averageKoalas) {
    console.log("The winner is Dolphins's Team, congrats!!");
} else if ( averageKoalas >= 100 && averageKoalas > averageDolphins){
    console.log("The winner is Koala's Team, congrats!!");
} else console.log("Oh, no team wins the trophy, anyone get at least 100 points of average. :(")


