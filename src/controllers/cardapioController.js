const listaCardapios = require("../models/ListaCardapios");

const listaCardapios = (req, res) => {
    res.json(listaCardapios.listarCardapios());
};

const adicionarCardapio = (req, res) => {
    const { id, nome, valor, categoria } = req.body;
    if (!id || !nome || !valor || !categoria) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios."});
    }
    const novoCardapio = listaCardapios.adicionarCardapio(id, nome, valor, categoria);
    res.status(201).json(novoCardapio);
};

const buscarCardapio = (req, res) => {
    const cardapio =
    listaCardapios.buscarCardapioPorId(parseInt(req.params.id));
        if (!cardapio) {
            return res.status(404).json({ error: "Cardapio não encontrado!"});
        }
        res.json(cardapio);
};

const removerCardapio = (req, res) => {
    const cardapioRemovido =
    listaCardapios.removerLivro(parseInt(req.params.id));
        if (!cardapioRemovido) {
            return res.status(404).json({ erro: "Cardapio não encontrado!"});
        }
        res.json({ mensagem: "Cardapio removido com sucesso!"})
}