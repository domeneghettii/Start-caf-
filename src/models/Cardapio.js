const { v4: uuid4 } = require("uuid");

class Cardapio {
    constructor(id, nome, valor, categoria) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.categoria = categoria;
    }
}

module.exports = Cardapio;