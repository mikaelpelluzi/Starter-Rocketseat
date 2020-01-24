const usuario = {
    nome: 'Mikael',
    idade: 23,
    endereco: {
        cidade: 'Belo Horizonte',
        estado: 'MG',
    },
};

function mostraNome({nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuario);