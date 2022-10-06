//console.log(nome, "chamando a variavel usando o var");

//var nome = "Avanade";


escreve('oi geovanna')
function escreve(x){
    console.log(x)
}

/*
4 tipos de funções:

função nominal:
sofre hoisting, começa com function, é a mais antiga
*/

function mudaTitulo(novoTitulo){
   document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("Geovanna Anjos");

/*expressão de função
 quando criamos uma varíavel ou constante 
 onde o valor dela é uma função;

*/

const mudaTitulo2 = function(target, novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo
}

mudaTitulo2("h2","Merida")

//arrow function
//não acessa arguments
//não existe this na arrow f, só na nominal
const relogio = () => {
    const date = new Date()
    mudaTitulo2('h2',date.toLocaleTimeString())
}
setInterval(relogio,1000)

//função anonima:
//não tem nome
//função anonima precisa de um contexto


const frases = [
    'Um banco para 20 milhões de pessoas', 
    'C6 Bank o seu banco',
    'Cartão de crédito sem anuidade' 
]

const mudaFrase = (target, frases, tempo) => {
let total = 0
    setInterval(()=>{
        document.querySelector(target).innerHTML = 
            frases[total >= frases.length - 1 ? (total = 0) : (total +=1)]
    },tempo * 1000);
}

mudaFrase('h1',frases, 4)
// h1 - onde target
// frases - Array
// 4 - segundos
