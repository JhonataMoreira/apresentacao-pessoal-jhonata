let nome = prompt("Olá! Qual é o seu nome?");
let apresentacao = document.querySelector("#apresentacao")
let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem")
const frasesBotao = [
  "Aquele que mais sabe, mais lastima o tempo perdido - Dante Alighieri",
  "É muito mais difícil matar um fantasma do que matar uma realidade. - Gaston Leroux",
  "A purificação pelo sofrimento é menos dolorosa que a situação que se cria a um culpado por uma absolvição impensada - Dostoiévski",
  "Tudo o que amei, amei sozinho - Edgar Allan Poe",
  "É certo que sou uma selva<br>e uma noite de escuras árvores<br>mas aquele que não temer a minha obscuridade<br>encontrará sendas de rosas abaixo de meus pés<br>- Nietzsche"
];
let mensagemAtual = 0

botao.addEventListener("click", e => {
  mensagem.textContent = frasesBotao[mensagemAtual];
  mensagem.style.textAlign = 'center';
  if (mensagemAtual === frasesBotao.length - 1) {
    mensagem.innerHTML = frasesBotao[mensagemAtual];
    mensagem.style.fontWeight = 'bold';
    botao.remove();
  } else {
    mensagemAtual++;
    mensagem.style.fontWeight = 'normal';
  }
});


if (nome && apresentacao) {
  apresentacao.textContent = `Olá ${nome}! Meu nome é Jhonata, tenho 28 anos e sou de Piraí do Sul, Paraná. 
        Atualmente, meus principais interesses giram em torno da programação 
        bem como a própria graduação, seguir a carreira de programador, 
        conseguir um estágio e em projetos pessoais envolvendo diferentes
        tecnologias, especialmente Back-end com Java.`;
}