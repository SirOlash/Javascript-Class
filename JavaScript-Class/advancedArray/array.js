function getDoubleNumbers(arrayOfNumbers) {
    let doubledNumbers = [];
    arrayOfNumbers.forEach((element)=>{
        let answer = element * 2;
        doubledNumbers.push(answer);
    })
    return doubledNumbers;
}

const getEvenNumbers = (arrayOfNumbers) => {
    let evenNumber = [];
    arrayOfNumbers.forEach((element)=>{
        if(element % 2 == 0){
            evenNumber.push(element);
        };
    });
    return evenNumber; 
}

function addThreeToEachElement(arr) {
    let result = arr.map((number)=>number + 3)
    return result;
};

function addIndexToEachElement(arr) {
    let result = arr.map((number,index)=> (number + index));
    return result;
};
const isOdd = (number) => {
    return number % 2 !== 0;
}

function getOddNumbers(array) {
    return array.filter(isOdd);
    //return array.filter((number)=> number % 2 != 0);
}

// function getOddNumbers(arr) {
//     let oddNumber = arr.filter((element)=> element % 2 !== 0);
//     return oddNumber;
// }

const getWordsWithLengthGreaterThanFour = (arrayOfWords) => {
    return arrayOfWords.filter((word)=> word.length > 4);
}
function getStudents(students) {
    return students.filter((student)=> student["age"] > 20);
}

// const getStudents = (students) => {
//     return students.filter((student)=> student.age > 20);
// } 
function getStudentScores(studentScores) {
    return studentScores.filter((student)=> student.score >= 70);
}
function addFiveToEachElement(arr) {
    let result = arr.map((number)=> number + 5);
    return result;
    
}
function squareEachNumber(arr) {
    let result = arr.map((number)=> number * number);
    return result;
}
// function assignBooksToMembers(members,books) {
//     for (const member of members) {
//         member["books"] = books;
//     }
//     return {"book": books,"name": members};

// }



module.exports = {getDoubleNumbers,getEvenNumbers, addThreeToEachElement,
    addIndexToEachElement,getOddNumbers,
    getWordsWithLengthGreaterThanFour,getStudents,getStudentScores,
    addFiveToEachElement,squareEachNumber,assignBooksToMembers,assignBooksToMembers}; 