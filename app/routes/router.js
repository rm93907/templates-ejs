var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    res.render("pages/index")
});
router.get("/sobre-api", function (req, res) {
    res.render("pages/sobre-api")
});
router.get("/banco-de-dados", function (req, res) {
    res.render("pages/banco-de-dados")
});
router.get("/autenticacao", function (req, res) {
    res.render("pages/autenticacao")
});
router.get("/servidor", function (req, res) {
    res.render("pages/servidor")
});




module.exports = router;