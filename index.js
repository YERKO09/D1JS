precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

total = document.querySelector(".valor-total");

function btnSuma(){
    cantidad = document.querySelector(".cantidad");
    Aumento = Number(cantidad.innerHTML) + 1
    cantidad.innerHTML = Aumento
    total.innerHTML = Aumento * precio
}

function btnResta(){
    cantidad = document.querySelector(".cantidad");
    Resto = Number(cantidad.innerHTML) - 1
    cantidad.innerHTML = Resto
    total.innerHTML = Resto * precio
}

// document.querySelector(".suma").addEventListener("click", btnSuma);
// document.querySelector(".resta").addEventListener("click", btnResta);

