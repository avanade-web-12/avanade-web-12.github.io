const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

//quem é o target?
//quem.addEventListener('evento', (evento) => {});

tooltip.addEventListener("mouseover", (e) => {
    console.log('geovanna');
    console.log('Altura da página', body.clientHeight);
    console.log('Largura da página', body.clientWidth)
    console.log('Altura do tooltip', tooltip.clientHeight);
    console.log('Largura do tooltip', tooltip.clientWidth);
    console.log('Altura do mouse', e.clientY);
    console.log('Largura do mouse', e.clientX);

    if(document.querySelector('.tooltip')){
        document.querySelector('.tooltip').remove()
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add('tooltip');
    newDiv.innerHTML = "tooltip das dicas, ghost";
    newDiv.style.position = "absolute";
    newDiv.style.bottom = e.clientY + "px";
    newDiv.style.left = (e.clientHeight + 200 > body.clientWidth? e.clientX - 210 : e.clientx + 200) + '500px';
    newDiv.style.padding = '18px'
    newDiv.style.display = "block";
    header.appendChild(newDiv);
});

tooltip.addEventListener('mouseout', (e) => {
    if(document.querySelector('.tooltip')){
        document.querySelector('.tooltip').remove()
    }
})