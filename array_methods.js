// sort

// concat - concatenate - კონკატინაცია (შეერთება)
// ამ მეთოდს გადაეცემა ნებისმიერი რაოდენობის არგუმენტი, უბრალოდ თითოეული არგუმენტი უნდა იყოს მასივი
// ეს მეთოდი ყველა მასივს ერთმანეთთან შეაერთებს და დააბრუნებს ახალ, გაერთიანებულ მასივს
// ეს მეთოდი საწყის მასივებს არ ცვლის
// არგუმენტების რაოდენობა განუსაღვრელია, რამდენსაც გვინდა, მაგდენს გავუწერთ
console.log([1, 2, 3, 4, 5].concat([1, 2], ["a", "b", "c"], [{name: "David"}])) // ->
// -> [1, 2, 3, 4, 5, 1, 2, "a", "b", "c", {name: "David"}]
console.log([1, 2, 3].concat()) // [1, 2, 3]
console.log([].concat([])) // []


// includes
// ეს მეთოდი ამოწმებს გადაცემული არგუმენტი გვხვდება თუ არა მასივში
// მეთოდს გადაეცემა 1 ან 2 არგუმენტი
// I - searchItem - რომელ ელემენტსაც ვამოწმებთ მასივში
// II - fromIndex (optional) - რომელი ინდექსიდან დაიწყოს მასივში შემოწმება
console.log(["Data", "Tezelashvili"].includes("data")) // false
console.log(["Data", "Tezelashvili"].includes("Data")) // true
console.log(["Data", "Tezelashvili"].includes("Data Tezelashvili")) // false
console.log(["Data", "Tezelashvili"].includes("tezelashvili")) // false
console.log(["Data", "Tezelashvili"].includes("Tezelashvili")) // true
console.log([1, 1, 1, 2, 3, 4].includes(1, 3)) // false
console.log([1, 1, 1, 2, 3, 4].includes(1, 2)) // true


// reverse - შებრუნება
// ეს მასივის მეთოდი პირდაპირ ორიგინალ მასივს შემოაბრუნებს -> I ელემენტი გახდება ბოლო და ბოლო ელემენტი გახდება I.
// ამ მეთოდს არგუმენტი არ გადაეცემა
// ეს მეთოდი არ აბრუნებს რაღაც ახალ მასივს, ის პირდაპირ ცვლის ორიგინალს - in-place შეცვლა
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.reverse()); // [5, 4, 3, 2, 1]
console.log(arr1); // [5, 4, 3, 2, 1]


// forEach
// ამ მეთოდს ვიყენებთ იმისთვის, რომ მასივს გადავუაროთ ციკლით და მის თითოეულ ელემენტზე ერთი და იგივე ფუნქცია გავუშვათ
// მეთოდს გადაეცემა 1 არგუმენტი - callback ფუნქცია
// callback ფუნქციის პარამეტრები:
//      1 - ელემენტი
//      2 - ინდექსი
//      3 - მასივი

console.log([1, 2, 3, 4, 5].forEach(el => console.log(el * 2)))
// result: 2, 4, 6, 8, 10
console.log(["a", "b", "c", "d", "e"].forEach((el, i) => console.log(`Index of ${el} is: ${i}`)))
// Index of a is: 0
// Index of b is: 1
// Index of c is: 2
// Index of d is: 3
// Index of e is: 4
console.log([1, 2, 3].forEach((el, i, arr) => console.log(arr)))
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]


// findIndex
// ეს მეთოდი აბრუნებს პირველი იმ ელემენტის ინდექსს, რომელიც აკმაყოფილებს მეთოდის callback ფუნქციის პირობას
// თუ არცერთი ელემენტი არ აკმაყოფილებს callback ფუნქციის პირობას, დაგვიბრუნდება -1.
// callback ფუნქცია განიხილავს ყველა ელემენტს მასივიდან და აუცილებელია რომ ეს ფუნქცია აბრუნებდეს ბულეანს.
// boolean -> true -> ელემენტი აკმაყოფილებს callback ფუნქციის პირობას -> ✔
// boolean -> false -> ელემენტი არ აკმაყოფილებს callback ფუნქციის პირობას -> ❌

const myNumbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(myNumbers2.findIndex(el => el > 5)); // 5
console.log(myNumbers2.findIndex(element => element > 1000)) // -1
console.log(myNumbers2.findIndex(num => num%2 === 0)) // 1
const students = [
    {
        name: "Datuna"
    },
    {
        name: "Luka"
    },
    {
        name: "Aleksandre"
    },
    {
        name: "Nikolozi"
    },
    {
        name: "Giorgi"
    },
    {
        name: "Giorgi"
    }
]
console.log(students.findIndex(el => el.name.endsWith("i"))) // 3
console.log(students.findIndex(myObj => myObj.name.length > 2)) // 0
console.log(students.findIndex(myObj => myObj.name.startsWith("G"))) // 4
console.log(students.findIndex(myObj => myObj.name.length > 20)) // -1


// findLastIndex
// ეს მეთოდი არის findIndex მეთოდის საპირისპირო, რადგანაც ბოლო ისეთი ელემენტის ინდექსს აბრუნებს, რომელიც აკმაყოფილებს callback ფუნქციის პირობას.
// ისევ, თუ ვერცერთ ელემენტს ვერ ვიპოვით მასივში, რომელიც აკმაყოფილებს callback ფუნქციის პირობას, დაგვიბრუნდება -1.

console.log(myNumbers2.findLastIndex(el => el > 5)); // 6
console.log(myNumbers2.findLastIndex(element => element > 1000)) // -1
console.log(myNumbers2.findLastIndex(num => num%2 === 0)) // 5
console.log(students.findLastIndex(el => el.name.endsWith("i"))) // 5
console.log(students.findLastIndex(myObj => myObj.name.length > 2)) // 5
console.log(students.findLastIndex(myObj => myObj.name.startsWith("G"))) // 5
console.log(students.findLastIndex(myObj => myObj.name.length > 20)) // -1


// find მეთოდი მუშაობს findIndex მეთოდის მსგავსად, უბრალოდ იმ პირველი ელემენტის ინდექსის ნაცვლად პირდაპირ ელემენტს გვიბრუნებს
// თუ find მეთოდი ვერ იპოვის შესაბამის ელემენტს, დაგვიბრუნდება undefined

console.log([1, 2, 3, 4].find(num => num > 2)) // 3
console.log([1, 2, 3, 4].find(num => num < 1)) // undefined
console.log([1, 2, 3, 4, 5, 6].find(num => num %2 === 0 && num > 2)) // 4


// findLast
// ეს მეთოდი არის find მეთოდის საპირსპირო, აბრუნებს ბოლო ისეთ ელემენტს, რომელიც აკმაყოფილებს callback ფუნქციის პირობას
console.log([1, 2, 3, 4].findLast(num => num > 2)) // 4
console.log([1, 2, 3, 4].findLast(num => num < 1)) // undefined
console.log([1, 2, 3, 4, 5, 6].findLast(num => num %2 === 0 && num > 2)) // 6


// indexOf
// ამ მეთოდს პირდაპირ გადავცემთ საძიებელ ელემენტს და არა callback ფუნქციას.
// მეთოდს შეიძლება ჰქონდეს 1 ან 2 არგუმენტი
// I არგუმენტი - searchItem - საძიებელი ელემენტი
// II არგუმენტი - fromIndex - რომელი ინდექსიდან დაიწყოს ძებნა
// მეთოდი აბრუნებს პირველად ნაპოვნი searchItem-ის ინდექსს
// როდესაც მეთოდი ვერ პოულობს საძიებელ ელემენტს, ის აბრუნებს -1-ს

console.log([1, 2, 1, 3, 4].indexOf(1)) // 0
console.log([1, 2, 1, 3, 4].indexOf(1, 1)) // 2
console.log([1, 2, 1, 3, 4].indexOf(10)) // -1


// lastIndexOf
// ეს მეთოდი არის indexOf მეთოდის საპირისპირო.
// მასაც ორი არგუმენტი გადაეცემა, უბრალოდ აბრუნებს ბოლო იმ ელემენტის ინდექსს, რომელი ელემენტიც ტოლია მეთოდის პირველი არგუმენტის.
// მეორე არგუმენტი არის რომელ ინდექსამდე დაიწყოს ძებნა
console.log([1, 2, 1, 3, 4].lastIndexOf(1)) // 2
console.log([1, 2, 1, 3, 4].lastIndexOf(1, 1)) // 0
console.log([1, 2, 1, 3, 4, 1].lastIndexOf(1, 1)) // 0
console.log([1, 2, 1, 3, 4].lastIndexOf(10)) // -1


