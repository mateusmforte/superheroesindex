export function getHero(){
    const hero = [];
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var urlIdHero = window.location.pathname.slice(9,15);
    fetch(proxyUrl + `https://superheroapi.com/api/2385494458138031/${urlIdHero}`)
    .then(results => results.json())
    .then(data => {
        hero.push(data);
        return hero;
    })
    .catch(err => console.log(err));
}

export function Hello (){
   return "Hello";
}