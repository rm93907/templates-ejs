const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

/* ======== VALIDADORES ======== */

// Validação de login
const validateLogin = [
  body("email")
    .trim()
    .notEmpty().withMessage("O e-mail é obrigatório.")
    .isEmail().withMessage("Digite um e-mail válido."),
  body("senha")
    .notEmpty().withMessage("A senha é obrigatória.")
    .isLength({ min: 6 }).withMessage("A senha deve ter pelo menos 6 caracteres."),
];

// Validação de cadastro
const validateCadastro = [
  body("email")
    .trim()
    .notEmpty().withMessage("O e-mail é obrigatório.")
    .isEmail().withMessage("E-mail inválido."),
  body("senha")
    .notEmpty().withMessage("A senha é obrigatória.")
    .isLength({ min: 8 }).withMessage("A senha deve ter pelo menos 8 caracteres.")
    .matches(/\d/).withMessage("A senha deve conter ao menos um número.")
    .matches(/[A-Z]/).withMessage("A senha deve conter ao menos uma letra maiúscula."),
  body("confirmar")
    .notEmpty().withMessage("É necessário confirmar a senha.")
    .custom((value, { req }) => {
      if (value !== req.body.senha) {
        throw new Error("As senhas não conferem.");
      }
      return true;
    }),
];

/* ======== ROTAS ======== */

// Página de login/cadastro
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// Login
router.post("/login", validateLogin, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, senha } = req.body;

  // Simulação de autenticação
  if (email === "teste@florlo.com" && senha === "Senha123") {
    return res.json({ message: "Login realizado com sucesso!" });
  } else {
    return res.status(401).json({ message: "E-mail ou senha incorretos." });
  }
});

// Cadastro
router.post("/cadastro", validateCadastro, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email } = req.body;
  // Aqui você salvaria o usuário no banco de dados
  return res.json({ message: `Usuário ${email} cadastrado com sucesso!` });
});

/*





*/ 

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