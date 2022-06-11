/* const robotron = document.querySelector('#robotron')

robotron.addEventListener('click', (evento) => {
    console.log(evento)
})
 */




const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        console.log(evento.target.parentNode)
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})


function manipulaDados (operacao, controle) {
    const peca = controle.querySelector('.controle-contador')
    console.log(peca)
    if( operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    } else {
        peca.value = parseInt(peca.value) - 1
    }
}
