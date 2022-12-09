import { cities } from "./cities.js"

const searchInput = document.querySelector('.search input')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatches)

function findMatches(wordToMatch, cities) {
    wordToMatch = wordToMatch.normalize('NFD').replace(/\p{Diacritic}/gu, "")
    return cities.filter(city => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return city.nome.normalize('NFD').replace(/\p{Diacritic}/gu, "").match(regex) || city.municipio.microrregiao.mesorregiao.UF.nome.normalize('NFD').replace(/\p{Diacritic}/gu, "").match(regex) || city.municipio.microrregiao.mesorregiao.UF.sigla.match(regex);;
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities)
    const sortedMatches = matchArray.sort( (a, b) => {
        const regex = new RegExp(`^${this.value}`, 'gi')
        if (a.nome.match(regex)) {
            return -1
        } 
        return 1
    })

    if (sortedMatches.length === 0) {
        suggestions.innerHTML = '<li>Nenhuma cidade encontrada</li>'
        return
    }
    
    if (this.value.length === 0) {
        suggestions.innerHTML = '<li>Digite a cidade</li> <li>Ou o Estado</li>'
        return
    }

    while (sortedMatches.length > 10) {
        sortedMatches.pop()
    }
    
    const html = sortedMatches.map(city => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = city.nome.replace(regex, `<span class="mark">${this.value.toLowerCase()}</span>`)
        const stateName = city.municipio.microrregiao.mesorregiao.UF.sigla.replace(regex, `<span class="mark">${this.value.toLowerCase()}</span>`)
        return `
        <li><span>${cityName}, ${stateName}</span></li>`
    }).join('')

    suggestions.innerHTML = html
}