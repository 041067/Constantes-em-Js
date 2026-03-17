const PRECO_PRODUTO = 30.00; // Preço fixo por produto
const TAXA_ENTREGA = 10.00; // Taxa fixa de entrega

function calcular() {

let quantidade = document.getElementById('quantidade').value
let totalProdutos = quantidade * PRECO_PRODUTO
let totalPedido = totalProdutos + TAXA_ENTREGA

document.getElementById("resultado").innerHTML = 
"Valor total do pedido é: R$ " + totalPedido;

}