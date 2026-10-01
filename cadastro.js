// Pega os elementos da página
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

// Quando clicar no botão, executa esta função
botao.addEventListener("click", function () {
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const senha = campoSenha.value;

  // Verifica se tudo foi preenchido
  if (nome === "" || email === "" || senha === "") {
    mensagem.textContent = "Preencha todos os campos.";
    return;
  }

  // Busca os usuários já salvos (ou cria uma lista vazia)
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se o e-mail já existe
  const jaExiste = usuarios.some(function (usuario) {
    return usuario.email === email;
  });

  if (jaExiste) {
    mensagem.textContent = "Esse e-mail já está cadastrado.";
    return;
  }

  // Adiciona o novo usuário e salva
  usuarios.push({ nome: nome, email: email, senha: senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensagem.textContent = "Cadastro feito com sucesso! Agora é só entrar.";
});
