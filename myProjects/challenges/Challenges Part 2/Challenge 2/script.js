const calcTrip = function (bill) {
return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.20;
}

console.log (calcTrip(100));