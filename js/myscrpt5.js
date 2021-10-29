//ตัวแปร Variable

var a = 20;
let x = 1000;
{
    let b = 15;
    var c = 99;
    const d = 8888;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(x);
    console.log("-------");

    b = 30;
    a = 100;
    c = 555;
    //d = 1111; error
    console.log(a);
    console.log(b);
    console.log(c);
    

}
console.log(a);
//console.log(b); error
console.log(c);
console.log(x);
//console.log(d); error
console.log("---------");