

class Personagem extends Animacao{

    TECLA_PULO   = "ArrowUp";
    LIMITE_PULOS = 2;
    
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){

        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.variacaoY          = variacaoY;
        this.yBase              = height - this.altura - this.variacaoY;
        this.y                  = this.yBase;

        this.frameAtual         = 0;

        this.velocidadeDoPulo   = 0;
        this.totalDePulos       = 0;
        this.gravidade          = 6;
        this.alturaDoPulo       = -50;

        this.invensivel = false;
    }

    teclaPressionada(key, som){

        if(key === this.TECLA_PULO){

            if(this.totalDePulos < this.LIMITE_PULOS){

                this.velocidadeDoPulo = this.alturaDoPulo;

                som.play();

                this.totalDePulos++;
            }
        }
    }

    aplicaGravidade(){
        this.y                = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if(this.y > this.yBase){
            this.y = this.yBase;

            this.totalDePulos = 0;
        }
    }

    estaColidindo(inimigo){

        if(this.invensivel)
            return false;

        const precisao = .7;

        const colisao = collideCircleCircle(
            this.x + (this.largura/2), 
            this.y + (this.altura/2), 
            this.largura * precisao,
            inimigo.x + (inimigo.largura/2), 
            inimigo.y + (inimigo.altura/2), 
            inimigo.largura * precisao
        )

        return colisao
    }

    tornarInvencivel(){

        this.invensivel = true;
        setTimeout(()=> {
            this.invensivel = false;
        }, 1000);
    }
}