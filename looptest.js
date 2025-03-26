// 1-dən 100-ə qədər olan ədədlərin cəmini tapın.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Cəm:", sum);


//Verilmiş array: [1, 2, 3, 4, 5] – bu array-dəki bütün ədədləri konsola yazdırın.for in
let numbers = [1, 2, 3, 4, 5];

for (let index in numbers) {
    console.log(numbers[index]);
}


//Verilmiş obyekt: {ad: 'Ali', yaş: 25, şəhər: 'Bakı'} – bu obyektin bütün açarlarını konsola yazdırın.
let obyekt = {ad: 'Ali', yaş: 25, şəhər: 'Bakı'};

for (let açar in obyekt) {
    console.log(açar);  
}

//Verilmiş obyekt: {kitab: '1984', müəllif: 'George Orwell'} – açar və dəyərləri konsola yazdırın.for of
let obyekt1 = {kitab: '1984', müəllif: 'George Orwell'};

for (let açar of Object.keys(obyekt1)) {
    console.log(açar); 
}

for (let dəyər of Object.values(obyekt1)) {
    console.log(dəyər);  
}

//Verilmiş array: ['alma', 'armud', 'banan'] – bütün meyvələri konsola yazdırın.
let array = ['alma', 'armud', 'banan'] ;

for (let index in array) {
    console.log(array[index]);
}

//Verilmiş string: 'Salam' – hər bir hərfi konsola yazdırın.while
let str = 'Salam';
let i = 0;

while (i < str.length) {
    console.log(str[i]);  
    i++;  
}

//1-dən 10-a qədər olan ədədləri konsola yazdırın.
let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

//Verilmiş array: [5, 10, 15, 20] – array boşalana qədər elementləri konsola yazdırın.do while
let arr = [5, 10, 15, 20];
let b = 0;

do {
    console.log(arr[b]);
    b++;
} while (b < arr.length);

//1-dən 5-ə qədər ədədləri do while ilə konsola yazdırın.
let c = 1;

do {
    console.log(c);
    c++;
} while (c <= 5);

//Verilmiş şərt: istifadəçi ədəd daxil edir və ədəd 50-dən kiçikdirsə döngü davam edir.
let number;

do {
    number = parseInt(prompt("Ədəd daxil edin:"));
} while (number < 50);

console.log("Ədəd 50 və ya daha böyükdür: " + number);





