export const getLukeSkywalker = function() {
    return fetch('http://swapi.co/api/people/1')
    .then(res => res.json())
}

export const getPeople = function(){
    return fetch('http://swapi.co/api/people/')
    .then(res => {
         return res.json()
    })
}

export const getShips = function(){
    return fetch('http://swapi.co/api/starships/')
    .then(res => {
        return res.json()
    })
}

export const getPlanets = function() {
    return fetch('http://swapi.co/api/planets/')
    .then(res => {
        return res.json()
    })
}
