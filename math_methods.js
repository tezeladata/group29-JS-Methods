// abs - absolute value - რიცხვის მოდული
// abs მეთოდი არის იგივე რაც რიცხვის მოდული.
// თუ რიცხვი 0-ის ტოლია, მეთოდი ისევ 0-ს გვიბრუნებს
// თუ რიცხვი ნაკლებია 0-ზე, მეთოდი ამ რიცხვს გაამრავლებს -1-ზე და მიღებულ შედეგს დაგვიბრუნებს
// თუ რიცხვი 0-ზე მეტია, მეთოდი გვიბრუნებს იგივე რიცხვს
console.log(Math.abs(10)) // 10
console.log(Math.abs(-10)) // 10
console.log(Math.abs(0)) // 0
console.log(Math.abs(5)) // 5
console.log(Math.abs(-2.2)) // 2.2


// ceil - ceiling - მაღალ მთელ რიცხვზე დამრგვალება
// ceil მეთოდს გადაეცემა ნებისმიერი რიცხვი და ის მოცემულ რიცხვს დაამრგვალებს მაღალ მთელ რიცხვზე
// 10 < 10.1 < 11
// ❌         ✔️
// 6 < 6.6 < 7
// ❌       ✔️
// 10 -> Math.ceil(10)

console.log(Math.ceil(5)) // 5
console.log(Math.ceil(-5)) // -5
console.log(Math.ceil(5.1)) // 6 
console.log(Math.ceil(-5.1)) // -5
console.log(Math.ceil(5.6)) // 6
console.log(Math.ceil(-5.6)) // -5
console.log(Math.ceil(-0.6)) // -0


// floor - დაბალ მთელ რიცხვზე დამრგვალება
// floor მეთოდი ceil მეთოდისგან განსხვავებით, მაღალ მთელ რიცხვზე დამრგვალების ნაცვლად, ამრგვალებს დაბალ მთელ რიცხვზე

console.log(Math.floor(5)) // 5
console.log(Math.floor(-5)) // -5
console.log(Math.floor(5.1)) // 5
console.log(Math.floor(-5.1)) // -6
console.log(Math.floor(5.6)) // 5
console.log(Math.floor(-5.6)) // -6
console.log(Math.floor(-0.6)) // -1
console.log(Math.floor(0.6)) // 0


// round - უახლოეს მთელ რიცხვთან დამრგვალება
// ეს მეთოდი მოცემულ რიცვს დაამრგვალებს უახლოეს მთელ რიცხვთან
console.log(Math.round(5)) // 5
console.log(Math.round(-5)) // -5
console.log(Math.round(5.1)) // 5
console.log(Math.round(-5.1)) // -5
console.log(Math.round(5.6)) // 6
console.log(Math.round(-5.6)) // -6
console.log(Math.round(-0.6)) // -1
console.log(Math.round(0.6)) // 1
console.log(Math.round(0.5)) // 1
console.log(Math.round(-0.5)) // -0


// min
// ამ მეთოდს გადაეცემა ნებისმიერი რაოდენობის რიცხვები არგუმენტებად
// მეთოდი არგუმენტებს შორის მინიმალურს დაგვიბრუნებს
// ამ მეთოდს აუცილებლად რიცხვები უნდა გადავცეთ არგუმენტებად, კოლექციები არ შეიძლება

console.log(Math.min([1, 2, 3])) // NaN
console.log(Math.min(1, 2, 3)) // 1
console.log(Math.min(-1, 0, 1)) // -1
console.log(Math.min(100, 0, 200, 10000)) // 0


// max
// ეს მეთოდი ძალიან გავს min მეთოდს, უბრალოდ აბრუნებს არგუმენტებიდან მაქსიმალურს - ყველაზე დიდ რიცხვს
console.log(Math.max([1, 2, 3])) // NaN
console.log(Math.max(1, 2, 3)) // 3
console.log(Math.max(-1, 0, 1)) // 1
console.log(Math.max(100, 0, 200, 10000, 1)) // 10000


// pow - power - ხარისხი
// ამ მეთოდს გადაეცემა ორი არგუმენტი
// I არგუმენტი - base - ფუძე
// II არგუმენტი - exponent - ხარისხი
// ეს მეთოდი პირველ არგუმენტს აიყვანს იმ ხარისხში, რისი ტოლიცაა მეორე არგუმენტი

console.log(Math.pow(2, 4)) // 2*2*2*2=16
console.log(2**4) // same
console.log(Math.pow(3, 2)) // 3*3=9
console.log(3**2) // same
console.log(Math.pow(10, 6)) // 1000000
console.log(10**6) // same
console.log(Math.pow(3, 4)) // 81
console.log(3**4) // same
console.log(Math.pow(9, 2)) // 81
console.log(9**2) // same
console.log(Math.pow(5, 3)) // 125
console.log(5**3) // same
console.log(Math.pow(0.5, 2)) // 0.25
console.log(0.5**2) // same
console.log(Math.pow(2, 10)) // 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
console.log(2**10) // same


// trunc - truncate - შემოკლება
// ამ მეთოდს გადაეცემა ნებისმიერი რიცხვი და დაგვიბრუნებს ამ რიცხვის მთელ ნაწილს

console.log(Math.trunc(2.2)) // 2
console.log(Math.trunc(3)) // 3
console.log(Math.trunc(10.9)) // 10
console.log(Math.trunc(-2.7)) // -2
console.log(Math.trunc(-9.9)) // -9


// random
// ესეც არის Math ობიექტის მეთოდი, რომელიც 0-დან 1-მდე გვიბრუნებს random რიცხვს
// დაბრუნებული რიცხვი შეიძლება იყოს 0-ის ტოლი, მაგრამ დაბრუნებული რიცხვი 1-ის ტოლი ვერასდროს გახდება
// დაბრუნებული რიცხვი არის ათწილადი

// ფუნქცია, რომელიც 0-დან ჩვენთვის სასურველ რიცხვამდე დაგვიბრუნებს random რიცხვს
const getRandom = limit => {
    return Math.floor(Math.random() * limit)
    // 0-დან limit-მდე ნებისმიერ მთელ რიცხვს მივიღებთ.
};

// ფუნქცია, რომელსაც გადაეცემა მასივი და ამ მასივიდან random ელემენტს გვიბრუნებს
const getRandom2 = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
console.log(getRandom2(["blue", "black", "green", "blue", "green"]))
console.log(getRandom2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))