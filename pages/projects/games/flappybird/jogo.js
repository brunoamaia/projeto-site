//
let telaDoJogo = window.document.querySelector('#game-canvas')
const sprites = new Image();
sprites.src = './src/image/sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

//    Audios
const somCaiu = new Audio()
somCaiu.src = './src/audio/caiu.wav'
const somHit = new Audio()
somHit.src= './src/audio/hit.wav'
const somPonto = new Audio()
somPonto.src = './src/audio/ponto.wav'
const somPulo = new Audio()
somPulo.src= './src/audio/pulo.wav'


let frames = 0
let pontuacao = 0
let ranking = []
let calc = 0      // Garantir que o ranking foi recalculado 
let med = 4       // Escolher medalha (0 - Ouro, 1 - Prata, 2 - Bronze, 3 - Sei lá kkkkk, 4 - Sem medalha)
let lvl = 1       // Level of game: 0 - easy, 1 - normal, 2 - challenge

// *#*#*#*#*#*# Control  Frame Rate  #*#*#*#*#*#* 
const FRAMES_PER_SECOND = 40;  // Valid values are 60,30,20,15,10...
// set the mim time to render the next frame
const FRAME_MIN_TIME = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;
var lastFrameTime = 0;  // the last frame time


// [Tela de início]
const mensagemGetReady = {
  pX: 134,
  sY: 0,
  w: 174,
  h: 152,
  x: (canvas.width/2) - 174/2,
  y: 50,
  
  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGetReady.pX, mensagemGetReady.sY,
      mensagemGetReady.w, mensagemGetReady.h,
      mensagemGetReady.x, mensagemGetReady.y,
      mensagemGetReady.w, mensagemGetReady.h
    );
    pontuacao = 0
    med = 4
  }
}

// [Tela de Pontuação]
const mensagemPlacar = {
  // PLacar
  pX: 134,
  pY: 152,
  pw: 226,
  ph: 202,
  px: (canvas.width/2) - 226/2,
  py: 50,

  //medalhas
  medX: [0, 0, 48, 48],
  medY: [124, 78, 124, 78],
  medW: 44,
  medH: 44,
  MedPosX: 73,
  MedPosY: 137,

  
  desenha() {
    contexto.drawImage(   // Placar 
      sprites,
      mensagemPlacar.pX, mensagemPlacar.pY,
      mensagemPlacar.pw, mensagemPlacar.ph,
      mensagemPlacar.px, mensagemPlacar.py,
      mensagemPlacar.pw, mensagemPlacar.ph
    );
    mensagemPlacar.medalha()
  },
  
  medalha() {
    //console.log('Esolhe a medalha');
    if (med < 4) {
      contexto.drawImage(   // Medalha 
        sprites,
        mensagemPlacar.medX[med], mensagemPlacar.medY[med],
        mensagemPlacar.medW, mensagemPlacar.medH,
        mensagemPlacar.MedPosX, mensagemPlacar.MedPosY,
        mensagemPlacar.medW, mensagemPlacar.medH
      );
    }
  }
}

// [Plano de Fundo]
const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,

  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height)

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
  },
};


//  [Canos] 
const canos = {
  uX: 52,
  uY: 169,
  dX: 0,
  dY: 169,
  w: 52,
  h: 400,
  x: 100,
  y: 130,
  espaco: 100,
  pares: [],

  atualiza() {
    const passouSemFrames = frames%100 === 0
    if (passouSemFrames) {
      let canY = 0
      if (lvl == 0) {
        canY = Math.random()*220 + 35
      } else if (lvl == 1) {
        canY = Math.random()*50 + 90
      } else {
        canY = Math.random()*50 + 90
      }
      canos.pares.push({
        x: canvas.width,
        y: canY
      })
    }

    canos.pares.forEach(function(par){
      par.x += -2

      if (canos.colisaoCano(par)) {   //Colidiu com o cano
        somCaiu.play()
        mudaParaTela(Telas.Rank)
      }

      if ( (par.x + canos.w) < 0) {   // Remove os canos que já sairan da tela 
        canos.pares.shift()
      }
    })

  },

  colisaoCano(par) {
    ///   Colisão com os canos
    if ( (flappyBird.x + flappyBird.largura) >= par.x ) {     // Início do Cano
      if (flappyBird.x <= (par.x + canos.w-2)) {              // Final do Cano

        if (flappyBird.y < par.y) {                           // Cano de Cima 
          return true
        }

        if (flappyBird.y+flappyBird.altura > par.y+canos.espaco) {  // Cano  de Baixo
          return true
        }

        if (flappyBird.x >= par.x + canos.w-2){     // Passou sem colidir
          somPonto.play()
          pontuacao += 1
        }
      }
    }
    return false
  },

  desenha() {
    canos.pares.forEach(function(par){

      contexto.drawImage(     // Cano de Cima
        sprites,
        canos.uX, canos.uY,
        canos.w, canos.h,
        par.x, (par.y - canos.h),
        canos.w, canos.h
      )

      contexto.drawImage(     // Cano de Baixo
        sprites,
        canos.dX, canos.dY,
        canos.w, canos.h,
        par.x, (par.y + canos.espaco),
        canos.w, canos.h
      )
    })
  },

  reset() {
    canos.pares = []
  }

}

