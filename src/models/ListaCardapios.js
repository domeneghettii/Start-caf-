const Cardapio = require("./Cardapio");

class ListaCardapios {
    constructor() {
        this.cardapios = [];
        this.proximoId = 1;
    }

    adicionarCardapio(id, nome, valor, categoria) {
        const novoCardapio = new Cardapio(this.proximoId++, id, nome, valor, categoria);
        this.cardapios.push(novoCardapio);
        return novoCardapio;
    }

    ListaCardapios() {
        return this.cardapios;
    }

    buscarCardapioPorId(id) {
        return this.cardapios.find(cardapio => cardapio.id === id);
    }

    removerCardapio(id) {
        const index = this.cardapios.findIndex(cardapio => cardapio.id === id);
        if (index !== -1) {
            return this.cardapios.splice(index, 1)[0];
        }
        return null;
    }

    updateCardapio(id, updateData) {
        const cardapio = this.buscarLivroPorId(id);
        if (!cardapio) return null;
        Object.assign(cardapio, updateData);
        return cardapio;
    }
}

module.exports = new ListaCardapios();
