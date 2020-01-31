class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    
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
    })

    console.log(this.repositories);
  }
}

new App();