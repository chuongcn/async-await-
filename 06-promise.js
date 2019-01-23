let aPromise = new Promise((resolve, reject) => {
    // resolve("Thành công tốt đẹp!!!!");
    // reject(new Error("Không thể kết nối đến server"));

    setTimeout(() => {
        reject(new Error("Không thể kết nối đến server"));
    }, 2000);
});

aPromise.then((msg) => console.log('Đã thực thi: ' + msg), (errMess) => {
    console.log(errMess.toString());
});