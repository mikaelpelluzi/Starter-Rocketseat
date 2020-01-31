class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }
  
  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name:'Repositorio Curso Starter da Rocketseat.com.br',
      description:'Aprimorando os estudos e guardando o conhecimento',
      avatar_url:'https://avatars2.githubusercontent.com/u/52723867?s=460&v=4',
      html_url: 'https://github.com/mikaelpelluzi/Starter-Rocketseat',
    });

    this.render();
  }

  render() {
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let igmEl = document.createElement('img');
      igmEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(igmEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();