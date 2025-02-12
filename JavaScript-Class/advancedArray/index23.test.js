const {getDoubleNumbers,getEvenNumbers, 
    addThreeToEachElement,addIndexToEachElement,getOddNumbers,
    getWordsWithLengthGreaterThanFour,getStudents,getStudentScores,
    addFiveToEachElement,squareEachNumber,assignBooksToMembers} = require("./array")

beforeEach(()=>{
  return numbers = [2,3,4,5,6,7];
});

// const students = [
//     {name: "John", age: 20},
//     {name: "Jane", age: 21},
//     {name: "Alice", age: 19},
//     {name: "Bob", age: 30}
// ]

test("multiply each element by 2",()=>{
    //let numbers = [2,3,4,5,6,7];
    let result = getDoubleNumbers(numbers);
    let answer = [4,6,8,10,12,14];
    expect(result).toEqual(answer);
});

test("Check even numbers",()=>{
    let result = getEvenNumbers(numbers);
    let answer = [2,4,6];
    expect(result).toEqual(answer);

})
test("Add 3 to each element",()=>{
    let result = addThreeToEachElement(numbers);
    let answer = [5,6,7,8,9,10];
    expect(result).toEqual(answer);
})
test("Add index to each element",()=>{
    let result = addIndexToEachElement(numbers);
    let answer = [2,4,6,8,10,12];
    expect(result).toEqual(answer);
})

test("return odd Number", ()=>{
    let result = getOddNumbers(numbers);
    let answer = [3,5,7];
    expect(result).toEqual(answer);
})

test("return words with length greater than 4",()=>{
    let result = getWordsWithLengthGreaterThanFour(["hello","world","javaScript","java","egg"]);
    let answer = ["hello","world","javaScript"];
    expect(result).toEqual(answer);
})
test("return object with age greater than 20",()=>{
    const students = [
        {name: "John", "age": 20},
        {name: "Jane", "age": 21},
        {name: "Alice", "age": 19},
        {name: "Bob", "age": 22}
    ]

    let result = getStudents(students);
    let answer = [{name: "Jane", age: 21},{name: "Bob", age: 22}];
    expect(result).toStrictEqual(answer);

    // let result = students.filter((student)=> student.age > 20);
    // let answer = [{name: "Jane", age: 21}];
    // expect(result).toEqual(answer);
})

test ("return scores greater than or equal to 70",()=>{
    const studentScores = [
        {name: "John", score: 80},
        {name: "Jane", score: 90},
        {name: "Alice", score: 60},
        {name: "Bob", score: 70},
        {name: "Borly", score: 40},
        {name: "titi", score: 60},
        {name: "bibi", score: 90},
        {name: "funmi", score: 20},
        {name: "sola", score: 10},
        {name: "kola", score: 30},
    ]
    let result = getStudentScores(studentScores);
    let answer = [{name: "John", score: 80}, {name: "Jane", score: 90},{name: "Bob", score: 70},{name: "bibi", score: 90}];
    expect(result).toEqual(answer);
})
test ("add 5 to each element",()=>{
    let grade = [85,92,78,88,95]
    let result = addFiveToEachElement(grade);
    let answer = [90,97,83,93,100];
    expect(result).toEqual(answer);
})

test ("return square of esch number",()=>{
    let numbers = [2,4,6,8,10];
    let result = squareEachNumber(numbers);
    let answer = [4,16,36,64,100];
    expect(result).toEqual(answer);
})

test ("assign books to each member",()=>{
    const members = ["Emily","Jack","Sophia","Daniel"]
    const books = ["The Alchemist","The Richest","Rich Dad Poor Dad","The Bible"]
    let result = assignBooksToMembers(members,books);
    let answer = [
        {name: "Emily", book: "The Alchemist"},
        {name: "Jack", book: "The Richest"},
        {name: "Sophia", book: "Rich Dad Poor Dad"},
        {name: "Daniel", book: "The Bible"}
    ]
    expect(result).toEqual(answer);
})
test ("")