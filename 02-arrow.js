// Tìm hiểu Arrow Function

let mang = [4, 6, 7, 9, 12];

// mang.forEach(function (e) {
//     console.log(e);
// });

mang.forEach(e => console.log(e));

// var mang2 = mang.map(function (e) {
//     return e * 2;
// });

var mang2 = mang.map(e => e * 3);
console.log(mang2);