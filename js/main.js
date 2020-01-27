var years = [1995,1965, 1950, 1980, 1990];

function arrayCalc(arr, callback) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(callback(arr[i]));
        // console.log(arr[i]);

    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

let sumYears = function () {
    let totalAge = 0;
    let count = 0;
    let avg = 0;
    arrayCalc(years, function (obj) {
        totalAge = totalAge + obj;
        count++;

    });
    console.log(totalAge);
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
// var lul = arrayCalc(ages, sumYears);


console.log(ages);
console.log(rates);
console.log(fullAges);
sumYears();

// this is another callback function

// var a = [10,20,30,40]
// var sum = 0
// var avg = 0
// function sumUP(a) {
//    for (var i=0; i<a.length; i++){
//       sum += a[i];
//    }
//    avg = (sum/a.length);
// }
// function display(callback) {
//     callback(a);
//     console.log("Average of array is " + avg);
// }
// display(sumUP);
