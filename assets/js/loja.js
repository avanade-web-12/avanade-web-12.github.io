const produto = document.querySelector('#produto');

produto.addEventListener("blur", async (e) => {
    const options = {
        method:"GET",
        mode:"cors",
        cache:"default"
    }



    const items = await fetch(`https://dummyjson.com/products?limit=10`, options)
    const json = await items.json();
    console.log(json)

    let itens = document.querySelector(".itens")
    json.forEach(lojaItems => {
        itens += `<div class="col-img"> <label>${lojaItems.title}</label> <span>${lojaItems.description}</span>>`
    })

    
})

