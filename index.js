precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let count = 0;
const precioPorProducto = 400000;

function updateCounter() {
    document.getElementById("cantidad").innerText = count;
    updateTotal();
}

function increment() {
    count++;
    updateCounter();
}

function decrement(){
    if (count >0){
        count--;
        updateCounter();
    }
}

function updateTotal(){
    const total = count * precioPorProducto;
    document.getElementById("valor-total").innerText = total;
}