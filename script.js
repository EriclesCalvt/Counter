const btnIncrementar$ = document.querySelector('#btn_incrementar');
const btnDecrementar$ = document.querySelector('#btn_decrementar');
const btnZerar$ = document.querySelector('#btn_zerar');


const p$ = document.querySelector('#Contador');

p$.style.color = 'red'

let contador = 0;
p$.innerHTML = contador;

btnIncrementar$.addEventListener('click', () => {
    contador++;
    p$.innerHTML = contador;

} )

btnDecrementar$.addEventListener('click', () => {
    contador--;
    p$.innerHTML = contador;
})

btnZerar$.addEventListener('click', () => {
    p$.innerHTML = 0;
})

console.log(btnIncrementar$);
console.log(p$);