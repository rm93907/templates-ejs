var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    res.render("pages/Home")
});
router.get("/MVendidos", function (req, res) {
    res.render("pages/MaisVendidos")
});
router.get("/plantas", function (req, res) {
    res.render("pages/Plantas")
});
router.get("/vasos", function (req, res) {
    res.render("pages/Vasos")
});
router.get("/promocoes", function (req, res) {
    res.render("pages/Promocoes")
});
router.get("/presentear", function (req, res) {
    res.render("pages/Presentear")
});

router.get("/detalhes", function (req, res) {
    res.render("pages/Detalhes")
});

router.get("/login", function (req, res) {
    res.render("pages/Login")
});

router.get("/carrinho", function (req, res) {
    res.render("pages/Carrinho")
});

router.get("/pagamento", function (req, res) {
    res.render("pages/Pagamento")
});

module.exports = router;