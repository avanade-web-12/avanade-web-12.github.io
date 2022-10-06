const carros = document.querySelector("#carros");
const itens = document.querySelector("#items-menu")

const carrosArray = [
    "Chevrolet",
    "Fiat",
    "Ford", 
    "Honda", 
    "Hyundai", 
    "Kia", 
    "Mazda", 
    "Mercedes-Benz", 
    "Nissan", 
    "Peugeot", 
    "Renault", 
    "Toyota", 
    "Volkswagen"
];

const items = [
    "Venda na Amazon",
    "Mais vendidos",
    "Ofertas do dia",
    "Atendimento ao cliente",
    "Prime",
    "Música",
    "Livros"
]

carrosArray.forEach((value, key) => {
    carros.innerHTML += `<option value="${key}">${value}</options>`
});

items.forEach((value)=> {
    itens.innerHTML += `<li><a href="#">${value}</a></li>`
})

const newTimes = ["Bulls", "GoldenState", "Warriors", "Lakers"]
newTimes.push("NBA")
newTimes.unshift("M.B.Jordan")
newTimes.pop('lakers')
//console.log(newTimes, "newTimes")

const nomeCompleto = "Geovanna dos Santos Anjos"
const nomeArray = nomeCompleto.split('')
const nomeUSA = [nomeArray.at(-1), nomeArray[0]].join(', ');


const primeiro = newTimes.slice(0, 3)
//console.log(primeiro, 'remove um ')
//console.log(nomeUSA, "Formato americano")

console.log('-----------------------------------------------')

const filtro = function (item){
    return item === "Pera" || item === "Maçã";
}

//const frutasMap = frutas.map(filtro); //retorna um novo array com os intens filtrados
//console.log(frutasMap)

const ages = [12, 4, 50, 22, 21, 26, 32, 1, 5, 9, 11, 91, 19, 69]
const agesFilter = ages.filter((age) => age >= 18 && age <= 60);
console.log(agesFilter, "adulto")

const agesMap = ages.map((age)=>{
    if (age >= 0 && age <= 2){
        return "bebe"
    }else if (age >= 12 && age <= 17){
        return "criança"
    }else if (age >= 18 && age <= 60){
        return "adulto"
    }else {
        return "idoso"
    }
})

const agesFind = ages.find((age) => age > 60)
console.log(agesFind, "idoso")