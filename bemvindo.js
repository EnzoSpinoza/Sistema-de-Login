// Pega os elementos da página
const titulo = document.getElementById("titulo");
const campoEmail = document.getElementById("email");
const botaoSair = document.getElementById("sair");

// Busca quem está logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

// Se ninguém estiver logado, volta para o login
if (!usuarioLogado) {
  window.location.href = "login.html";
} else {
  titulo.textContent = "Bem-vindo, " + usuarioLogado.nome + "!";
  campoEmail.textContent = "Seu e-mail: " + usuarioLogado.email;
}

// Botão Sair: apaga o login e volta para a página de login
botaoSair.addEventListener("click", function () {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
});
