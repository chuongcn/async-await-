// truyền tham số và tái sử dụng Promise -> viết 1 func và func đó return ra 1 promise

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error("Tham số phải là kiểu number"));
            }
            resolve(a + b);
        }, 2000);
    });
}

// add(4, '5')
//     .then(result => console.log(result), err => console.log(err.toString()))

let fs = require('fs');

// let promiseReadFile = new Promise((resolve, reject) => {
//     fs.readFile('./text2.txt', 'utf8', (err, data) => {
//         if (err) return reject(new Error('KHÔNG TÌM THẤY FILE ĐỂ ĐỌC'));
//         resolve(data);
//     });
// });


// promiseReadFile
//     .then(res => console.log(res), err => console.log(err.toString()))

// Mỗi ngày đọc 1 file khác nhau thì sao???  ĐỌC 1 FILE BẤT KỲ

let readF = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) return reject(new Error("Không tìm thấy file để đọc"))
            resolve(data);
        });
    });
}

readF('./text2.txt')
    .then(res => console.log(res), err => console.log(err + ""))