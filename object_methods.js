// keys
// values

// entries
//  ეს არის ობიექტის მეთოდი, რომელიც გვიბრუნებს მასივს
// დაბრუნებულ მასივში იმდენი ჩაშენებული მასივი გვექნება, რამდენი წყვილიც გვქონდა ობიექტში
// !!! ობიექტის ყველა გასაღები ინახება სთრინგის სახით
// syntax - Object.entries(აქ გადაეცემა ჩვენი ობიექტი)

// before - ობიექტი
const myObj = {
    "name": "David",
    "surname": "Tezelashvili",
    "userNum": 10
}
// after - 2d მასივი
const result = [["name", "David"], ["surname", "Tezelashvili"], ["userNum", 10]]

// უბრალოდ დავბეჭდოთ მიღებული მასივი
console.log(Object.entries(myObj));

// for of ციკლით გადავუარეთ მთავარ მასივს და მისი ორელემენტიანი მასივები დესტრუქციით დავშალეთ
for (let [key, value] of Object.entries(myObj)){ 
    console.log(key)
    console.log(value)
    console.log("")
}


// hasOwn
// ესეც არის ობიექტის მეთოდი, რომელსაც ორი არგუმენტი გადაეცება:
// I არგუმენტი - ობიექტი
// II არგუმენტი - გასაღები (აუცილებლად string მონაცემთა ტიპში)
// ჩვენი მეთოდი პირველ არგუმენტში მოძებნის მეორე არგუმენტს და თუ იპოვის, დაგვიბრუნდება true, ხოლო სხვა შემთხვევაში false
// სინტაქსი - Object.hasOwn(ობიექტი, გასაღები)

// manual ფუნქცია
const manualHasOwn = (obj, key) => {
    for (let objKey in obj) {
        if (objKey === key) {
            return true
        }
    };

    return false
};

const obj1 = {name: "David", surname: "Tezelashvili"};
const obj2 = {langName: "js", usedInWebDev: true};

console.log(manualHasOwn(obj1, "surname")); // true
console.log(Object.hasOwn(obj1, "surname")); // true

console.log(manualHasOwn(obj2, "year")); // false
console.log(Object.hasOwn(obj2, "year")); // false


// keys
// ესეც არის ობიექტის მეთოდი, რომელსაც არგუმენტად გადაეცემა ობიექტი და ის მასივის სახით გვიბრუნებს ობიექტის გასაღებებს.
// გვიბრუნდება სთრინგების მასივი

const myObj2 = {
    "name": "David",
    "surname": "Tezelashvili",
    "userNum": 10
};
console.log(Object.keys(myObj2));
// [ 'name', 'surname', 'userNum' ]


// values
// ესეც არის ობიექტის მეთოდი, რომელსაც არგუმენტად გადაეცემა ობიექტი და გვიბრუნდება მასივი, სადაც გვექნება ობიექტის ყველა კუთვნილების მნიშვნელობა
// დაბრუნებულ მასივში შევხვდებით ნებისმიერ მონაცემთა ტიპს

const myObj3 = {
    name: "David",
    favNumber: 8,
    studiesAtGOA: true,
    favColors: ["blue", "green", "black"],
    mentorInfo: {
        groups: ["group 29", "group 54", "group 56"],
        experienceYears: 2,
        programmingField: "web development"
    }
};
console.log(Object.values(myObj3));

// result: 
// [
//     'David',
//     8,
//     true,
//     [ 'blue', 'green', 'black' ],
//     {
//         groups: [ 'group 29', 'group 54', 'group 56' ],
//         experienceYears: 2,
//         programmingField: 'web development'
//     }
// ]