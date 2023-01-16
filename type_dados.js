//  NUMERS  
const meuNumero = 3;

// ---------- simple operations ----------
const primeiroNumero = 2;
const segundoNumero = 2;
const operacionAdicion = primeiroNumero + segundoNumero;
const operacionSubtracion = primeiroNumero - segundoNumero;
const operacionMultiplication = primeiroNumero * segundoNumero;
const operacionDivision = primeiroNumero / segundoNumero;

// ---------- numbers floats ----------
const numberFloating = 3.3;
const numberScore_zero = .5;
const operacionFloat = numberFloating / numberScore_zero ;

// NaN -> Not number
const not_Numer = 'Lucas'

// Infinity
const numerOne = 20
const nunberTwo = 0

console.log(`
[ ------- NUMEROS & OPERÇÃOES ------- ]
\n - Adição >> ${operacionAdicion} 
 - Subtração >> ${operacionSubtracion} 
 - Multiplicação >> ${operacionMultiplication} 
 - Divisão >> ${operacionDivision}
 - Numero Flutuante >> ${operacionFloat}
 - Não é um numero quando ${meuNumero} * ${not_Numer} = ${meuNumero*not_Numer}
 - Java sendo JavaScript >> ${numerOne/nunberTwo}
`);

// STRING
const text = 'Hello word !';
const stringNumer = '123456';

console.log(`
[ ------- STRINGS ------- ]
\n- A mais conchecida >> ${text}
- String contendo numero >> ${stringNumer} 
- Concatenando >> ${text + stringNumer }
`);

// BOOLEAN 
const numSimple = 7
console.log(`
[ BOOLEAN ]
 ------ ${meuNumero} & ${numSimple} ------
 - É do mesmo tipo "===" ${meuNumero===numSimple}
 - ${meuNumero} é maior ">" ${numSimple} : ${meuNumero>numSimple}
 - ${meuNumero} é menor ">" ${numSimple} : ${meuNumero<numSimple}
`);