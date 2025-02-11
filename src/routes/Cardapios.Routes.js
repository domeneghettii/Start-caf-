const express = require("express");
const router = express.Router();
const cardapiosController = require("../controllers/cardapioController");

router.get("/", cardapiosController.listarCardapios);
router.post("/", cardapiosController.adicionarCardapio);
router.get("/:id", cardapiosController.buscarCardapios);
router.delete("/:id", cardapiosController.removerCardapios);
router.put("/:id", cardapiosController.updateCardapios);

module.exports = router;
