console.log('javascript no frontend')

const cotacoesForm = document.querySelector('form')
const mainMessage = document.querySelector('h3')
const price = document.querySelector('#price')
const price_open = document.querySelector('#price_open')
const day_high = document.querySelector('#day_high')
const day_low = document.querySelector('#day_low')

cotacoesForm.addEventListener('submit', (event) => {
    mainMessage.innerHTML = 'Buscando...'
    event.preventDefault()
    const ativo = document.querySelector('input').value

    mainMessage.innerHTML = ''
    price.innerHTML =  ''
    price_open.innerHTML = ''
    day_high.innerHTML = ''
    day_low.innerHTML = ''

    if(!ativo){
        mainMessage.innerHTML = 'O ativo deve ser informado'
        console.log('O ativo deve ser informado')
        return;
    }

    fetch(`/cotacoes?ativo=${ativo}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                mainMessage.innerHTML = `Alguma coisa deu errado`
                price.innerHTML = `${data.error.mensage} / código ${data.error.code}`
            } else {
                mainMessage.innerHTML = data.symbol
                price.innerHTML =  `PRICE: ${data.price}`
                price_open.innerHTML = `OPEN: ${data.price_open}`
                day_high.innerHTML = `HIGH: ${data.day_high}`
                day_low.innerHTML = `LOW: ${data.day_low}`

            }
        })
    })
})
