const resultado = document.querySelector("#resultado")

let myFunc = {
    showArguments(){
        resultado.innerHTML = arguments
        console.log(arguments)
    }
}

myFunc.showArguments(
    'bmw',
    'fiat',
    'mercedes',
    'volks',
    'maseratti',
    'porche'
)

let myFunc2 = {
    showArguments2:() => {
        resultado.innerHTML = arguments
        console.log(arguments)
    }
}

// myFunc.showArguments2(
//     'uno',
//     'city',
//     'honda',
//     'ferrari',
//     'jeep',
//     'porche'
// )

let user = {
    name: 'Geovanna Anjos',
    usandoArrow: () => {
        console.log(`meu nome é ${this.name}, com Arrow`)
    },
    usandoNominal () {
        console.log(`meu nome é ${this.name}, com Nominal`)
    }
}
user.usandoArrow();
user.usandoNominal();

let soma = (a,b) => {
    console.log(a + b);
}
let soma2 = function(a,b){
    console.log(a + b)
}

//new soma(50,20)
new soma2(50,20)