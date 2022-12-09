const endpoint = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos'

export const cities = []
fetch(endpoint)
.then(data => data.json())
.then(data => cities.push(...data))