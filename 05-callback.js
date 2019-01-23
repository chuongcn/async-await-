// tính diện tích hình thang
// TH1: Đồng bộ

// let square = (a, b, h) => (a + b) * h / 2;
// console.log('Diện tích hình thang: ' + square(2, 3, 2));

// TH2: GIẢ SỬ BẤT ĐỒNG BỘ KHI TÍNH DIỆN TÍCH HÌNH THANG NHÉ !!!!

let add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error("Tham số phải là kiểu number"));
        }
        cb(undefined, a + b);
    }, 1000);
}

let multiply = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham số phải là kiểu number'));
        }
        cb(undefined, a * b);
    }, 1000);
}

let divide = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham số phải là kiểu number'));
        }
        if (b == 0) return cb(new Error('Lỗi chia cho 0'));
        cb(undefined, a / b);
    }, 1000);
}

// test divide
// divide(4, 2, (err, result) => {
//     if (err) return console.log('Lỗi: ' + err);
//     console.log('Kết quả a / b = ' + result);
// });


//test add
// add(2, 3, (err, result) => {
//     if (err) return console.log('Lỗi: ' + err);
//     console.log('Kết quả a + b = ' + result);

// });

// test multiply
// multiply(2, '4', (err, result) => {
//     if (err) return console.log('Lỗi: ' + err);
//     console.log('Kết quả a x b = ' + result);

// });


let tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (errAdd, resultAdd) => {
        if (errAdd) return cb(errAdd);
        multiply(resultAdd, h, (errMul, resultMul) => {
            if (errMul) return cb(errMul);
            divide(resultMul, 2, (errDivide, resultSquare) => {
                if (errDivide) return cb(errDivide);
                cb(undefined, resultSquare);
            });
        });
    });
}

tinhDienTichHinhThang(2, '3', 2, (err, res) => {
    if (err) return console.log(err.toString());
    console.log("Kết quả cuối cùng Diện tích hình thang: " + res);
});