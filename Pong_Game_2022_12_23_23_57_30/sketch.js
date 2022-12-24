//VARIAVEIS DA BOLINHA

let XBolinha = 300;
let YBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// VELOCIDADE DA BOLINHA

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//VARIAVEIS DA RAQUETE USUARIO

let xRaqueteUsuario = 5; 
let yRaqueteUsuario = 150;
let altura = 90;
let largura = 10;

//RAQUETE ADVERSÁRIO

let xRaqueteAdversario = 585;
let yRaqueteAdversario = 150;
let velocidadeyAdversario;

// VARIAVEIS DO PLACAR DO JOGO

let meusPontos = 0;
let pontosOponente = 0;

// VARIAVEIS DE SONS DO JOGO

let raquetada;
let pontuacao;
let trilha;

// PLANO DE FUNDO

function setup() {
  createCanvas(600, 400);
}

//APLICAÇÃO DAS FUNÇÕES DO JOGO

function draw() {
  background(0);
  bola();
  velocidadeBola();
  verificacaodeColisao();
  raquete(xRaqueteUsuario, yRaqueteUsuario);
  movimento_raqueteUser();
  raquete(xRaqueteAdversario, yRaqueteAdversario);
  movimentoAdversario();
  colisaoBiblioteca(xRaqueteUsuario, yRaqueteUsuario);
  colisaoBiblioteca(xRaqueteAdversario, yRaqueteAdversario);
  placar();
  marcaPonto();
}

// BOLINHA

function bola() {
  circle(XBolinha, YBolinha, diametro);
}

// VELOCIDADE DA BOLINHA

function velocidadeBola() {
  XBolinha += velocidadexBolinha;
  YBolinha += velocidadeyBolinha;
}

// VERIFICA COLISAO DA BOLINHA NA BORDA

function verificacaodeColisao() {
  if(XBolinha + raio > width || XBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  
  if(YBolinha + raio > height || YBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

// Raquete do usuario

function raquete(x, y) { 
  rect(x, y, largura, altura );
}

//Movimento da raquete do usuario

function movimento_raqueteUser() {
  if (keyIsDown (UP_ARROW)){
    yRaqueteUsuario -= 10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaqueteUsuario += 10;
  }
} 

// MOVIMENTAÇÃO DA RAQUETE DO ADVERSÁRIO 

function movimentoAdversario() {
  velocidadeyAdversario = YBolinha - yRaqueteAdversario - altura / 2 - 30;
  yRaqueteAdversario += velocidadeyAdversario;
}


// VERIFICAÇÃO DE COLISAO DA RAQUETE COM A BOLINHA

function colisaoBiblioteca(x,y){
  colidiu = 
  collideRectCircle(x, y, largura, altura, XBolinha,YBolinha, raio);
 
  
 if (colidiu){
   velocidadexBolinha *= -1;
 }
}

// FUNÇÃO PLACAR

function placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill (color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill (255);
  text(meusPontos, 170, 26);
  fill (color(255, 140, 0));
  rect(430, 10, 40, 20);
  fill (255);
  text (pontosOponente, 450, 26);
}


function marcaPonto(){
  if(XBolinha > 590){
    meusPontos += 1;
    
  }
  
  if(XBolinha < 10){ 
    pontosOponente += 1;

  }
}


