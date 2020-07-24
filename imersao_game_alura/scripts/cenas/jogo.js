class Jogo{

    constructor(){

        this.indice = 0;

        this.mapa = fita.mapa;
    }

    setup(){

        cenario     = new Cenario(imagemCenario, 3);

        pontuacao   = new Pontuacao();
        personagem  = new Personagem(matriz, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        vida        = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        const inimigo       = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
      
        inimigos.push(inimigo, inimigoGrande, inimigoVoador);      
    }

    keyPressed(){
        personagem.teclaPressionada(key, somDoPulo);
    }

    draw(){

        cenario.exibe();
        cenario.move();
      
        personagem.exibe();
        personagem.aplicaGravidade();
      
        pontuacao.exibe();
        pontuacao.adicionarPonto();

        vida.draw();
      
        const linhaAtual      = this.mapa[this.indice];
        const inimigo         = inimigos[linhaAtual.inimigo];
        const inimigoVisivel  = inimigo.x < -inimigo.largura;
      
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();
      
        if (inimigoVisivel) {
            this.indice++;

            inimigo.aparece();

            if (this.indice > this.mapa.length - 1) {
              this.indice = 0;
            }
        }
      
        if (personagem.estaColidindo(inimigo)) {

          vida.perdeVida();
          personagem.tornarInvencivel();

          if(vida.vidas === 0){
            image(imagemGameOver, width / 2 - 200, height / 3);

            noLoop();
          }
        }
    }
}