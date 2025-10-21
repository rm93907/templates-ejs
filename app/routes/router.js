var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    res.render("pages/Home")
});
router.get("/pedidos", function (req, res) {
    res.render("pages/Pedidos")
});
router.get("/admin", function (req, res) {
    res.render("pages/index-adm")
});
router.get("/estoque", function (req, res) {
    res.render("pages/estoque")
});
router.get("/maisvendidos", function (req, res) {
    res.render("pages/MaisVendidos")
});
router.get("/plantas", function (req, res) {
    res.render("pages/plantas")
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

router.get("/detalhesv", function (req, res) {
    res.render("pages/DetalhesV")
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

router.get("/carrinho", function (req, res) {
    res.render("pages/Carrinho")
});

router.get("/pagamento", function (req, res) {
    res.render("pages/Pagamento")
});

router.get("/orquidea", function (req, res) {
    res.render("pages/orquidea")
});

router.get("/alecrim", function (req, res) {
    res.render("pages/alecrim")
});

router.get("/babosa", function (req, res) {
    res.render("pages/babosa")
});

router.get("/cacto", function (req, res) {
    res.render("pages/cacto")
});

router.get("/costeladeadao", function (req, res) {
    res.render("pages/costeladeadao")
});

router.get("/espadadesaojorge", function (req, res) {
    res.render("pages/espadadesaojorge")
});

router.get("/hortela", function (req, res) {
    res.render("pages/hortela")
});

router.get("/jasmim", function (req, res) {
    res.render("pages/jasmim")
});

router.get("/lavanda", function (req, res) {
    res.render("pages/lavanda")
});

router.get("/manjericao", function (req, res) {
    res.render("pages/manjericao")
});

router.get("/samambaia", function (req, res) {
    res.render("pages/samambaia")
});
router.get("/login2", function (req, res) {
    res.render("pages/login2")
});
module.exports = router;