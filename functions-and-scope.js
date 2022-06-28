// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.


// EIGEN NOTES ******************************************************************************
// [] STAP 1 - functie schrijven
// [] STAP 2 - (lijst met) namen van studenten
// [] STAP 3 - lijst met eindcijfers van studenten
// [] STAP 4 - checken of de namen van studenten overeenkomen met de lijsten met eindcijfers
// [] STAP 5 - itereren over de eindcijfers heen
// [] STAP 6 - verzameling bundelen
// *******************************************************************************************


/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// EIGEN NOTES ******************************************************************************
// INPUT
// alle cijfers opgeven

// OUTPUT
// cijfers groter of gelijk aan 8

// STAPPENPLAN:
// 1. variabele declareren voor lijst met alle cijfers
// 2. cijfers ophalen door middel van een for-loop: met for-loop kan ik iedere waarde van de array itereren op conditie i >= 8
// 3. .length gebruiken zodat ieder waarde wordt gechekt, ook als die 100 entries bevat
// 4. cijfers die >= 8 uit de lijst uithalen en ergens bijhouden???
// *******************************************************************************************

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let output = 0; //note: 0 is initiele beginwaarde!

for (let i = 0; i < grades.length; i++) {
   if (grades[i] >= 8) {
       output = output + 1; // output += 1; kan ook!
  }
}console.log(output);



/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude (gradesArray) {
    let output = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] >= 8) {
            output = output + 1;
        }
    } return output;
}
console.log(cumLaude([6, 4, 5]));



/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// EIGEN NOTES 2a ******************************************************************************
// [] STAP 1 - om gemiddelde te berekenen moeten alle cijfers uit een array bij elkaar opgeteld worden, en dan verdeeld door lenghts van de array (totaal # items)
// [] STAP 2 - alle cijfers + total aantal cijfers (hoeveel cijfers zijn er in een array?)
// [] STAP 3 - met .length methode (?)
// *******************************************************************************************
// ---- Verwachte uitkomst: 6.642857142857143


const grades2 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
// console.log(grades2.length) //geeft 14

//let sum = 0;  // console.log(sum); //geeft 93
let average = 0; // average = sum / grades2.length;

for (let i = 0; i < grades2.length; i++) {
 //   average = sum += grades2[i] / grades2.length;
    average += grades2[i]; //average = average + grades2[i];
}

//console.log(average); //geeft 6.642857142857143
console.log(average / grades2.length);



/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143 [-]
// averageGrade([6, 4, 5]) geeft 1.5714285714285716 [-]
// averageGrade([8, 9, 4, 6, 10]) geeft 2.5714285714285716 [-]


//TRY 1 [-]
// function averageGrade (gradesArray) {
//    let sum = 0;
//    let average = 0;
//    for (let i = 0; i < gradesArray.length; i++) {
//        average = sum += grades2[i]; //????EXPLAIN to myself :(!
//    } return average;
// }

// console.log(averageGrade([8, 9, 4, 6, 10] ));


//TRY 2

function averageGrade (gradesArray) {

let average = 0;  //initiele waarde
for (let i = 0; i < gradesArray.length; i++) {
    average = average + gradesArray[i]; //average += gradesArray[i];
}
return average / gradesArray.length ;
}
console.log(averageGrade([6, 4, 5])); //[6, 4, 5] geeft ===> 5 //[8, 9, 4, 6, 10] geeft ===> 7.4



/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

//**TRY 1 gives what I need but is this the right way???
const averageDecimal = 2.5714285714285716;
console.log(averageDecimal);
const twoDecimals = averageDecimal.toFixed(2);
console.log(twoDecimals);

//**TRY2 gives ===> [Function: twoDecimals]
// function twoDecimals (averageGrade) {
//    let decimals = 0;
//    for (let i = 0; i < averageGrade.length; i++) {
//        decimals = averageGrade.toFixed(2);
//    } return decimals;
// }
// console.log(twoDecimals);

//**TRY3 gives ===> averageGrade.toFixed is not a function
// let decimal = 0;
// for (let i = 0; i < averageGrade.length; i++) {
//    decimal = averageGrade.toFixed(2);
// }
// console.log(decimal);



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

function highestGrade (gradesArray) {
let outcome = 0;
for (let i = 0; i < gradesArray.length; i++) {
    if (gradesArray[i] > outcome) {
        outcome = gradesArray[i]  //don't fully get this part!!
    }
} return outcome;
}
console.log(highestGrade([6, 4, 5]));




// EIGEN NOTES 3a ******************************************************************************
// STAP 1 - for-loop, .length
// STAP 2 - welke conditie? if (gradesArray[i] > average;
// STAP 3 - return average
// *******************************************************************************************



/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
