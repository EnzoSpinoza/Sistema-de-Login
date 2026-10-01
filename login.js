// Pega os elementos da página
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

// Quando clicar no botão, executa esta função
botao.addEventListener("click", function () {
  const email = campoEmail.value.trim();
  const senha = campoSenha.value;

  // Verifica se tudo foi preenchido
  if (email === "" || senha === "") {
    mensagem.textContent = "Preencha e-mail e senha.";
    return;
  }

  // Busca os usuários salvos no cadastro
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Procura um usuário com esse e-mail e essa senha
  const usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.email === email && usuario.senha === senha;
  });

  if (!usuarioEncontrado) {
    mensagem.textContent = "E-mail ou senha incorretos.";
    return;
  }

  // Guarda quem está logado e vai para a página de boas-vindas
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
  window.location.href = "bemvindo.html";
});
