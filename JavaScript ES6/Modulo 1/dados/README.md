
# Javascript ES6

## Introdução

### O que é ES6?
 ES => EcmaScript
 6 => Versão (no caso o ano +1)
ES6 => ano 2015.

- Todo ano sai um conjunto de regras e normas, e essas normas é que defini as novas funcionalidades do JS.
- A linguagem js antes da versão *ES6* e depois são completamente diferentes, apesar de manter a mesma sintaxe. Isso ocorre devido ao fato de surgimento de novas funcionalidades.
- Em decorrência as novas funcionalidades, muitos navegares tem dificuldades em acompanhar essa evolução, com isso houve o surgimento do **BABEL**, basicamente o que é feito é pegar os códigos essas novas funcionalidades e converter num código que os navegares entenda.

### Funcionalidades que serão vista neste modulo:
- Webpack
- Classes
- Arrow functions
- Desestruturação
- Rest/spread
- Import/export
- Async/await

## Instalando Node & Yarn

### # Chocolatey 
- Chocolatey é um gerenciador de pacotes para Windows, e o que seria ? como o próprio nome já diz, é um gerenciador de pacotes, normalmente quando se pretende fazer uma instalação de algum programa é comumente ir no site baixar o instalador e depois rodar a instalação com "next>", ao instalar dessa maneira muitas vezes a pessoa acaba não sabendo o diretório em que foi salvo e/ou qual versão foi instalada. E é nesse momento que utilizamos um gerenciador, cada sistema operacional possui um, o do windows é o [chocolatey](https://chocolatey.org/install). 
- Na página de instalação terá o passo a passo de como rodar a instalação, porem irei descrever aqui também.

1. Abra o "powershell" em modo administrador (para que tenha permissão de efetuar os comandos).
2.  Obs.: Antes de rodar o comando para a instalação é necessário verificar a politica execução. para isso deve se escrever **Get-ExecutionPolicy**, caso retorne **restricted**, será preciso digitar **Set-ExecutionPolicy Allsinged**.

3. Depois de verificado a politica de execução e tiver a permissão é só inserir o código **Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))**
4. Aguardar alguns minutos e se não houver nenhum erro estará pronto para o uso.
5. Para verificar se ocorreu a instalação corretamente digite **choco -v**. Obs.: caso for necessário feche e abre novamente o *powershell*.

- Após a instalação do **chocolatey**, todas as demais instalações e configurações serão efetuadas pelo chocolatey (package mananer) através do comando no *powershell* ***"choco install" ... ou "cinst" ...***

### #Node
Como um bom estudioso e programador é sempre bom buscar saber mais a fundo sobre as tecnologias envolvidas, então caso queira saber um pouco mais há uma paginá **NodeBR** dando uma breve contextualizada.  [clique aqui e saiba mais sobre Node.js](http://nodebr.com/o-que-e-node-js/)

- Para a instalação do Node via command line:
1. Abra o site [nodejs.com](https://nodejs.org/en/).
2. Vá para **downloads**.
3. Em downloads role o scroll para baixo até o fim e clique em **Installing Node.js via package manager**.
4. Na paginá que se abrirá procure pelo sistema operacional atual do seu computador, aqui no caso será o **Windows**. Ao clicar, será direcionado para a área em que se encontra o comando para executar a instalação.
5.  Insira o comando no *powershell* (modo administrador) "**choco instal nodejs-lts**", deve estar se perguntando do porque o **lts** (long-term support), se trata só de uma versão mais segura, com um suporte mais consolidado.
6. Aguardar o fim de instalação e caso não ocorra nenhum erro, digite o comando **node -v** para a verificação da versão instalada.

### #Yarn

- Para a instalação do Yarn é via command line:
1. Abra o site do yarn na parte [downloads](https://yarnpkg.com/en/docs/install#windows-stable)
2. Leia as instruções.
3. Execute ~~a ordem 66~~ comando `choco install yarn ou cinst yarn`.
3. Após a instalação para verificar a versão só dar o comando **yarn -v**. 

## Configurando Babel.

Para iniciar a instalação e configuração do ambiente com *Babel* iremos executar o comando **yarn init** na pasta raiz do projeto.
  - Após executar o comando será criado um arquivo **package.json**, onde estará armazenados as de dependências do projeto. Os armazenamentos das dependências não serão feitas de modo manual (colocar os códigos diretamente), através de comando no terminal que as dependências serão instaladas.

1° dependência => **yarn add @babel/cli**
2° dependência => **yarn add @babel/preset-env**
3° dependência => **yarn add @babel/core**

- Após as instalações das dependências, para que o babel consiga fazer as conversões de funcionalidades de uma versão atualizada do ES para que todos navegadores consiga entender, é preciso criar um arquivo **.babelrc** e dentro do escrever 
```javascript
{
	"presets": ["@babel/preset-env"]
}
```
**preset-env** => Serve para identificar o ambiente em que está sendo trabalhado (browser, node, react).

- Feito isso, será criado dois arquivos **main.js** e **index.html**.
- Dentro de **package.json** a única adição manual feita será para criar um *script*, que irá iniciar  as aplicações que estão sendo desenvolvidas. No script criado nesse casso é:
```javascript
"script": {
"dev": "babel ./main.js -o .bundle.js -w"
}
```
- dev => será o nome do nosso comando para fazer o *babel* ***converter*** todas as funcionalidades/códigos criadas no arquivo **main.js** em funcionalidades/códigos que todos navegadores consiga  e salvando em um novo arquivo **bundle.js** criado.
-  ***-o*** => comando para armazenar tudo em um novo arquivo.
- ***-w*** => comando para fazer o *babel* monitorar o arquivo **main.js** quando houver uma modificação e atualizar o arquivo **bundle.js**.


> Written with [StackEdit](https://stackedit.io/).
