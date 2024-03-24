export function loader(scene) {

  // scene.load.image('fondoAzulRojizo', './src/img/fondo-espacial-azulRojizo.png');
  scene.load.image('fondoAzulRojizo', './assets/img/fondo-espacial-azulRojizo.png');

  // scene.load.image('estrella-azul', './src/img/estrella-azulada.png');
  scene.load.image('estrella-azul', './assets/img/estrella-azulada.png');

  // scene.load.image('estrella-roja', './src/img/estrella-rojiza.png');
  scene.load.image('estrella-roja', './assets/img/estrella-rojiza.png');

  // scene.load.image('jugador', './src/img/nave-galaxian200x200.png');
  scene.load.image('jugador', './assets/img/nave-galaxian200x200.png');

  // scene.load.spritesheet('disparos', './src/img/laserss.png', {frameWidth: 32, frameHeight: 65});
  scene.load.spritesheet('disparos', './assets/img/laser3.png', {frameWidth: 32, frameHeight: 65});
  // scene.load.image('disparos', './src/img/laserP.png');

  // scene.load.spritesheet('enemigos', './src/img/anima-enemigosGalaxian.png', {frameWidth: 135, frameHeight: 95});
  scene.load.spritesheet('enemigos', './assets/img/anima-enemigosGalaxian.png', {frameWidth: 135, frameHeight: 95});

  // scene.load.spritesheet('enemigos2', './src/img/anima-enemigosGalaxian2.png', {frameWidth: 135, frameHeight: 95});
  scene.load.spritesheet('enemigos2', './assets/img/anima-enemigosGalaxian2.png', {frameWidth: 135, frameHeight: 95});

  // scene.load.image('disparo-ene', './src/img/estrella-rojiza.png');
  // scene.load.spritesheet('disparo-ene', './src/img/shinobi-pow.png', {frameWidth: 18, frameHeight: 9});

  // scene.load.spritesheet('disparo-ene', './src/img/disparo-ene-ssheet.png', {frameWidth: 18, frameHeight: 39});
  scene.load.spritesheet('disparo-ene', './assets/img/disparo-ene-ssheet.png', {frameWidth: 18, frameHeight: 39});

  // scene.load.spritesheet('explosion', './src/img/explo-naveGalaxian.png', {frameWidth: 32, frameHeight: 32});
  scene.load.spritesheet('explosion', './assets/img/explo-naveGalaxian.png', {frameWidth: 32, frameHeight: 32});

  // scene.load.image('particula', './src/img/particula-chispa.png');
  scene.load.image('particula', './assets/img/particula-chispa.png');

  // scene.load.image('gameover', './src/img/gameover.png');

  // scene.load.image('boton-nueva-partida', './src/img/boton-start.png');
  scene.load.image('boton-nueva-partida', './assets/img/boton-start.png');

  // scene.load.image('boton-settings', './src/img/boton-config.png');
  scene.load.image('boton-settings', './assets/img/boton-config.png');

  // scene.load.image('boton-continuar', './src/img/boton-continuar.png');
  scene.load.image('boton-continuar', './assets/img/boton-continuar.png');

  // scene.load.spritesheet('boton-fullscreen', './src/img/boton-fullscreen.png', {frameWidth: 64, frameHeight: 64});
  scene.load.spritesheet('boton-fullscreen', './assets/img/boton-fullscreen.png', {frameWidth: 64, frameHeight: 64});

  scene.load.spritesheet('radio-buttons', './assets/img/radio-buttons-ssheet.png', {frameWidth: 50, frameHeight: 50});
  
  // ---------------------------------------------------------------------------------
  //  Pluggin Control Joystick-tactil
  // ---------------------------------------------------------------------------------
  let url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
  // scene.load.plugin('rexvirtualjoystickplugin', url, true);

  // scene.load.image('base-joystick', './src/img/base-joystick.png');
  scene.load.image('base-joystick', './assets/img/base-joystick.png');

  // scene.load.image('boton-fire-joystick', './src/img/boton-fire-joystick.png');
  scene.load.image('boton-fire-joystick', './assets/img/boton-fire-joystick.png');

  // scene.load.image('cruceta-left', './src/img/left.png');
  scene.load.image('cruceta-left', './assets/img/left.png');

  // scene.load.image('cruceta-right', './src/img/right.png');
  scene.load.image('cruceta-right', './assets/img/right.png');
  
  // ---------------------------------------------------------------------------------
  //  Audio
  // ---------------------------------------------------------------------------------
  // scene.load.audio('sonidoDisparo', './src/audio/disparo_corto.mp3');
  scene.load.audio('sonidoDisparo', './assets/audio/disparo_corto.mp3');

  // scene.load.audio('sonidoExplosion', './src/audio/explosion.wav');
  scene.load.audio('sonidoExplosion', './assets/audio/explosion.wav');

  // scene.load.audio('sonidoFireWorks', './src/audio/fireworks.mp3');
  scene.load.audio('sonidoFireWorks', './assets/audio/fireworks.mp3');

  // scene.load.audio('sonidoGameOver', './src/audio/gameoveretro.ogg');
  scene.load.audio('sonidoGameOver', './assets/audio/gameoveretro.ogg');

  // scene.load.audio('sonidoLevelUp', './src/audio/level-passed.mp3');
  scene.load.audio('sonidoLevelUp', './assets/audio/level-passed.mp3');

  // scene.load.audio('sonidoMusicaFondo', './src/audio/music.ogg');
  scene.load.audio('sonidoMusicaFondo', './assets/audio/music.ogg');

  // scene.load.audio('sonidoNaveExplota', './src/audio/navexplota.mp3');
  scene.load.audio('sonidoNaveExplota', './assets/audio/navexplota.mp3');

  // scene.load.audio('sonidoGalaxian', './src/audio/playing-galaxian.mp3');
  scene.load.audio('sonidoGalaxian', './assets/audio/playing-galaxian.mp3');

  // scene.load.audio('sonidoIntroRetro', './src/audio/retro-game-intro.mp3');
  scene.load.audio('sonidoIntroRetro', './assets/audio/retro-game-intro.mp3');

  // scene.load.audio('dieT1', './src/audio/dieThrow1.ogg');
  scene.load.audio('dieT1', './assets/audio/dieThrow1.ogg');

  // scene.load.audio('dieT2', './src/audio/dieThrow2.ogg');
  scene.load.audio('dieT2', './assets/audio/dieThrow2.ogg');
}
