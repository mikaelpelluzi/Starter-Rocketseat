// REST

const usuario = {
    nome: 'Mikael',
    idade: 23,
    empresa: 'Uabit'
};

const { nome, ...resto } =  usuario;

console.log(nome);
console.log(resto);