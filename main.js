let num1 = prompt("Istalgan son kiriting");
let num2 = prompt("Istalgan son kiriting");

function myFunction() {
    if (num1 > num2) {
        alert(num1 + " bu son katta");
    } else if (num2 > num1) {
        alert(num2 + " bu son katta");
    } else {
        alert("Ikkala son ham teng");
    }
}

myFunction();