// [Chao]
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,

  atualiza() {
    if (colisaoChao(flappyBird, chao) == true) {
      somHit.play()
      mudaParaTela(Telas.Rank)
      return
    }
    // Animação do chão andando infinito
    chao.x -= 1
    if (chao.x <= -112) {
      chao.x = 0
    }
  },

  desenha() {
    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      chao.x, chao.y,
      chao.largura, chao.altura,
    );

    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      (chao.x + chao.largura), chao.y,
      chao.largura, chao.altura,
    );
  },
};

// [Flappy Bird]
let anim = 0
const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  //gravidade: 0.20,
  gravidade: 0.25,
  velocidade: 0,
  //pulo: 4.3,
  pulo: 4.6,
  movimentoAsas: [0, 26, 52, 26],

  atualiza(){
    flappyBird.velocidade += this.gravidade
    flappyBird.y += flappyBird.velocidade
  },

  desenha() {
    let mov = flappyBird.movimentaAsasFlappy()

    contexto.drawImage(
      sprites,
      flappyBird.spriteX, flappyBird.movimentoAsas[mov], // Sprite X, Sprite Y
      flappyBird.largura, flappyBird.altura, // Tamanho do recorte na sprite
      flappyBird.x, flappyBird.y,
      flappyBird.largura, flappyBird.altura,
    )
  },

  movimentaAsasFlappy() {
    let velBatidaAsas = 5    // Quanto maior o valor, mais lento é o movimento
    let act = ''
    if (anim >= velBatidaAsas*4) {
      anim = 0
    }

    if (anim < velBatidaAsas) {
      act = 0
    } else if (anim < velBatidaAsas*2) {
      act = 1
    } else if (anim < velBatidaAsas*3) {
      act = 2
    } else {
      act = 3
    }

    anim += 1
    return act
  },

  pula() {
    flappyBird.velocidade = - flappyBird.pulo
    somPulo.play()
  },

  queda() {
    contexto.drawImage(
      sprites,
      flappyBird.spriteX, flappyBird.spriteY, // Sprite X, Sprite Y
      flappyBird.largura, flappyBird.altura, // Tamanho do recorte na sprite
      flappyBird.x, flappyBird.y,
      flappyBird.largura, flappyBird.altura,
    )
  },
  
  reset() {
    flappyBird.x = 10
    flappyBird.y = 50
    flappyBird.velocidade = 0
  }
}

function colisaoChao (flappyBird, chao) {
  const flappyColisaoChao =flappyBird.y + flappyBird.altura
  const chaoColisao = chao.y

  if (flappyColisaoChao >= chaoColisao ) {
    return true
  }
  return false
}

// [Pontos]
const pontos = {
  desenha(){
    let x = 150
    if (pontuacao > 9) {x = 135}
    contexto.font = "50px serif"
    contexto.fillStyle = "#000"
    contexto.fillText(pontuacao, x, 60)
  },

  placar() {
    let x = 225
    if (pontuacao < 10) {
      x = 225
    }else if (pontuacao > 9 && pontuacao <100 ) {
      x = 220
    } else if (pontuacao >= 100 && pontuacao <999 ) {
      x = 210
    } else {
      x = 205
    }
    contexto.font = "28px serif"
    contexto.fillStyle = "#000"
    contexto.fillText(pontuacao, x, 148)

    let xB = 225
    if (ranking[0] < 10) {
      xB = 225
    }else if (ranking[0] > 9 && ranking[0] <100 ) {
      xB = 220
    } else if (ranking[0] >= 100 && ranking[0] <999 ) {
      xB = 210
    } else {
      xB = 205
    }
    contexto.fillText(ranking[0], xB, 190)
    //console.log(ranking);
  }
}

