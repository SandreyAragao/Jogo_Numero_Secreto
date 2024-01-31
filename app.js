        let listaDeNumerosSorteados = [];
        let numeroLimite = 10
        let numeroSecreto = gerarNumeroAleatorio();
        let tentativas = 1;
   
        function exibirTextoNaTela(tag,texto){
            let campo = document.querySelector(tag);
            campo.innerHTML = texto;
            responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});
        }

        function exibirMensagemInicial(){
            exibirTextoNaTela('h1','Jogo do número secreto');
            exibirTextoNaTela('p','Digite um número entre 1 e 10.');

        }
            exibirMensagemInicial();

    //Verificando o chute com condicional
        function verificarChute(){
            let chute = document.querySelector('input').value;

            if(chute == numeroSecreto){
                exibirTextoNaTela('h1', 'Você acertou');
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
                exibirTextoNaTela('p', mensagemTentativas);
    //Pegando elemento por ID e remoçao de atributo do HTML
        document.getElementById('reiniciar').removeAttribute('disabled');

            }else{
                if(chute > numeroSecreto){
                exibirTextoNaTela('p', 'O número secreto é menor .');
            }else{
                exibirTextoNaTela('p', 'O número secreto é maior .');
            }
            tentativas++
            limparCampo();
            }
        }
    //Função de gerador de numero aleatorio
        function gerarNumeroAleatorio() {
         let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
         let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
         if (quantidadeDeElementosNaLista == numeroLimite){
            listaDeNumerosSorteados = [];
         }
    //verificaçao de numeros escolhidos
         if(listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
        }else{
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
    }

    //Função de limpar campo do jogo
        function limparCampo(){
            chute = document.querySelector('input');
            chute.value = '';
        }

    //Função de reiniciar jogo com tudo novo
        function reiniciarJogo(){
            numeroSecreto = gerarNumeroAleatorio();
            limparCampo();
            tentativas = 1;
            exibirMensagemInicial();
            document.getElementById('reiniciar').setAttribute('desabled' , true);
        }


