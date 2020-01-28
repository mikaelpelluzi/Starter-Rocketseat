// REST

const usuario = {
    nome: 'Mikael',
    idade: 23,
    empresa: 'Uabit'
};

const { nome, ...resto } =  usuario;

console.log(nome);
console.log(resto);

function soma1(a, b, c) {
    return a + b + c;
}
console.log(1,3,5);

function soma2( ...params) {
    return params;
}

console.log(soma(1,2,4,5,7,8,9));

// SPREAD

const arr1 = [1,3,5];
const arr2 = [2,4,6];

const arr3 = [ ...arr1, ...arr2];

const usuario1 = {
    nome: 'André',
    idade: 23,
    empresa: 'Uabit'
};

const usuario2 = { ...usuario1, nome: 'Mikael'};
console.log(usuario2);
