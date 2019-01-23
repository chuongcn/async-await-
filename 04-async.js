// Javascript là 1 ngôn ngữ bất đồng bộ

setTimeout(() => {
    // console.log('Đã hết 1s');

}, 1000);

// console.log('Kết thúc');

// READFILE là bất đồng bộ
let fs = require('fs');
// fs.readFile('./text2.txt', 'utf8', (err, data) => {
//     if (err) return console.log('Lỗi rồi ' + err);
//     console.log('DỮ LIỆU: ' + data);

// })

// READFILESYNC ->ĐỒNG BỘ   

let data = fs.readFileSync('./text.txt', 'utf8')
console.log(data);



console.log('KẾT THÚC!!!!');