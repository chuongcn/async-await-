// Let chặt chẽ hơn var - chỉ có tác dụng trong scope của nó

let a = 100;
console.log(a);

if (true) {
    // var b = 5;
    let b = 5;
}
console.log('Giá trị biến b: ', b);