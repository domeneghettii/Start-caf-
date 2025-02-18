const express = require("express");
const router = express.Router();
const cardapioController = require("../controllers/cardapioController")

router.get("/cardapios", cardapioController.getAllCardapios);
router.post("/cardapios", cardapioController.addCardapio);
router.put("/cardapios/:id", cardapioController.updateCardapio);
router.delete("/cardapios/:id", cardapioController.deleteCardapio);
router.get("/cardapios/:id", cardapioController.getCardapioById);

module.exports = router;