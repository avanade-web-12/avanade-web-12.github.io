const aereasNacional = [
    'Latam', 
    'Gol',
    'Azul'
];

const airCompanies = [
    ...aereasNacional,
     'Delta', 
     'United Airlines', 
     'Emirates'
];

console.log(airCompanies)

const user = {
    name: 'Geovanna Anjos',
    email: 'g.dos.santos.anjos@avanade.com',
    password: 'aj12bxjeh@uhH_GYFYgdh'
}

const {password, ...data} = user;

console.log('Wowww', data);