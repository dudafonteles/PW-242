const express = 
require ('express');
const res = require('express/lib/response');
const app = express();
const PORT = 3000;

let Livros = [
    {id: 1, titulo: "Fazendo Meu Filme 1", autor: "Paula Pimenta", editora: "Gutemberg", ano: 2008, quantidade: 3, preco: 70},
    {id: 2, titulo: "Fazendo Meu Filme 2", autor: "Paula Pimenta", editora: "Gutemberg", ano: 2010, quantidade: 1, preco: 60},
    {id: 3, titulo: "Fazendo Meu Filme 3", autor: "Paula Pimenta", editora: "Gutemberg", ano: 2012, quantidade: 1, preco: 50},
    {id: 4, titulo: "Fazendo Meu Filme 4", autor: "Paula Pimenta", editora: "Gutemberg", ano: 2014, quantidade: 1, preco: 50},
    {id: 5, titulo: "Harry Potter: A Pedra Filosofal", autor: "J.K Rowling", editora: "Pottermore Publishing", ano: 1997, quantidade: 5, preco: 59.90},
    {id: 6, titulo: "Uma farsa de amor na Espanha", autor: "Elena Armas", editora: "Arqueiro", ano: 2022, quantidade: 0, preco: 50},
]

app.listen (PORT, () => {
    console.log('Hello API on port 3000');
})

app.get ('/livros', function(req, res) {
    res.json(Livros);
})

app.get ('/livros/editora/:name', function (req, res) {
    res.json(Livros.filter(l => l.editora === req.params.name))
})

app.get ('/livros/titulo/:name', function (req, res) {
    res.json(Livros.filter(l => l.titulo === req.params.name))
})

app.get ('/livros/preco/abaixo/:name', function (req, res) {
    res.json(Livros.filter(l => l.preco < req.params.name))
})

app.get ('/livros/preco/acima/:name', function (req, res) {
    res.json(Livros.filter(l => l.preco > req.params.name))
})

app.get ('/livros/antigos', function (req, res) {
    res.json(Livros.sort((a,b) => a.ano - b.ano))
})

app.get ('/livros/recentes', function (req, res) {
    res.json(Livros.sort((a,b) => b.ano - a.ano))
})

app.get ('/livros/sem-estoque', function (req, res) {
    const livros_sem_estoque = Livros.filter(l => l.quantidade === 0)
    
if (livros_sem_estoque.length = 0) {
    res.json(livros_sem_estoque);
}
else {
    res.status(404).json(({error: 'Livros sem estoque, não encontrado'}))
}

})

app.post()
