const cep = document.querySelector("#cep");

const showData = async (result)=>{
    for(const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur",async (e) => {
    let search = cep.value.replace('-', '');

    if(search < 8 || isNaN(search)){
        alert('CEP inválido');
        cep.value = ""
        return
    }

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options)

    const json = await resultado.json()
    showData(json)
})

// async/await, são primos
//onde o await tá o async tem que tá
//viacep.com.br


    //assynchronus javascript and xml - AJAX
    //é o processo

    //fetch vai gerar uma promise. Promessa de algo que vai acontecer
    //certo: retorna o resultado
    //erro: retorna um resultado
    //promise pode dar certo ou errado
//o evento blur significa que clicamos na caixa de texto e saimos dela

