let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let numeroDeTentativa = 100


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rete:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogos de número secreto');
    let numeroDeTentativaP = `Escolha um Número entre 1 e ${numeroDeTentativa}`
    exibirTextoNaTela('p', numeroDeTentativaP);
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns você acertou ');
        let palavraTentativa = tentativas> 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute> numeroSecreto){
            exibirTextoNaTela('h1', 'Você erro! Tente novamente.');
            exibirTextoNaTela('p', 'o número secreto é menor');
        }else{
            exibirTextoNaTela('h1', 'Você erro! Tente novamente.');
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
    }tentativas++;
    limparCampo()
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *10 +1);
    let quantidaddeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidaddeDeElementosNaLista == numeroLimite ){
        return gerarNumeroAleatorio = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar'). setAttribute( 'disabled', true);
    }