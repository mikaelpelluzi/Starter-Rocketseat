const minhaPromise = () => new Promise((resolve, reject) => {
setTimeout(() => {resolve('Show')}, 2000);
});

/* Primeira parte

async function executaPromise() {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}
*/

const executaPromise = async () =>{
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();