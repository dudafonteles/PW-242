let contadorCarrinho = 0;

function adicionarAoCarrinho(nomeProduto) {
    contadorCarrinho++;
    document.getElementById("contadorCarrinho").innerText = contadorCarrinho;
    alert(`${nomeProduto} adicionado ao carrinho!`);
}

function mostrarContato() {
    alert("Contato: karinefonteles09@gmail.com",
        "(85) 9 88381412"
    );
}

function sobreNos() {
    window.location.href = 'https://www.instagram.com/amigumania_/';
}
    


function mostrarCarrinho() {
    alert("Você tem " + contadorCarrinho + " itens no carrinho.");
}
