"use strict";

var usuario = {
  nome: 'Mikael',
  idade: 23,
  endereco: {
    cidade: 'Belo Horizonte',
    estado: 'MG'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
