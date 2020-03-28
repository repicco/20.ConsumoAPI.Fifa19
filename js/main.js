/* API */
const apiUrl = 'https://fifagama.herokuapp.com/fifa19/0/12'

/* Consumo API */
fetch(apiUrl)
    .then(response => response.text())
    .then(result => {
        const jogadores = JSON.parse(result)

        jogadores.map(jogador => criarCard(jogador.data) )
    })

function criarCard (jogador) {
    const { Name, Age, Photo, Club, Finishing, Agility, Stamina } = jogador

    cont = document.getElementById("App")

    div = document.createElement('div')
    div.className = 'col-md-4'

    card = document.createElement('div')
    card.className = 'card mb-4 bg-dark badge-primary'

    image = document.createElement('img')
    image.className = 'card-img-top'
    image.src = Photo.replace('/4/','/10/')

    cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    cardText = document.createElement('div')
    cardText.className = 'card-text'

    cardFooter = document.createElement('div')
    cardFooter.className = 'card-footer'


    propName = document.createElement('h2')
    propName.className = 'name'
    propName.innerHTML = Name

    propAge = document.createElement('h4')
    propAge.className = 'age'
    propAge.innerHTML = Age

    propClub = document.createElement('h4')
    propClub.className = 'club'
    propClub.innerHTML = Club

    propFinishing = document.createElement('p')
    propFinishing.className = 'finishing'
    propFinishing.innerHTML = `Finalizações: ${Finishing}`

    propAgility = document.createElement('p')
    propAgility.className = 'agility'
    propAgility.innerHTML = `Agilidade: ${Agility}`

    propStamina = document.createElement('p')
    propStamina.className = 'Stamina'
    propStamina.innerHTML = `Folego: ${Stamina}`


    cont.appendChild(div)
    
    div.appendChild(card)
    
    card.appendChild(image)
    card.appendChild(cardBody)
    card.appendChild(cardFooter)
    
    cardBody.appendChild(cardText)
    cardText.appendChild(propName)
    cardText.appendChild(propAge)
    cardText.appendChild(propClub)

    cardFooter.appendChild(propFinishing)
    cardFooter.appendChild(propAgility)
    cardFooter.appendChild(propStamina)
}


var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {

    type: 'bar',
    data: { labels: ['Finalizações', 'Agilidade', 'Stamina'],
    datasets: [{         label: jogador.Name,         data: [Finishing, Agility, Stamina],     },{         label: NameJogador2,         data: [chuteJogador2, VelocidadeJogador2],     }] },
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});