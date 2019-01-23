// PROMISE LIÊN TIẾP NHAU

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error("Tham số phải là kiểu number"))
            }
            resolve(a + b);
        }, 1000);
    });
}

// 3+7+9
// add(3, 7)
//     .then(res1 => add(res1, '9'))
//     .then(res2 => console.log("Kết quả là: " + res2))
//     .catch(err => console.log(err.toString()))

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error("Tham số phải là kiểu number"))
            }
            resolve(a * b);
        }, 1000);
    });
}

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error("Tham số phải là kiểu number"));
            }
            if (b === 0) {
                return reject(new Error("Lỗi chia cho 0"));
            }
            resolve(a / b);
        }, 1000);
    });
}


let tinhDienTichHinhThang = (a, b, h) => {
    add(a, b)
        .then(res1 => multiply(res1, h))
        .then(res2 => divide(res2, 2))
        .then(resultSquare => console.log("DIỆN TÍCH HÌNH THANG = " + resultSquare))
        .catch(errMess => console.log(errMess.toString()))
}


tinhDienTichHinhThang(2, 3, 0);