/* const robotron = document.querySelector('#robotron')

robotron.addEventListener('click', (evento) => {
    console.log(evento)
})
 */


const braco = document.querySelector('#braco')

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        console.log(evento.target)
        manipulaDados(evento.target.textContent)
    })
})


function manipulaDados (operacao) {
    if( operacao === "+") {
        braco.value = parseInt(braco.value) + 1
    } else {
        braco.value = parseInt(braco.value) - 1
    }
}
