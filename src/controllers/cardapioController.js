const Cardapio = require("../models/Cardapio");
const CardapioList = require("../models/cardapiosList");

const lista = new CardapioList();

const cardapio1= new Cardapio(1, 'Herança & Sabor', '15,90', 'Sorvete de Morango');
lista.addCardapio(cardapio1);

lista.addCardapio( new Cardapio(2, 'RetroSabor', '27,99', 'Lasanha a Bolonesa'));

const router = {
    addCardapio: (req, res) => {
        try {
            const { id, nome, valor, categoria } = req.body;
            if(!id || !nome || !valor || !categoria) {
                throw new Error('Preencher todos os campos!')
            }
            const menu = new Cardapio (id, nome, valor, categoria)
            lista.addCardapio(menu);
            res.status(200).json({message: "Criado com sucesso ;)"});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar este cárdapio :(", error});
        }
    },

    getAllCardapios: (req, res) => {
        try {
            const cardapios = lista.getAllCardapios();
            res.status(200).json(cardapios);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar o cárdapio',error});
        }
    },

    getCardapioById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getCardapioById(id));
        } catch (error) {
            res.status(404).json({
                message: 'Erro ao buscar cárdapio por id!',
                error
            });
        }
    },

    updateCardapio: (req, res) => {
        try {
            res.status(200).json(lista.updateaCardapio(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: 'Erro ao atualizar :(', error: error });
        }
    },

    deleteCardapio: (req, res) => {
        try {
            lista.deleteCardapio(req.params.id);
            res.status(200).json({
                message: 'Cárdapio deletado com sucesso!!'
            })
        } catch (error) {
            res.status(404).json('Erro ao deletar cárdapio :(', error);
        }
    },
};

module.exports = router;