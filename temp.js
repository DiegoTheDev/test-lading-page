/* 
    1 - João tem 17 maçãs e vende cada uma por R$ 0,50. Quanto ele ganhou?
*/
function quest1() {
    var qnt = 17; // Quantidade de maçãs.
    var price = 0.5; // Preço das maçãs.

<<<<<<< Updated upstream
    var total = qnt*price; // O valor total que ele ganha. 
=======
questions.push(function () {
    const arr = [567,532,68,123];
    arr.forEach(int => {
        console.log(int);
    });
});
>>>>>>> Stashed changes

    console.log(`1  | João ganhou ${total} com a venda das maçãs.`);
}

/*
    2 - Maria tem R$ 200 e gastou R$ 75 no mercado. Calcule quanto sobrou.
*/
function quest2() {
    var money = 200;
    money -= 75;

<<<<<<< Updated upstream
    console.log(`2  | Sobrou ${money} do 200 após Maria gastar.`);
}

/* 
    3 - Pedro comprou 3 camisetas por R$ 45 cada uma. Qual o valor total da compra?
*/
function quest3() {
    // NOTE: Estou reutilizando as var sobre escrevendo seu contexto e valor.
    qnt = 3;
    price = 45;
    total = qnt*price;

    console.log(`3  | O valor total foi ${total}.`);
}

/*
    4 - Ana tem 10 anos. Daqui a quantos anos ela terá 18?
*/
function quest4() {
    var age = 10;
    var goal = 18;
    total = goal-age;

    console.log(`4  | Ana terá 18 anos em ${total} anos.`);
}

/*
    5 - Um carro percorre 60 km em 1 hora. Quantos quilômetros ele percorrerá em 4 horas?
*/
function quest5() {
    var KmPerHour = 60;
    var hours = 4;
    total = KmPerHour*hours;
    console.log(`5  | O carro percorrerá ${total}km em total.`);
}

/*
    6 - Lucas tinha 50 figurinhas, ganhou 12 de um amigo e depois ganhou mais 8. Com quantas figurinhas ele ficou?
*/
function quest6() {
    total = 50; // Tinha.
    total += 12; // Ganhou.
    total += 8; // Ganhou mais.
    
    console.log(`6  | Lucas ficou com ${total} figurinhas em total.`);
}

/*
    7 - Se um trabalhador ganha R$ 25 por hora e trabalha 8 horas por dia, quanto ele ganha em 5 dias?
*/
function quest7() {
    var perHour = 25;
    var hoursPerDay = 8;
    var totalDaysWorked = 5;
    total = (perHour*hoursPerDay)*totalDaysWorked;
    console.log(`7  | O trabalhado ganhou ${total} pelos seus ${totalDaysWorked} dias.`);
}

/*
    8 - Uma caixa tem 24 lápis. Se cada aluno recebe 3 lápis, para quantos alunos a caixa é suficiente?
*/
function quest8() {
    var totalBox = 24;
    var pencilPerStudent = 3;
    total = totalBox/pencilPerStudent;
    console.log(`8  | A caixa da até ${total} estudantes.`);
}

/*
    9 - Julia fez uma prova de 3 matérias e tirou as notas 7, 8 e 9. Qual foi sua média?
*/
function quest9() {
    var grades = [7,8,9];
    total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    
    total /= grades.length;
    console.log(`9  | A media de Julia é ${total}.`);
}

/*
    10 - Um celular custa R$ 1.200. Com um desconto de 10%, qual o valor final do celular?
*/
function quest10() {
    total = 1200;
    var percent = 10;
    var discount = total*(percent/100);
    total -= discount;
    console.log(`10 | O valor final do celular é ${total}.`);
}

/*
    11 - Um produto custa R$ 150 e foi parcelado em 5 vezes. Qual o valor de cada parcela?
*/
function quest11() {
    total = 150;
    var parcela = 5;
    total /= parcela;
    console.log(`11 | O valor de cada parcela é ${total}.`);
}

/*
    12 - Bruno tem 2 cachorros e 3 gatos. Usando Calcule quantas patas eles têm ao todo (cada animal tem 4 patas).
*/
function quest12() {
    var cat = 3;
    var dog = 2;
    var paws = 4;
    total = (cat*paws)+(dog*paws);
    console.log(`12 | O total de patas é ${total}.`);
}

/*
    13 - Um restaurante vende marmitas por R$ 18 cada. Quantas marmitas podem ser compradas com R$ 200?
*/
function quest13() {
    price = 18;
    var money = 200;
    total = Math.floor(money/price);
    console.log(`13 | Da para comprar ${total} com ${money}.`);
}

/*
    14 - Uma garrafa tem 2 litros de água. Se João bebe 300 ml por dia, em quantos dias ele acaba a água?
*/
function quest14() {
    total = 2000; // 2 litros em ml.
    var mlPerDay = 300;
    total /= mlPerDay;
    total = Math.round(total);
    console.log(`14 | João acaba com a agua em ${total} dias.`);
}

/*
    15 - Se um videogame custa R$ 2.500 e João economiza R$ 250 por mês, em quantos meses ele conseguirá comprar?
*/
function quest15() {
    var goal = 2500;
    var perMonth = 250;
    total = goal/perMonth;
    console.log(`15 | João terá o dinheiro em ${total} meses.`);
}

// Caller
quest1();
quest2();
quest3();
quest4();
quest5();
quest6();
quest7();
quest8();
quest9();
quest10();
quest11();
quest12();
quest13();
quest14();
quest15();
=======
questions.push(function () {
    const arr = [3,4,1,6,8];
    arr.splice(2,1);
    console.log(`Questão 4: ${arr}`);
});

questions.push(function () {
    const arr1 = [3,6,1];
    const arr2 = [6,4,2];
    const arr3 = arr1.concat(arr2);
    console.log(`Questão 5: ${arr3}`);
});

questions.push(function () {
    const arr = [1,3,5,8,4,3,6];
    const rev = arr.reverse();
    console.log(`Questão 6: ${rev}`);
});

questions.push(function () {
    const arr = [1,3,5,8,4,3,6,8,2,8];
    const sorted = arr.sort();
    console.log(`Questão 7: ${sorted}`);
});

questions.forEach(func => {
    func();
}); 
>>>>>>> Stashed changes
