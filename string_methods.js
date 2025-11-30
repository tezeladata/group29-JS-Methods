// str.concat
// concat არის concatenate-ის შემოკლება, კონკატინაცია ნიშნავს სთრინგების შეერთებას
// ეს მეთოდი გამოიძახება სთრინგზე და მას გადაეცემა ნებისმიერი რაოდენობის არგუმენტი.
// მიღებული შედეგი იქნება ყველა ამ სთრინგის შეერთება (კონკატინაცია)
console.log("Hello".concat(" ", "World!"));
console.log("Students: ".concat("Datuna, ", "Nikolozi, ", "Nikolozi, ", "Giorgi and ", "Giorgi."))
console.log("David".concat())


// endswith
// ეს მეთოდი გამოიძახება სთრინგზე და ამოწმდებს მოცემული სთრინგი ბოლოვდება თუ არა მეთოდის არგუმენტით.
// ამ მეთოდს გადაეცემა 1 ან 2 არგუმენტი. 
// I არგუმენტი - საძიებელი სთრინგი
// II არგუმენტი (optional - არ არის აუცილებელი ამ არგუმენტის გაწერა) - ეს არის ინდექსი და მოწმდება ამ ინდექსამდე არსებული სიმბოლოები არის თუ არა მეთოდის I არგუმენტი
// მეთოდის დაბრუნებული მნიშვნელობა არის ბულეანი - true/false
console.log("Hello".endsWith("llo")) // true
console.log("david".endsWith("vi")) // false
console.log("goa".endsWith("go", 2)) // true
console.log("goa".endsWith("go")) // false
console.log("programming".endsWith("rog", 4)) // true
console.log("programming".endsWith("rogr", 4)) // false
console.log("plogramming".endsWith("rog", 4)) // false


// includes
// ეს js-ის მეთოდი ამოწმებს, მეთოდის პირველი არგუმენტი მოიძებნება თუ არა იმ სთრინგში, რომელზეც გამოვიძახეთ ეს მეთოდი.
// includes მეთოდს გადაეცემა 2 არგუმენტი:
// I არგუმენტი - search string - საძიებელი სთრინგი, რომელიც მოწმდება არის თუ არა მთავარ სთრინგში.
// II არგუმენტი - position - რომელი პოზიციიდან, ანუ ინდექსიდან დაიწყოს ძებნა მთავარ სთრინგში.
console.log("programming".includes("am")) // true
console.log("programming".includes("am", 10)) // false
console.log("david".includes("Da")) // false
console.log("hello".includes("Ll")) // false


// repeat
// ეს მეთოდი გამოიძახება სთრინგზე და მას გადაეცემა ერთი არგუმენტი
// არგუმენტი - მთელი დადებითი რიცხვი
// მიღებული შედეგი - მთავარი სთრინგი იმდენჯერ აღებული რა არგუმენტიც გადავეცით ფუნქციას.
console.log("GOA".repeat(10))
console.log("GOA ".repeat(100))
console.log("hello".repeat(0)) // ""
console.log("GOA".repeat(0) === "") // true
console.log("hello".repeat(1)) // "hello"
console.log("hello".repeat(1) === "hello") // true


// indexOf
// ამ მეთოდს გადაეცემა ერთი/ორი არგუმენტი და მთავარ სთრინგში ეძებს პირველ არგუმენტს
// I არგუმენტი - searchString - რომელი სთრინგიც უნდა იპოვოს მთავარ სთრინგში
// II არგუმენტი (optional) - position - რომელი ინდექსიდან დაიწყოს ძებნა მთავარ სთრინგში
// თუ საძიებელ სთრინგს ვერ ვპოულობთ, შედეგი არ იქნება ერორი, უბრალოდ იქნება -1
const sentence = "Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Porro, aliquid."
console.log(sentence.indexOf("ipsum")) // 6
console.log(sentence.indexOf("ipsum", 7)) // 39
console.log(sentence.indexOf("hello")) // -1
console.log(sentence.indexOf("hello", 10)) // -1


// lastIndexOf
// ეს მეთოდი არის indexOf მეთოდის საპირისპირო, ის ბოლო შემხვედრი სთრინგის ინდექსს დააბრუნებს
// მეორე არგუმენტი მეთოდს მიუთითებს რომელ ინდექსამდე შეამოწმოს
// თუ საძიებელ სთრინგს ვერ ვიპოვით, ისევ -1 დაგვიბრუნდება
console.log(sentence.lastIndexOf("ipsum")) // 39
console.log(sentence.lastIndexOf("ipsum", 35)) // 6
console.log(sentence.lastIndexOf("hello")) // -1
console.log(sentence.lastIndexOf("hello", 10)) // -1


