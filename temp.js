const questions = [];

questions.push(function () {
    const arr = [3,4,1,6];
    arr.forEach(int => {
        console.log(int);
    });
});

questions.push(function () {
    const arr = [3,4,1,6,8];
    console.log(`Questão 2: ${arr[2]}`);
});

questions.push(function () {
    const arr = [3,4,1,6,8];
    arr.push(6);
    arr.shift();
    console.log(`Questão 3: ${arr}`);
});

questions.push(function () {
    const arr = [3,4,1,6,8];
    arr.splice(2,2);
    console.log(`Questão 3: ${arr}`);
});

questions.push(function () {
    const arr1 = [3,6,1];
    const arr2 = [6,4,2];
    const arr3 = arr1.concat(arr2);
    console.log(`Questão 4: ${arr3}`);
});

questions.push(function () {
    const arr = [1,3,5,8,4,3,6];
    const rev = arr.reverse();
    console.log(`Questão 5: ${rev}`);
});

questions.push(function () {
    const arr = [1,3,5,8,4,3,6,8,2,8];
    const sorted = arr.sort();
    console.log(`Questão 6: ${sorted}`);
});

questions.forEach(func => {
    func();
});