// some
// ეს არის მასივის მეთოდი, რომელსაც გადაეცემა 1 არგუმენტი - callback ფუნქცია
// ამ callback ფუნქციით შემოწმდება მასივის თითოეული ელემენტი და თითოეულ ელემენტზე დაბრუნდება ბულეანი - true ან false
// callback ფუნქციის დაბრუნებული მნიშვნელობა აუცილებლად ბულეანი უნდა იყოს
// თუ ერთ-ერთ ელემენტზე მაინც დაგვიბრუნდება true ბულეანი, some მეთოდი საბოლოოდ true ბულეანს დააბრუნებს. თუ არცერთ ელემენტზე არ დაგვიბრუნდა true ბულეანი, საბოლოო შედეგი იქნება false.

const myNumbers = [1, 2, 3, 4, 5];
// some მეთოდის ალტერნატივა
let result = false;
myNumbers.forEach(el => {
    if (el > 3){
        result = true
    };
});
console.log(result)
// some მეთოდით
console.log(myNumbers.some(num => num > 3)) // true
console.log(myNumbers.some(el => el > 4)) // true
console.log(myNumbers.some(el => el >= 5)) // true
console.log(myNumbers.some(el => el > 5)) // false
console.log(myNumbers.some(num => num === 2)) // true
console.log(myNumbers.some(el => el%2 === 0)) // true
console.log(myNumbers.some(el => el%2 === 0 && el === 4)) // true
console.log(myNumbers.some(num => num%2 === 0 && num > 4)) // false
console.log(myNumbers.concat([6]).some(num => num%2 === 0 && num > 4)) // true


// every
// ეს მეთოდი ძალიან გავს some მეთოდს, უბრალოდ ის ამოწმებს ყველა ელემენტი აკმაყოფილებს თუ არა callback ფუნქციის პირობას.
// თუ ყველა ელემენტი აკმაყოფილებს callback ფუნქციის პირობას, საბოლოო შედეგი არის true, ხოლო სხვა შემთხვევაში false.
console.log(myNumbers.every(el => el > 0)) // true
console.log(myNumbers.every(el => el >= 1)) // true
console.log(myNumbers.every(num => num > 1)) // false
console.log(myNumbers.every(num => num %2 === 1)) // false 
console.log(myNumbers.every(num => num %2 === 0)) // false 
console.log(myNumbers.every(num => num < 5)) // false
console.log(myNumbers.every(num => num <= 5)) // true


// map
// ეს მასივის მეთოდი არგუმენტად მიიღებს ისევ callback ფუნქციას და მისი თითოეული ელემენტი შეიცვლება ამ callback ფუნქციის კოდის ბლოკით.
// შეზღუდვა არ გვაქვს იმაზე, თუ რას (რომელ მონაცემთა ტიპს) დააბრუნებს callback ფუნქცია
// map მეთოდი გვიბრუნებს ახალ მასივს, შესაბამისად ორიგინალს - რომელზეც გამოვიძახეთ ეს მეთოდი, არ შეგვიცვლის.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNums.map((num, index) => num*index)) // [0, 2, 6, 12, 20, 30, 42, 56, 72, 90]
console.log(myNums) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myNums.map(el => {
    return el<=5 ? 1 : 0 
})) // [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
console.log(myNums.map(num => num*num)) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(myNums) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myNums.map(el => `${el}: ${el / 2}`)) // ['1: 0.5', '2: 1','3: 1.5', '4: 2','5: 2.5', '6: 3','7: 3.5', '8: 4','9: 4.5', '10: 5']


// filter
// ეს მეთოდი ძალიან გავს map მეთოდს, უბრალოდ ის არცერთ ელემენტს არ გვიცვლის.
// პირიქით, ზოგიერთი ელემენტი აღარ გვექნება მასივში.
// filter მეთოდს გადაეცემა callback ფუნქცია, რომელიც აუცილებლად ბულეანს აბრუნებს. 
// ამ callback ფუნქციით შემოწმდება მასივის ყველა ელემენტი
// თუ callback ფუნქცია მასივის ელემენტზე დააბრუნებს ბულეან true-ს, მაშინ ეს ელემენტი გვექნება ახალ მასივში. ხოლო თუ ელემენტზე false დაგვიბრუნდა, ის იფილტრება და ახალ მასივში აღარ ჯდება.
// filter მეთოდი ორიგინალ მასივს არ ცვლის.

const names = ["Nikolozi", "Data", "Giorgi", "Datuna", "Nikolozi", "Luka"];
console.log(names.filter(s => s.length < 7)) // ["Data", "Giorgi", "Datuna", "Luka"]
console.log(names) // ["Nikolozi", "Data", "Giorgi", "Datuna", "Nikolozi", "Luka"]
console.log(names.filter(s => s.startsWith("N"))) // ["Nikolozi", "Nikolozi"]
const userNumbers = [67, 1, 17, 91, 0, 123, 61, 45, 90, 41, 21, 22, 80];
console.log(userNumbers.filter(num => num%2 === 0)) // [0, 90, 22, 80]
console.log(userNumbers.filter(num => num%2 === 1)) // [67, 1, 17, 91, 123, 61, 45, 41, 21]
const users = [
    {
        name: "Datuna",
        age: 13
    },
    {
        name: "Nikolozi",
        age: 13
    },
    {
        name: "Giorgi",
        age: 13
    },
    {
        name: "Nikolozi",
        age: 13
    },
    {
        name: "Luka",
        age: 13
    }
]
console.log(users.filter(obj => obj.name.length < 7))


// push
// ეს მეთოდი მასივის ბოლოში ამატებს თავის არგუმენტს/არგუმენტებს და გვიბრუნებს მასივის განახლებულ სიგრძეს.
// მეთოდს ნებისმიერი რაოდენობის არგუმენტი გადაეცემა

const arrForPush = [1, "a", true];
console.log(arrForPush.push(1, 2, 3)); // 6
console.log(arrForPush); // [1, "a", true, 1, 2, 3]
const arrForPush2 = ["hello"];
console.log(arrForPush2.push("goodbye")) // 2
console.log(arrForPush2) // ["hello", "goodbye"]
arrForPush2.push();
console.log(arrForPush2) // ["hello", "goodbye"]


// pop
// ეს მეთოდი ორიგინალი მასივიდან ამოშლის ბოლო ელემენტს და დაგვიბრუნებს ამ ელემენტს.
// თუ მასივი ცარიელია და მასზე ვიძახებთ pop მეთოდს, დაგვიბრუნდება undefined.
// ამ მეთოდს არგუმენტი არ გადაეცემა.
const arrForPop = [1, 2, 3, 4];
for (let i = arrForPop.length; i >= 0; i--){
    console.log(arrForPop.pop())
    console.log(arrForPop)
}

// I iteration
// i = 4
// i >= 0 -> 4 >= 0 -> true
// deleted element - 4
// arr - [1, 2, 3]

// II iteration
// i = 3
// i >= 3 -> 3 >= 0 -> true
// deleted element - 3
// arr - [1, 2]

// III iteration
// i = 2
// i >= 0 -> 2 >= 0 -> true
// deleted element - 2
// arr - [1]

// IV iteration
// i = 1
// i >= 0 -> 1 >= 0 -> true
// deleted element - 1
// arr - []

// V iteration
// i = 0
// i >= 0 -> 0 >= 0 -> true
// deleted element - undefined
// arr - []


// shift
// ეს მეთოდი არის pop მეთოდის საპირისპირო - ის წაშლის მასივის პირველ ელემენტს, შესაბამისად შეცვლის მასივის სიგრძეს და დაგვიბრუნებს მასივიდან ამოშლილ ელემენტს.

const arrForShift = [1, 2, 3];
console.log(arrForShift.shift()); // 1
console.log(arrForShift); // [2, 3]
console.log(arrForShift.shift()); // 2
console.log(arrForShift); // [3]
console.log(arrForShift.shift()); // 3
console.log(arrForShift); // []
console.log(arrForShift.shift()); // undefined
console.log(arrForShift); // []


// join
// ეს მეთოდი მასივის ყველა ელემენტს შეაერთებს ერთი და იგივე სთრინგით.
// მეთოდს გადაეცემა 1 არგუმენტი ან საერთოდ არ გადაეცემა არგუმენტი.
// No argument - მასივის ელემენტები შეერთდებიან მძიმეებით
// 1 არგუმენტი - separator - ნებისმიერი სთრინგი, რომლითაც შეერთდებიან მასივის ელემენტები.