// [Telas] 
let telaAtiva = {}
function mudaParaTela(novaTela) {
  telaAtiva = novaTela;
}
const Telas = {
  Inicio: {
    atualiza() {
      flappyBird.reset()
      chao.atualiza()
      canos.reset()
    },
    click() {
      mudaParaTela(Telas.Jogo)
    },
    desenha(){
      planoDeFundo.desenha();
      chao.desenha();
      flappyBird.desenha();
      mensagemGetReady.desenha()
    }
  },
  
  Jogo: {
    atualiza() {
      canos.atualiza()
      chao.atualiza()
      flappyBird.atualiza()
    },
    click() {
      flappyBird.pula()
    },
    desenha() {
      planoDeFundo.desenha();
      canos.desenha()
      chao.desenha();
      flappyBird.desenha();
      pontos.desenha()
    }
  },

  Final: {
    atualiza(){
      // Pousar no chão 
      if (flappyBird.y + flappyBird.altura < chao.y ) {
        flappyBird.atualiza()
      }
    },
    click() {
      setTimeout(()=>{
        mudaParaTela(Telas.Inicio)
      }, 600)
    },
    desenha() {
      planoDeFundo.desenha();
      canos.desenha()
      chao.desenha();
      flappyBird.queda();
      mensagemPlacar.desenha()
      pontos.placar()
    }
  },
  
  Rank:{
    atualiza() {

      if (ranking.length == 0) {
        ranking[0] = pontuacao
        med = 0
      } else {
        // Verificar se ganhou alguma medalha
        for (let i = ranking.length - 1; i >= 0; i--) {
          if (pontuacao > ranking[i]) {
            med = i
          }
        }
  
        ranking.push(pontuacao)     //add
        // Remover valores duplicados
        for (let i = 0; i < ranking.length; i++) {
          for (let j = 0; j < ranking.length; j++) {
            if (i != j) {
              if (ranking[i] == ranking[j]) {
                ranking.splice(i, 1)
              }
            }
          }
        }
        //  Ordenar os valores
        if (ranking.length > 1) {   // Forma crescente
          ranking.sort(function (a, b) { return a - b })
          ranking.reverse()         //  Forma decrescente
        }
        //  Remover a ultima posição (menor valor)
        if (ranking.length > 4) {
          ranking.pop()
        }
      }

      calc = 1
    },

    desenha(){
      if (calc == 1) {
        mudaParaTela(Telas.Final)
        calc =0
      }
    }

  }
}

/*function loop() {
  telaAtiva.atualiza()
  telaAtiva.desenha()

  frames += 1
  requestAnimationFrame(loop);
}*/


function update(time){
  if(time-lastFrameTime < FRAME_MIN_TIME){ //skip the frame if the call is too early
      requestAnimationFrame(update);
      return; // return as there is nothing to do
  }
  lastFrameTime = time; // remember the time of the rendered frame
  // render the frame
  telaAtiva.atualiza()
  telaAtiva.desenha()

  frames += 1
  requestAnimationFrame(update); // get next farme
}


telaDoJogo.addEventListener('click', function(){
  if (telaAtiva.click) {
    telaAtiva.click()
  }
})

//mudaParaTela(Telas.Inicio)    // Carregar a Tela inicial ao abrir a página 
/*
document.addEventListener('keydown', keyDownHandler, false);
function keyDownHandler(event) {
  if(event.keyCode == 32 || event.keyCode == 38) {
    if (telaAtiva.click) {
      telaAtiva.click()
    }
  }
} */

// Levels  
let facil = window.document.querySelector('#facil')
let medio = window.document.querySelector('#normal')

facil.addEventListener('click', function(){
  lvl = 0
  canos.espaco = 140
  flappyBird.gravidade = 0.10
  flappyBird.pulo = 2.7
  mudaParaTela(Telas.Inicio)
})
medio.addEventListener('click', function(){
  lvl = 1
  canos.espaco = 100
  flappyBird.gravidade = 0.20
  flappyBird.pulo = 4.3
  mudaParaTela(Telas.Inicio)
})

/*let desafio = window.document.querySelector('#desafio')
desafio.addEventListener('click', function(){
  //lvl = 2
  window.alert('Not yet implemented')
  mudaParaTela(Telas.Inicio)
})*/

mudaParaTela(Telas.Inicio)
//loop();
update()