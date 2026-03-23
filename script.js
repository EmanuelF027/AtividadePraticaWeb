// Seleciona elementos do formulário
const form = document.getElementById('formContato');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroMensagem = document.getElementById('erroMensagem');
const mensagemSucesso = document.getElementById('mensagemSucesso');

// Função para validar e-mail com regex simples
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // corrigido: faltava escape do ponto
  return re.test(email);
}

// Limpa mensagens de erro
function limparErros() {
  erroNome.textContent = '';
  erroEmail.textContent = '';
  erroMensagem.textContent = '';
  mensagemSucesso.textContent = '';
}

// Função de validação do formulário
function validarFormulario(event) {
  event.preventDefault(); // Evita envio padrão
  limparErros(); // Limpa erros anteriores

  let formularioValido = true;

  // Validação do nome
  const valorNome = nome.value.trim();
  if (valorNome === '') {
    erroNome.textContent = 'Por favor, preencha seu nome.';
    formularioValido = false;
  } else if (valorNome.length < 3) {
    erroNome.textContent = 'O nome deve ter pelo menos 3 caracteres.';
    formularioValido = false;
  }

  // Validação do e-mail
  const valorEmail = email.value.trim();
  if (valorEmail === '') {
    erroEmail.textContent = 'Por favor, preencha seu e-mail.';
    formularioValido = false;
  } else if (!validarEmail(valorEmail)) {
    erroEmail.textContent = 'E-mail inválido.';
    formularioValido = false;
  }

  // Validação da mensagem
  const valorMensagem = mensagem.value.trim();
  if (valorMensagem === '') {
    erroMensagem.textContent = 'Por favor, escreva sua mensagem.';
    formularioValido = false;
  } else if (valorMensagem.length < 10) {
    erroMensagem.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
    formularioValido = false;
  }

  // Se o formulário estiver válido, exibe mensagem de sucesso
  if (formularioValido) {
    mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';
    form.reset(); // Limpa os campos
  }
}

// Adiciona evento de submit
form.addEventListener('submit', validarFormulario);

// ANIMAÇÃO DOS CARDS AO ROLAR A PÁGINA

const cards = document.querySelectorAll(".card");

function mostrarCards() {

  cards.forEach(card => {

    const posicao = card.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      card.classList.add("mostrar");
    }

  });

}

window.addEventListener("scroll", mostrarCards);

mostrarCards();


// BOTÃO VOLTAR AO TOPO

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", function () {

  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }

});

btnTopo.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