const arrForJoin = ["hello", "world", "!"];
console.log(arrForJoin.join(" ")) // "hello world !"
console.log(arrForJoin) // ["hello", "world", "!"]
console.log(arrForJoin.join()) // "hello,world,!"
console.log(arrForJoin.join("-"))
console.log([1, 2, "3", "4"].join("-")) // "1-2-3-4"
console.log(["hello", {name: "David"}].join(" ")) // "hello [object object]"
console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].join("   ")) // 1,2,3   4,5,6   7,8,9


// slice
// ეს მეთოდი გამოიყენება მასივის რაღაც გარკვეული ნაწილის ასარჩევად.
// მეთოდი ორიგინალ მასივს არ ცვლის, გვიბრუნებს ახალ მასივს.
// მას გადაეცემა 0/1/2 არგუმენტი
// 0 არგუმენტი - დაგვიბრუნდება იგივე მასივი
// I არგუმენტი - start - რომელი ინდექსიდან ამოვიღოთ ელემენტი. როდესაც მარტო ერთი არგუმენტი გვიწერია, მაგ დროს, პირველის არგუმენტის ინდექსიდან მასივი ბოლომდე ყველა ელემენტს ამოიღებს.
// II არგუმენტი - end - რომელ ინდექსამდე ამოვიღოთ ელემენტი.
// slice მეთოდს შეგვიძლია არგუმენტებად უარყოფითი ინდექსებიც გავუწეროთ.
const arrForSlice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrForSlice.slice(3)) // [4, 5, 6, 7, 8, 9, 10]
console.log(arrForSlice) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrForSlice.slice()) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrForSlice.slice(-4)) // [7, 8, 9, 10]
console.log(arrForSlice.slice(2, 4)) // [3, 4]
console.log(arrForSlice.slice(-7, -9)) // [] -> slice-ის მიმართულება არ უნდა იყოს მარჯვნიდან მარცხნივ
console.log(arrForSlice.slice(-10, 3)) // [1, 2, 3]
console.log(arrForSlice.slice(-10, -5)) // [1, 2, 3, 4, 5]


// splice
// ეს მეთოდი პირველ რიგში გამოიყენება მასივიდან ელემენტების წასაშლელად, მაგრამ ასევე შეუძლია ამ წაშლილი ელემენტების ადგილას ჩასვას ახალი ელემენტები.
// I არგუმენტი - start - საწყისი ინდექსი. თუ მარტო 1 არგუმენტი გადავეცით მეთოდს, მაშინ მაგ ინდექსიდან ბოლომდე ამოშლის ყველა ელემენტს მასივიდან
// II არგუმენტი (optional) - deleteCount - წასაშლელი ელემენტების რაოდენობა
// III არგუმენტიდან რამდენიც გვინდა (optional) - ჩასამატებელი ელემენტები
// splice მეთოდი ცვლის ორიგინალ მასივს, ხოლო აბრუნებს ამოშლილ ელემენტებს
const arrForSplice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrForSplice.splice(1, 3)) // [2, 3, 4]
console.log(arrForSplice) // [1, 4, 5, 6, 7, 8, 9, 10]
console.log(arrForSplice.splice(1)) // [4, 5, 6, 7, 8, 9, 10]
console.log(arrForSplice) // [1]
const arrForSplice2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrForSplice2.splice(4, 3, "hello", "goodbye")) // [5, 6, 7]
console.log(arrForSplice2) // [ 1, 2, 3, 4, 'hello', 'goodbye', 8, 9, 10 ]
console.log(arrForSplice2.splice(1, 0, "a", "b")) // []
console.log(arrForSplice2) // [ 1, 'a', 'b', 2, 3, 4, 'hello', 'goodbye', 8, 9, 10 ]


// sort
// ეს მეთოდი გამოიყენება მასივის დასალაგებლად. 
// მეთოდი მუშაობს ორიგინალ მასივზე და პირდაპირ მას ცვლის
// მას შეიძლება გადაცეთ 1 არგუმენტი, რაც იქნება შესადარებელი ფუნქცია

const arrForSort = ["hello", "my", "name", "is", "david"];
console.log(arrForSort.sort()) // [ 'david', 'hello', 'is', 'my', 'name' ]
console.log(arrForSort) // [ 'david', 'hello', 'is', 'my', 'name' ]

const arrForSort2 = [1, 1000000, 2, 23, 4, 8, 44, 81]
console.log(arrForSort2.sort()) // [1, 1000000, 2, 23, 4, 44, 8, 81]