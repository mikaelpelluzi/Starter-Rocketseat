/* 1° parte da aula
class TodoList {
    constructor () {
        this.todos = [];
    }

    addTodos() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodos();
}

*/

/* 2° parte da aula
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Mikael';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('novo todo');
}

MinhaLista.mostraUsuario();
*/

class Matematica {
    static soma(a,b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));