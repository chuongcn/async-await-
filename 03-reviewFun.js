let arrNumber = [4, 5, 9, 8, 12];

// arrNumber.forEach(function (e) {
//     console.log(e);
// });

// arrNumber.forEach(e => console.log(e));

// 1 function có thể là tham số của function khác
var nhan2 = e => e * 2;

var arrNumber2 = arrNumber.map(nhan2);
// console.log(arrNumber2);


// 1 function có thể trả về 1 function
let getFunction = (num) => {
    if (num >= 0) return () => console.log('Số dương');
    return () => console.log('Số âm');
}

getFunction(-1)();

// 1 function ko có câu lệnh return sẽ trả về undefined

let functionA = () => {}

console.log(functionA());