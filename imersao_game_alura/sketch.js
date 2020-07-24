function setup() {
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo();
  jogo.setup();

  telaInicial = new TelaInicial();

  frameRate(20);

  somDoJogo.loop();

  cenas = {
    jogo, 
    telaInicial
  };

  botao = new Botao("Iniciar Jogo", width / 2, height / 2);
}

function keyPressed() {

  jogo.keyPressed();
}

function draw() {

 cenas[cenaAtual].draw();
}