// replace
// ეს მეთოდი მთავარ სთრინგში საძიებელ ნაწილს შეგვიცვლის მეორე არგუმენტი
// I არგუმენტი - pattern - რომელი სთრინგიც უნდა მოიძებნოს მთავარ სთრინგში
// II არგუმენტი - replacement - როდესაც პირველად ვიპოვით pattern-ს, ის შეიცვლება replacement-ით.
// ორივე არგუმენტი არის აუცილებელი
// შეიძლება მთავარ სთრინგში pattern რამდენიმეჯერ ვიპოვოთ, მაგრამ replace მეთოდი მხოლოდ პირველს შეცვლის replacement-ით.
// replace მეთოდი აბრუნებს ახალ სთრინგს, შესაბამისად ძველი სთრინგი (ორიგინალი სთრინგი) არ შეიცვლება
const sentence2 = "Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Porro, aliquid."
console.log(sentence2.replace("Lorem", "გამარჯობა")) // "გამარჯობა ipsum dolor sit amet consectetur ipsum adipisicing elit. Porro, aliquid."
console.log(sentence2) // იგივე დარჩა
console.log(sentence2.replace("aaa", "bbb")) // "Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Porro, aliquid."


// replaceAll
// ეს არის replace მეთოდის კიდევ უფრო გაუმჯობესებული მეთოდი, რომელიც ყველა pattern-ს შეცვლის replacement-ით.
const myWord = "hello hello 1 2 3";
console.log(myWord.replaceAll("hello", "goodbye")) // "goodbye goodbye 1 2 3";
console.log(myWord) // "hello hello 1 2 3"


// slice
// ეს მეთოდი დაგვიბრუნებს სთრინგის რაღაც ნაწილს. რა ნაწილი იქნება, ეს დამოკიდებულია მეთოდი არგუმენტზე/არგუმენტებზე
// I არგუმენტი (აუცილებელი) - startPosition - რომელი ინდექსიდან დავიწყოთ ახალ სთრინგში სიმბოლოების ჩასმა
// II არგუმენტი (optional) - endPosition - რომელ ინდექსამდე ამოიღოს სთრინგიდან სიმბოლოები.
// თუ slice მეთოდს მეორე არგუმენტი არ გადავეცით, მისი default მნიშვნელობა არის სთრინგის სიგრძე, ანუ სიმბოლოებს ამოვიღებთ სთრინგის ბოლომდე.
const fullname = "Data Tezelashvili";
console.log(fullname.slice(0)) // "Data Tezelashvili"
console.log(fullname.slice(5)) // "Tezelashvili"
console.log(fullname.slice(0, 4)) // "Data"
console.log(fullname.slice(-12)) // "Tezelashvili"
console.log(fullname.slice(-17, -12)) // "Data "
console.log(fullname.slice(50)) // ""


// startswith
// ეს მეთოდი ამოწმებს მთავარი სთრინგი იწყება თუ არა მეთოდის პირველი არგუმენტით
// მეთოდს გავუწერთ 1 ან 2 არგუმენტს:
// I არგუმენტი - searchString - რომელი სთრინგიც შემოწმდება
// II არგუმენტი (optional) - position - მთავარ სთრინგში რომელ ინდექსზე დაიწყოს შემოწმება
const myFullname = "David tezelashvili";
console.log(myFullname.startsWith("David")) // true
console.log(myFullname.startsWith("Davi")) // true
console.log(myFullname.startsWith("david")) // false
console.log(myFullname.startsWith("David", 2)) // false
console.log(myFullname.startsWith("tezelashvili", 6)) // true
console.log(myFullname.startsWith("David tezelashvili")) // true


// trim
// ეს მეთოდი გამოიძახება სთრინგზე და მას წაუშლის ზედმეტ სფეისებს, რომლებიც დასაწყისსა და ბოლოშია
// ამ მეთოდს არგუმენტი არ გადაეცემა
const str1 = "        hello   world!     ";
console.log(str1.trim()); // "hello   world!"
console.log(str1); // "        hello   world!     "


// trimStart, trimEnd
// trimStart - მხოლოდ დასაწყისში წაიშალოს ზედმეტი სფეისები
// trimEnd - მხოლოდ ბოლოში წაიშალოს ზედმეტი სფეისები
console.log(str1.trimStart()); // "hello   world!     "
console.log(str1.trimEnd()); // "        hello   world!"
console.log(str1.trimStart().trimEnd() === str1.trim()) // true