const temperatura = document.querySelector('.input')
const novoValor = document.querySelector('.valor')
const botao = document.querySelector('.botao')

botao.addEventListener('click', (evento) => {
    evento.preventDefault()
    const valorBotao = temperatura.value
    converteValor(valorBotao)
})

function converteValor(valor) {
    let fahrenheit = valor * 1.8 + 32
    const mudaValor = novoValor
    mudaValor.innerHTML = fahrenheit
}
