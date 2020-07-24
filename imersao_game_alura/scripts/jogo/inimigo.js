

class Inimigo extends Animacao{

    constructor(matrizInimigo, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){

        super(matrizInimigo, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
        this.x          = width;
    }

    move(){
        this.x = this.x - this.velocidade 
    }

    aparece(){
        this.x = width;
    }
}