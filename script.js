//Checking if a number is big

const checkNumber = function(number) {
    if(number > 100) {
        return 'true';
    }
    return 'false';
}

const result = checkNumber(36);
console.log(result);

const result2 = checkNumber(102);
console.log(result2);

//This falls in the 'do something' category


//Bouncer at a club

const peopleCheck = function(age, currentPeople){
    if(age < 18){
        return 'this club is for adults';
    }

    if(currentPeople >= 500){
        return 'it is too busy now, come back later';
    }
    return 'come in';
}

const result3 = peopleCheck(21, 465);
console.log(result3);

const result4 = peopleCheck(37, 500);
console.log(result4);

const result5 = peopleCheck(16, 450);
console.log(result5);


const peopleCheck2 = function(age, currentPeople){
    if(age < 18){
        return 'this club is for adults';
    }
    
    if(currentPeople < 500){
        return 'come in';
    }

    if(currentPeople >= 500){
        return 'it is too busy now, come back later';
    }
}

const result6 = peopleCheck2(16, 350);
console.log(result6);

const result7 = peopleCheck2(43, 500);
console.log(result7);

const result8 = peopleCheck2(36, 450);
console.log(result8);


//This also falle in the 'do something' category



const calculateAverage = function(numbers) {
    return numbers.reduce((a, b) => (a + b)) / numbers.length;
};

const score = calculateAverage([9,8,8,6,7]);
console.log(score);

const grades = calculateAverage([1,2,3,4,5]);
console.log(grades);

const orders = calculateAverage([3,9,12,24,35])
console.log(orders);


//This is a 'produce something' category