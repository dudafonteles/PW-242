const mongoose = require('mongoose');
const Product = require('../models/product');
require('dotenv').config();

const products = [
    { name: "Pulseira Azul", description: "Feita à mão", price: 29.90, image: "/images/Azul.jpg" },
    { name: "Pulseira Casual", description: "Estilo artesanal", price: 34.90, image: "/images/Casual.jpg" },
    { name: "Pulseiras em Conjunto", description: "Design único", price: 39.90, image: "/images/Conjunto.jpg" }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("✨ Banco de dados populado com sucesso!");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Erro ao popular o banco:", error);
        mongoose.connection.close();
    }
}

seedDB();
