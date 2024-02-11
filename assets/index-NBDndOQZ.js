var e=Object.defineProperty,t=(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s);import{p as i}from"./phaser-_rnWH2PC.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=class e{static getPuntos(){return e.puntos}static getNivel(){return e.nivel}static getRecord(){return e.hi}static getVidas(){return e.vidas}static setPuntos(t){e.puntos=t}static setNivel(t){e.nivel=t}static setRecord(t){e.hi=t}static setVidas(t){e.vidas=t}};t(s,"puntos",0),t(s,"nivel",1),t(s,"hi",2e4),t(s,"vidas",3);let o=s;const a=class e{constructor(e){this.relatedScene=e}create(){this.disparo=this.relatedScene.physics.add.group({key:"disparos",setXY:{x:-9999,y:9999,stepX:150},repeat:e.NRO_MAX_DISPAROS}),this.relatedScene.tweens.add({targets:this.disparo.getChildren(),tint:new Phaser.Display.Color(255,Phaser.Math.Between(40,250),0).color,duration:500,repeat:-1}),this.relatedScene.anims.create({key:"disparos-anim",frames:this.relatedScene.anims.generateFrameNumbers("disparos",{frames:[0,1]}),frameRate:15,repeat:-1}),this.disparo.getChildren().forEach((e=>{e.setScale(.5,1),e.setActive(!1).setVisible(!1),e.play("disparos-anim")})),this.cadencia={disparo:200,bandera:0},console.log(this.disparo)}update(){this.disparo.children.iterate((e=>{e.y<0&&e.setActive(!1).setVisible(!1).setX(-9999)}))}get(){return this.disparo}};t(a,"NRO_MAX_DISPAROS",3),t(a,"VEL_Y",-500);let n=a;const r=class e{constructor(e){this.relatedScene=e}create(){this.disparoenemigo=this.relatedScene.physics.add.group({key:"disparo-ene",setXY:{x:-8888,y:8888,stepX:150},repeat:e.NRO_MAX_DISPAROS}),this.relatedScene.anims.create({key:"disparo-ene-anim",frames:this.relatedScene.anims.generateFrameNumbers("disparo-ene",{frames:[0,1,2,3]}),frameRate:10,repeat:-1}),this.relatedScene.tweens.add({targets:this.disparoenemigo.getChildren(),scale:1.1,duration:200,yoyo:!0,repeat:-1}),this.disparoenemigo.getChildren().forEach((e=>{e.setScale(.8),e.setActive(!1).setVisible(!1).disableBody(!0,!0),e.play("disparo-ene-anim")}));const t=2e3-100*o.getNivel();this.cadencia={disparo:t,bandera:0},console.log(this.disparoenemigo)}update(){this.disparoenemigo.children.iterate((e=>{e.y>this.relatedScene.sys.game.config.height&&e.setActive(!1).setVisible(!1).disableBody(!0,!0)}))}get(){return this.disparoenemigo}};t(r,"NRO_MAX_DISPAROS",9),t(r,"VEL_Y",100);let l=r;const d=class e{constructor(e){this.relatedScene=e}create(){this.particulas=this.relatedScene.physics.add.group({key:"particula",setXY:{x:-5555,y:-5555,stepX:100},repeat:e.NRO_PARTICULAS_TOTAL}),this.particulas.children.iterate((e=>{e.setTint(new Phaser.Display.Color(255,Phaser.Math.Between(125,255),0).color),e.setScale(Phaser.Math.FloatBetween(.4,1.3)),e.setActive(!1).setVisible(!1)})),console.log(this.particulas)}update(){}get(){return this.particulas}};t(d,"NRO_PARTICULAS",9),t(d,"NRO_PARTICULAS_TOTAL",15*d.NRO_PARTICULAS),t(d,"DURACION_PARTICULAS",1250);let h=d;const c=class e{constructor(e){this.relatedScene=e}create(){this.explosion=this.relatedScene.physics.add.group({key:"explosion",setXY:{x:-5555,y:-5555,stepX:100},repeat:e.NRO_EXPLOSIONES}),this.relatedScene.anims.create({key:"explosion-anim",frames:this.relatedScene.anims.generateFrameNumbers("explosion",{frames:[1,2,3]}),frameRate:15,repeat:-1}),this.explosion.children.iterate((e=>{e.setScale(2),e.setActive(!1).setVisible(!1),e.play("explosion-anim")})),console.log(this.explosion)}update(){}get(){return this.explosion}};t(c,"NRO_EXPLOSIONES",9),t(c,"DURACION_EXPLO",1e3);let g=c;const p=class e{constructor(e){this.relatedScene=e}create(){const t=Math.floor(this.relatedScene.sys.game.config.width/2),i=Math.floor(this.relatedScene.sys.game.config.height/1.08);this.jugador=this.relatedScene.physics.add.sprite(t,i,"jugador"),this.jugador.setScale(.5,.5),this.jugador.setAlpha(1),this.jugador.setData("posIni",[t,i]),this.jugador.setData("vel-x",e.VEL_X),this.jugador.setData("acel-x",e.ACEL_X),this.jugador.setData("vel-y",e.VEL_Y),this.jugador.setCollideWorldBounds(!0),this.jugador.setBounce(.2),this.controles=this.relatedScene.input.keyboard.createCursorKeys(),console.log(this.controles),console.log(this.jugador,this.jugador.x,this.jugador.body.width,this.jugador.width)}update(){this.controles.left.isDown||this.relatedScene.crucetaleft.isDown?this.jugador.setVelocityX(-this.jugador.getData("vel-x")):this.controles.right.isDown||this.relatedScene.crucetaright.isDown?this.jugador.setVelocityX(this.jugador.getData("vel-x")):this.jugador.setVelocityX(0)}get(){return this.jugador}};t(p,"VEL_X",520),t(p,"ACEL_X",500),t(p,"VEL_Y",0),t(p,"REVIVIR_PAUSA",4e3),t(p,"DURACION_EXPLO",1150);let u=p;const m=class e{constructor(e){this.relatedScene=e}create(){this.jugadorSV=this.relatedScene.add.group({key:"jugador",setXY:{x:e.xAbsolute,y:Math.floor(e.alto/2),stepX:e.ancho},repeat:o.getVidas()-1}),this.jugadorSV.children.iterate((e=>{e.setScale(.15,.15),e.setAlpha(.9)})),console.log(this.jugadorSV)}get(){return this.jugadorSV}};t(m,"xAbsolute",240),t(m,"ancho",19),t(m,"alto",28);let f=m;function y(e,t){e.setActive(!0).setVisible(!0),e.enableBody(!0,t.x,t.y+Math.floor(t.body.height/2),!0,!0),e.setVelocityY(l.VEL_Y+50*o.getNivel()),e.setScale(.8),e.setAlpha(1)}function S(e,t){t.tweens.add({targets:e,angle:360,duration:300,yoyo:!0})}function v(e,t){console.log("colision...disparo-enemigo");let i=0;this.particulas.get().children.iterate((t=>{!t.active&&!t.visible&&i<h.NRO_PARTICULAS&&(i++,w(t,e),setTimeout((()=>{t.setActive(!1).setVisible(!1)}),h.DURACION_PARTICULAS))}));let s=!1;this.explosion.get().children.iterate((t=>{t.active||t.visible||s||(s=!0,x(t,e),setTimeout((()=>{t.setActive(!1).setVisible(!1)}),g.DURACION_EXPLO))})),t.setActive(!1).setVisible(!1).disableBody(!0,!0),e.setActive(!1).setVisible(!1).disableBody(!0,!0),R(e),this.marcador.update(0,o.getPuntos()),this.sonidoExplosion.play(),this.enemigo.get().countActive()<=0&&(this.nivel_superado=!0),console.log(this.enemigo.get().countActive())}function b(e,t){console.log("colision...disparo-enemigo"),console.log(t,e),console.log(e.getData("posIni"));let i=0;this.particulas.get().children.iterate((s=>{!s.active&&!s.visible&&i<2*h.NRO_PARTICULAS&&(i++,i<h.NRO_PARTICULAS?w(s,t):(w(s,e),s.setVelocity(Phaser.Math.Between(-400,400),Phaser.Math.Between(-300,300))),setTimeout((()=>{s.setActive(!1).setVisible(!1)}),h.DURACION_PARTICULAS))}));let s=!1;this.explosion.get().children.iterate((e=>{e.active||e.visible||s||(s=!0,x(e,t),setTimeout((()=>{e.setActive(!1).setVisible(!1)}),g.DURACION_EXPLO))})),s=!1,this.explosion.get().children.iterate((t=>{t.active||t.visible||s||(s=!0,x(t,e),t.setScale(4),setTimeout((()=>{t.setActive(!1).setVisible(!1)}),u.DURACION_EXPLO))})),o.getVidas()>0&&setTimeout((()=>{e.setActive(!0).setVisible(!0).setAlpha(.1),e.enableBody(!0,e.getData("posIni")[0],e.getData("posIni")[1],!0,!0),this.tweens.add({targets:e,alpha:1,duration:3e3})}),u.REVIVIR_PAUSA),e.setActive(!1).setVisible(!1).disableBody(!0,!0),I(),o.getVidas()>=0&&this.jugadorSV.get().getChildren()[o.getVidas()].setVisible(!1),R(t),this.marcador.update(0,o.getPuntos()),t.setActive(!1).setVisible(!1).disableBody(!0,!0),this.sonidoNaveExplota.play(),this.sonidoExplosion.play(),this.enemigo.get().countActive()<=0&&(this.nivel_superado=!0),console.log(this.enemigo.get().countActive())}function A(e,t){console.log("colision...disparo-enemigo"),console.log(t,e),console.log(e.getData("posIni"));let i=0;this.particulas.get().children.iterate((s=>{!s.active&&!s.visible&&i<2*h.NRO_PARTICULAS&&(i++,i<h.NRO_PARTICULAS?w(s,t):(w(s,e),s.setVelocity(Phaser.Math.Between(-400,400),Phaser.Math.Between(-300,300))),setTimeout((()=>{s.setActive(!1).setVisible(!1)}),h.DURACION_PARTICULAS))}));let s=!1;this.explosion.get().children.iterate((t=>{t.active||t.visible||s||(s=!0,x(t,e),t.setScale(4),setTimeout((()=>{t.setActive(!1).setVisible(!1)}),u.DURACION_EXPLO))})),o.getVidas()>0&&setTimeout((()=>{e.setActive(!0).setVisible(!0).setAlpha(.1),e.enableBody(!0,e.getData("posIni")[0],e.getData("posIni")[1],!0,!0),this.tweens.add({targets:e,alpha:1,duration:3e3})}),u.REVIVIR_PAUSA),e.setActive(!1).setVisible(!1).disableBody(!0,!0),I(),o.getVidas()>=0&&this.jugadorSV.get().getChildren()[o.getVidas()].setVisible(!1),t.setActive(!1).setVisible(!1).disableBody(!0,!0),this.sonidoNaveExplota.play()}function w(e,t){e.setActive(!0).setVisible(!0),e.setX(t.x),e.setY(t.y),e.setVelocity(Phaser.Math.Between(-200,200),Phaser.Math.Between(-180,180)),e.setAlpha(1)}function x(e,t){e.setActive(!0).setVisible(!0),e.setX(t.x),e.setY(t.y),e.setAlpha(1),e.setScale(2)}function _(e,t){return console.log(e.width),Math.floor(t/2-e.width/2)}function R(e){const t=o.getPuntos()+e.getData("puntos");o.setPuntos(t),console.log(t,o.getPuntos())}function I(){const e=o.getVidas()-1;o.setVidas(e)}const E=class e extends i.Scene{constructor(){super({key:"iniciar"})}create(){this.size=50,this.left=Math.floor(e.WIDTH/6.2),this.top=Math.floor(e.HEIGHT/3);const t=this.add.text(this.left,this.top," Toque pantalla o haga ",{fontSize:this.size+"px",fontStyle:"500",align:"left",shadow:{offsetX:1,offsetY:1,color:"#fff",blur:7,fill:!0},fill:"#ffa",fontFamily:"verdana, arial, sans-serif"});t.setX(_(t,this.sys.game.config.width)),this.add.text(this.left,this.top+100," click para comenzar... ",{fontSize:this.size+"px",fontStyle:"500",align:"left",shadow:{offsetX:1,offsetY:1,color:"#fff",blur:7,fill:!0},fill:"#ffa",fontFamily:"verdana, arial, sans-serif"}).setX(_(t,this.sys.game.config.width)),this.input.on("pointerdown",(()=>this.scene.start("menuprincipal"))),console.log(this)}};t(E,"WIDTH",800),t(E,"HEIGHT",600);let T=E;function V(e){e.load.image("fondoAzulRojizo","./assets/img/fondo-espacial-azulRojizo.png"),e.load.image("estrella-azul","./assets/img/estrella-azulada.png"),e.load.image("estrella-roja","./assets/img/estrella-rojiza.png"),e.load.image("jugador","./assets/img/nave-galaxian200x200.png"),e.load.spritesheet("disparos","./assets/img/laserss.png",{frameWidth:32,frameHeight:65}),e.load.spritesheet("enemigos","./assets/img/anima-enemigosGalaxian.png",{frameWidth:135,frameHeight:95}),e.load.spritesheet("enemigos2","./assets/img/anima-enemigosGalaxian2.png",{frameWidth:135,frameHeight:95}),e.load.spritesheet("disparo-ene","./assets/img/disparo-ene-ssheet.png",{frameWidth:18,frameHeight:39}),e.load.spritesheet("explosion","./assets/img/explo-naveGalaxian.png",{frameWidth:32,frameHeight:32}),e.load.image("particula","./assets/img/particula-chispa.png"),e.load.image("boton-nueva-partida","./assets/img/boton-start.png"),e.load.image("boton-settings","./assets/img/boton-config.png"),e.load.image("boton-continuar","./assets/img/boton-continuar.png"),e.load.spritesheet("boton-fullscreen","./assets/img/boton-fullscreen.png",{frameWidth:64,frameHeight:64}),e.load.image("base-joystick","./assets/img/base-joystick.png"),e.load.image("boton-fire-joystick","./assets/img/boton-fire-joystick.png"),e.load.image("cruceta-left","./assets/img/left.png"),e.load.image("cruceta-right","./assets/img/right.png"),e.load.audio("sonidoDisparo","./src/audio/disparo_corto.mp3"),e.load.audio("sonidoDisparo","./assets/audio/disparo_corto.mp3"),e.load.audio("sonidoExplosion","./src/audio/explosion.wav"),e.load.audio("sonidoExplosion","./assets/audio/explosion.wav"),e.load.audio("sonidoFireWorks","./src/audio/fireworks.mp3"),e.load.audio("sonidoFireWorks","./assets/audio/fireworks.mp3"),e.load.audio("sonidoGameOver","./src/audio/gameoveretro.ogg"),e.load.audio("sonidoGameOver","./assets/audio/gameoveretro.ogg"),e.load.audio("sonidoLevelUp","./src/audio/level-passed.mp3"),e.load.audio("sonidoLevelUp","./assets/audio/level-passed.mp3"),e.load.audio("sonidoMusicaFondo","./src/audio/music.ogg"),e.load.audio("sonidoMusicaFondo","./assets/audio/music.ogg"),e.load.audio("sonidoNaveExplota","./src/audio/navexplota.mp3"),e.load.audio("sonidoNaveExplota","./assets/audio/navexplota.mp3"),e.load.audio("sonidoGalaxian","./src/audio/playing-galaxian.mp3"),e.load.audio("sonidoGalaxian","./assets/audio/playing-galaxian.mp3"),e.load.audio("sonidoIntroRetro","./src/audio/retro-game-intro.mp3"),e.load.audio("sonidoIntroRetro","./assets/audio/retro-game-intro.mp3"),e.load.audio("dieT1","./src/audio/dieThrow1.ogg"),e.load.audio("dieT1","./assets/audio/dieThrow1.ogg"),e.load.audio("dieT2","./src/audio/dieThrow2.ogg"),e.load.audio("dieT2","./assets/audio/dieThrow2.ogg")}const X=class e{constructor(e){this.relatedScene=e}create(){this.estrellas={azuladas:this.relatedScene.physics.add.group({key:"estrella-azul",repeat:e.NRO_STAR_AZULADAS}),rojizas:this.relatedScene.physics.add.group({key:"estrella-roja",repeat:e.NRO_STAR_ROJIZAS})},Object.keys(this.estrellas).forEach((e=>{this.estrellas[e].getChildren().forEach((e=>{this.inicializar(e)}))})),Object.keys(this.estrellas).forEach((t=>{this.relatedScene.tweens.add({targets:this.estrellas[t].getChildren(),scale:e.ESCALA_MAX,yoyo:!0,duration:99,repeat:-1})})),console.log(this.estrellas)}update(){Object.keys(this.estrellas).forEach((t=>{this.estrellas[t].getChildren().forEach((t=>{t.y>1.1*this.relatedScene.sys.game.config.height&&(t.setY(e.APARECER_ARRIBA),t.setX(Phaser.Math.Between(0,this.relatedScene.sys.game.config.width)))}))}))}inicializar(t){t.setScale(e.ESCALA_INICIAL+Phaser.Math.FloatBetween(0,.12)),t.setVelocityY(Phaser.Math.FloatBetween(5,50)),t.setX(Phaser.Math.Between(0,this.relatedScene.sys.game.config.width)),t.setY(Phaser.Math.Between(0,this.relatedScene.sys.game.config.height))}get(){return this.estrellas}};t(X,"NRO_STAR_AZULADAS",39),t(X,"NRO_STAR_ROJIZAS",49),t(X,"ESCALA_INICIAL",.01),t(X,"ESCALA_MAX",.21),t(X,"APARECER_ARRIBA",-15);let D=X;class N{constructor(e){this.relatedScene=e}create(e){const t=this.relatedScene.sys.game.config.width,i=this.relatedScene.sys.game.config.height,s=o.getNivel()>1?"boton-continuar":"boton-nueva-partida";this.boton=this.relatedScene.add.sprite(Math.floor(t/2),Math.floor(i/1.5),s).setInteractive(),this.boton.setScale(.6),this.boton.setAngle(1),this.boton.on("pointerover",(()=>{this.boton.setScale(.8)})),this.boton.on("pointerout",(()=>{this.boton.setScale(.6)})),this.boton.on("pointerdown",(()=>{"prenivel"===e&&this.relatedScene.sonidoMusicaFondo.pause(),this.relatedScene.scene.start(e)})),this.relatedScene.tweens.add({targets:this.boton,angle:359,ease:"Elastic",yoyo:!0,hold:900,duration:2e3,repeat:-1})}}class O{constructor(e){this.relatedScene=e}create(e){const t=this.relatedScene.sys.game.config.width,i=this.relatedScene.sys.game.config.height;this.boton=this.relatedScene.add.sprite(Math.floor(t/2),Math.floor(i/1.1),"boton-settings").setInteractive(),this.boton.setScale(.5),this.boton.setAngle(0),this.boton.on("pointerover",(()=>{this.boton.setScale(.8)})),this.boton.on("pointerout",(()=>{this.boton.setScale(.5)})),this.boton.on("pointerdown",(()=>{"prenivel"===e&&this.relatedScene.sonidoMusicaFondo.pause(),this.relatedScene.scene.start(e)})),this.relatedScene.tweens.add({targets:this.boton,y:Math.floor(i/1),ease:"Sine.easeIn",yoyo:!0,duration:2700,repeat:-1})}}class P{constructor(e){this.relatedScene=e}create(){const e=this.relatedScene.sys.game.config.width;this.relatedScene.sys.game.config.height;const t=Math.floor(16);this.boton=this.relatedScene.add.sprite(Math.floor(e/1.05),t,"boton-fullscreen").setInteractive(),this.boton.setScale(.5),this.boton.setAngle(0),this.boton.setFrame(0),this.boton.on("pointerover",(()=>{this.boton.setScale(.8)})),this.boton.on("pointerout",(()=>{this.boton.setScale(.5)})),this.boton.on("pointerdown",(()=>{this.relatedScene.scale.isFullscreen?this.relatedScene.scale.stopFullscreen():this.relatedScene.scale.startFullscreen()}))}}class C extends i.Scene{constructor(){super({key:"menuprincipal"})}init(){o.setPuntos(0),o.setNivel(1),o.setVidas(3),this.estrella=new D(this),this.botoninicio=new N(this),this.botonsettings=new O(this)}preload(){const e=this.add.text(Math.floor(this.sys.game.config.width/2),Math.floor(this.sys.game.config.height/2)," Cargando...",{fontSize:"50px",fill:"#ffa",fontFamily:"verdana, arial, sans-serif"});e.setX(_(e,this.sys.game.config.width)),V(this)}create(){this.sonidoMusicaFondo=this.sound.add("sonidoMusicaFondo"),this.add.image(0,0,"fondoAzulRojizo").setOrigin(0,0),this.estrella.create(),this.size=90,this.left=Math.floor(this.sys.game.config.width/5.2),this.top=Math.floor(this.sys.game.config.height/3),this.txt_titulo=this.add.text(this.left,this.top," GalaxIMI ",{fontSize:this.size+"px",fontStyle:"bold",shadow:{offsetX:1,offsetY:1,color:"#ffa",blur:15,fill:!0},fill:"#aff",fontFamily:"verdana, arial, sans-serif"}),this.txt_titulo.setX(_(this.txt_titulo,this.sys.game.config.width)),this.timeline=this.add.timeline([{at:3200,run:()=>{this.botoninicio.create("prenivel"),this.botonsettings.create("prenivel")}}]),this.timeline.play(),this.sonidoMusicaFondo.play(),this.sonidoMusicaFondo.volume=.4,console.log(this.txt_titulo)}update(){this.estrella.update()}}class M{constructor(e){this.relatedScene=e}create(){this.marcadores=this.relatedScene.add.group();const e=this.relatedScene.sys.game.config.width;this.relatedScene.sys.game.config.height,this.args=[[" Puntos: ",20,"#fff","#2ef",7,0,0,o.getPuntos()],[" Nivel: ",20,"#fff","#2ef",7,Math.floor(e/2),0,o.getNivel()],[" Record: ",20,"#fff","#2ef",7,Math.floor(e/1.4),0,o.getRecord()]],this.args.forEach(((t,i)=>{let s=this.relatedScene.add.text(t[5],t[6],t[0]+t[7],{fontSize:t[1]+"px",fill:t[2],fontFamily:"verdana, arial, sans-serif",shadow:{offsetX:1,offsetY:1,color:t[3],blur:t[4],fill:!0}});1===i&&s.setX(_(s,e)),this.marcadores.add(s)})),console.log(this.marcadores)}update(e,t){this.marcadores.getChildren()[e].setText(this.args[e][0]+t)}get(){return this.marcadores}}class j extends i.Scene{constructor(){super({key:"prenivel"})}init(){this.estrella=new D(this),this.marcador=new M(this)}create(){this.sonidoGalaxian=this.sound.add("sonidoGalaxian"),this.add.image(0,0,"fondoAzulRojizo").setOrigin(0,0),this.estrella.create(),this.marcador.create(),this.size=70,this.left=Math.floor(this.sys.game.config.width/3.2),this.top=Math.floor(this.sys.game.config.height/3),this.txt_titulo=this.add.text(this.left,this.top," Nivel "+o.getNivel(),{fontSize:this.size+"px",fontStyle:"bold",shadow:{offsetX:1,offsetY:1,color:"#ffa",blur:15,fill:!0},fill:"#ff9",fontFamily:"verdana, arial, sans-serif"}),this.txt_titulo.setAlpha(0),this.txt_titulo.setX(_(this.txt_titulo,this.sys.game.config.width)),this.tweens.add({targets:this.txt_titulo,alpha:1,yoyo:!0,duration:Math.floor(2500)}),this.timeline=this.add.timeline([{at:5e3,run:()=>{this.sonidoGalaxian.pause(),this.scene.start("aparecenenemigos")}}]),this.timeline.play(),this.sonidoGalaxian.play(),this.sonidoGalaxian.volume=.5}update(){this.estrella.update()}}const L=class e{constructor(e){this.relatedScene=e}create(){this.formacion=this.formaciones_nivel(o.getNivel()),console.log(o.getNivel()),this.enemigos=this.relatedScene.physics.add.group({key:["enemigos","enemigos2"],frameQuantity:this.formacion.EnemigoDeCadaTipo[0],gridAlign:{width:12,height:this.formacion.columnas,cellWidth:e.tileXY[0],cellHeight:e.tileXY[1],x:this.formacion.marginLeft,y:this.formacion.marginTop}}),this.enemigos.getChildren().forEach(((e,t)=>{this.inicializar(e,t)})),this.relatedScene.tweens.add({targets:this.enemigos.getChildren(),angle:10,yoyo:!0,duration:1e3,repeat:-1}),this.crea_enemigos_descendentes(),this.crea_anims(o.getNivel()),this.relatedScene.add.timeline([{at:3e4,run:()=>{this.enemigos.children.iterate((t=>{t.setVelocityY(e.VEL_Y)}))}}]).play(),console.log(this.enemigos.getChildren())}update(){this.formacion.x+=this.formacion.velX,(this.formacion.x>=this.formacion.recorrido&&this.formacion.velX>0||this.formacion.x<=-this.formacion.recorrido/2&&this.formacion.velX<0)&&(this.formacion.velX=-this.formacion.velX),Phaser.Actions.IncX(this.enemigos.getChildren(),this.formacion.velX),this.enemigos.children.iterate((t=>{t.y>this.relatedScene.sys.game.config.height&&t.setVelocityY(-e.VEL_Y),t.y<-200&&t.setVelocityY(e.VEL_Y)}))}inicializar(e,t){e.setAngle(350),e.setScale(.4),e.setDepth(2),e.setData("puntos",100+10*Phaser.Math.Between(0,9))}crea_enemigos_descendentes(){let e=7e3-500*o.getNivel();e<=2500&&(e=2500);let t=100-10*o.getNivel();t<=0&&(t=0);let i=[];1===o.getNivel()?this.enemigos.children.iterate(((e,t)=>{t>=24&&i.push(e)})):this.enemigos.children.iterate(((e,t)=>{i.push(e)})),this.relatedScene.tweens.add({targets:i,y:this.relatedScene.sys.game.config.height-t,ease:"sine.out",duration:1e3,yoyo:!0,delay:5500,repeat:-1,repeatDelay:e})}crea_anims(e){[["enemys-anim","enemigos"],["enemys2-anim","enemigos2"]].forEach((e=>{this.relatedScene.anims.create({key:e[0],frames:this.relatedScene.anims.generateFrameNumbers(e[1],{frames:[0,1,2]}),frameRate:5,repeat:-1})})),this.enemigos.getChildren().forEach(((e,t)=>{t<24?e.play("enemys-anim"):e.play("enemys2-anim")}))}get_posicion(t){const i=Math.floor(t/e.array_enemigos[0].length);return[t-i*e.array_enemigos[0].length,i]}formaciones_nivel(t){const i=[{x:0,velX:1,recorrido:60,marginLeft:0,marginTop:0,EnemigoDeCadaTipo:[24,24],columnas:4},{x:0,velX:1,recorrido:60,marginLeft:0,marginTop:0,EnemigoDeCadaTipo:[24,24],columnas:4},{x:0,velX:2,recorrido:60,marginLeft:0,marginTop:2*-e.tileXY[1],EnemigoDeCadaTipo:[36,36],columnas:6},{x:0,velX:2,recorrido:60,marginLeft:0,marginTop:4*-e.tileXY[1],EnemigoDeCadaTipo:[48,48],columnas:8},{x:0,velX:2,recorrido:60,marginLeft:0,marginTop:4*-e.tileXY[1],EnemigoDeCadaTipo:[48,48],columnas:8}];return t>4?i[4]:i[t]}get(){return this.enemigos}};t(L,"tileXY",[64,64]),t(L,"VEL_Y",120);let z=L;class Y extends z{constructor(e){super(),this.relatedScene=e}create(){this.formacion=this.formaciones_nivel(o.getNivel()),console.log(o.getNivel()),this.enemigos=this.relatedScene.physics.add.group({key:["enemigos","enemigos2"],frameQuantity:this.formacion.EnemigoDeCadaTipo[0],gridAlign:{width:12,height:this.formacion.columnas,cellWidth:z.tileXY[0],cellHeight:z.tileXY[1],x:this.formacion.marginLeft,y:this.formacion.marginTop}}),this.enemigos.getChildren().forEach(((e,t)=>{this.inicializar(e,t)})),this.crea_enemigos_descendentesApareciendo(),this.crea_anims(o.getNivel());const e=this.relatedScene.sys.game.config.width,t=this.relatedScene.sys.game.config.height;this.txt_preparado=this.relatedScene.add.text(Math.floor(e/2.6),Math.floor(t/1.4)," Preparado...",{fontSize:"30px",style:{align:"center"},shadow:{offsetX:1,offsetY:1,color:"#2f9",blur:9,fill:!0},fill:"#7f1",fontFamily:"verdana, arial, sans-serif"}),this.txt_preparado.setAlpha(0),this.txt_preparado.setX(_(this.txt_preparado,e)),this.relatedScene.tweens.add({targets:this.txt_preparado,alpha:1,yoyo:!0,duration:2e3}),console.log(this.enemigos.getChildren())}update(){}inicializar(e,t){e.setAngle(0),e.setScale(.4),e.setAlpha(0)}crea_enemigos_descendentesApareciendo(){this.relatedScene.tweens.add({targets:this.enemigos.getChildren(),alpha:1,delay:1400,duration:4100}),this.relatedScene.tweens.add({targets:this.enemigos.getChildren(),y:-Math.floor(this.relatedScene.sys.game.config.height/2),ease:"Sine.easeIn",duration:2400,yoyo:!0})}}class k extends i.Scene{constructor(){super({key:"aparecenenemigos"})}init(){this.estrella=new D(this),this.enemigoapareciendo=new Y(this),this.marcador=new M(this)}create(){this.sonidoIntroRetro=this.sound.add("sonidoIntroRetro"),this.add.image(0,0,"fondoAzulRojizo").setOrigin(0,0),this.estrella.create(),this.enemigoapareciendo.create(),this.marcador.create(),this.timeline=this.add.timeline([{at:5e3,run:()=>{this.scene.start("game")}}]),this.timeline.play(),this.sonidoIntroRetro.play(),this.sonidoIntroRetro.volume=.5}update(){this.estrella.update(),this.enemigoapareciendo.update()}}const U=class e{constructor(e){this.relatedScene=e}create(){const t=e.WIDTH,i=e.HEIGHT;this.boton=this.relatedScene.add.image(t-100,i-90,"boton-fire-joystick").setInteractive(),this.boton.setScale(2.3),this.isDown=!1,this.boton.on("pointerover",(()=>{this.boton.setScale(2.07)})),this.boton.on("pointerout",(()=>{this.boton.setScale(2)})),this.boton.on("pointerdown",(()=>{this.isDown=!0})),this.boton.on("pointerup",(()=>{this.isDown=!1}))}};t(U,"WIDTH",800),t(U,"HEIGHT",600);let F=U;class B{constructor(e,t){this.relatedScene=e,this.direccion=t}create(){const e=F.HEIGHT;this.boton=this.relatedScene.add.image(this.direccion.x,e-this.direccion.y,this.direccion.id).setInteractive(),this.boton.setScale(2.7,2.3),this.isDown=!1,this.boton.on("pointerover",(()=>{this.boton.setScale(2.8,2.4)})),this.boton.on("pointerout",(()=>{this.boton.setScale(2.7,2.3)})),this.boton.on("pointerdown",(()=>{this.isDown=!0})),this.boton.on("pointerup",(()=>{this.isDown=!1}))}}t(B,"WIDTH",800),t(B,"HEIGHT",600);class G extends i.Scene{constructor(){super({key:"game"})}init(){this.nivel_superado=!1,this.estrella=new D(this),this.jugador=new u(this),this.jugadorSV=new f(this),this.disparo=new n(this),this.enemigo=new z(this),this.disparoenemigo=new l(this),this.explosion=new g(this),this.particulas=new h(this),this.marcador=new M(this),this.botonfullscreen=new P(this),this.botonfire=new F(this),this.crucetaleft=new B(this,{id:"cruceta-left",x:80,y:60}),this.crucetaright=new B(this,{id:"cruceta-right",x:290,y:60})}preload(){V(this)}create(){this.sonidoDisparo=this.sound.add("sonidoDisparo"),this.sonidoExplosion=this.sound.add("sonidoExplosion"),this.sonidoGameOver=this.sound.add("sonidoGameOver"),this.sonidoLevelUp=this.sound.add("sonidoLevelUp"),this.sonidoNaveExplota=this.sound.add("sonidoNaveExplota"),this.sonidoGalaxian=this.sound.add("sonidoGalaxian"),this.sonidoIntroRetro=this.sound.add("sonidoIntroRetro"),this.sonidoDieT1=this.sound.add("dieT1"),this.sonidoDieT2=this.sound.add("dieT2"),this.add.image(0,0,"fondoAzulRojizo").setOrigin(0,0),this.estrella.create(),this.botonfullscreen.create(),this.botonfire.create(),this.crucetaleft.create(),this.crucetaright.create(),this.jugadorSV.create(),this.jugador.create(),this.disparo.create(),this.enemigo.create(),this.disparoenemigo.create(),this.explosion.create(),this.particulas.create(),this.marcador.create(),this.physics.add.collider(this.enemigo.get(),this.disparo.get(),v,null,this),this.physics.add.overlap(this.enemigo.get(),this.jugador.get(),b,((e,t)=>!(e.alpha<1)),this),this.physics.add.overlap(this.disparoenemigo.get(),this.jugador.get(),A,((e,t)=>!(e.alpha<1)),this)}update(){this.jugador.get().active&&this.jugador.get().visible&&function(e,t,i,s,o,a){if(e.controles.shift.isDown&&t.start("gameover"),(e.controles.space.isDown||i.isDown)&&s.now>o.cadencia.bandera){console.log("disparo");let t=!1;o.get().getChildren().forEach((i=>{console.log(i.active),i.active||i.visible||t||(t=!0,i.setActive(!0).setVisible(!0),i.enableBody(!0,e.get().x,e.get().y-Math.floor(e.get().body.height/2),!0,!0),i.setVelocityY(n.VEL_Y),i.setAlpha(.9),a.play())})),o.cadencia.bandera=s.now+o.cadencia.disparo}}(this.jugador,this.scene,this.botonfire,this.time,this.disparo,this.sonidoDisparo),function(e){let t=!1;e.enemigo.get().children.iterate((i=>{i.x<e.jugador.get().x+e.jugador.get().width&&i.x+i.width>e.jugador.get().x&&i.body.enable?e.disparoenemigo.get().getChildren().forEach((s=>{!s.active&&!s.visible&&!t&&e.time.now>e.disparoenemigo.cadencia.bandera&&(t=!0,y(s,i),S(i,e),e.disparoenemigo.cadencia.bandera=e.time.now+e.disparoenemigo.cadencia.disparo,e.sonidoDieT1.play(),e.sonidoDieT2.play())})):i.body.enable&&e.disparoenemigo.get().getChildren().forEach((s=>{Phaser.Math.Between(0,999)<9*o.getNivel()&&e.time.now>e.disparoenemigo.cadencia.bandera&&(t=!0,y(s,i),S(i,e),e.disparoenemigo.cadencia.bandera=e.time.now+e.disparoenemigo.cadencia.disparo,e.sonidoDieT1.play(),e.sonidoDieT2.play())}))}))}(this),this.estrella.update(),this.jugador.update(),this.disparo.update(),this.enemigo.update(),this.disparoenemigo.update(),this.nivel_superado&&this.scene.start("congratulations"),o.getVidas()<0&&this.scene.start("gameover")}}class H extends i.Scene{constructor(){super({key:"gameover"}),this.estrella=new D(this),this.marcador=new M(this),this.botonrejugar=new N(this)}create(){this.sonidoGameOver=this.sound.add("sonidoGameOver"),this.add.image(0,0,"fondoAzulRojizo").setOrigin(0,0),this.estrella.create(),this.marcador.create(),this.x=Math.floor(this.sys.game.config.width/2),this.y=Math.floor(this.sys.game.config.height/3),this.txt_gameover=this.add.text(this.x,this.y," Game Over ",{fontSize:"90px",fontStyle:"bold",shadow:{offsetX:1,offsetY:1,color:"#2ef",blur:15,fill:!0},fill:"#aff",fontFamily:"verdana, arial, sans-serif"}),this.txt_gameover.setAlpha(0),this.txt_gameover.setX(_(this.txt_gameover,this.sys.game.config.width)),this.tweens.add({targets:this.txt_gameover,alpha:1,duration:Math.floor(3500)}),this.timeline=this.add.timeline([{at:7e3,run:()=>{this.botonrejugar.create("menuprincipal")}}]),this.timeline.play(),this.sonidoGameOver.play(),this.sonidoGameOver.volume=.5,this.check_newRecord()}update(){this.estrella.update()}check_newRecord(){if(o.getPuntos()>=o.getRecord()){o.setRecord(o.getPuntos());const e=this.y-150;this.txt_newrecord=this.add.text(this.x,e," Enhorabuena! Nuevo Record! ",{fontSize:"40px",fontStyle:"bold",shadow:{offsetX:1,offsetY:1,color:"#fff",blur:7,fill:!0},fill:"#ff9",fontFamily:"verdana, arial, sans-serif"}),this.txt_newrecord.setX(_(this.txt_newrecord,this.sys.game.config.width)),this.tweens.add({targets:this.txt_newrecord,scale:2.1,ease:"sine.out",duration:1e3,yoyo:!0,delay:500,repeat:-1,repeatDelay:3e3})}}}class W extends i.Scene{constructor(){super({key:"congratulations"})}init(){this.estrella=new D(this),this.botoninicio=new N(this)}create(){this.incremento_nivel=o.getNivel()+1,this.sonidoLevelUp=this.sound.add("sonidoLevelUp"),this.sonidoMusicaFondo=this.sound.add("sonidoMusicaFondo"),this.add.image(0,0,"fondoAzulRojizo").setOrigin(0,0),this.estrella.create(),this.size=80,this.left=Math.floor(this.sys.game.config.width/5.2),this.top=Math.floor(this.sys.game.config.height/3),this.txt_titulo=this.add.text(this.left,this.top," Nivel Superado! ",{fontSize:this.size+"px",fontStyle:"bold",shadow:{offsetX:1,offsetY:1,color:"#fa1",blur:15,fill:!0},fill:"#fd2",fontFamily:"verdana, arial, sans-serif"}),this.txt_titulo.setX(_(this.txt_titulo,this.sys.game.config.width)),this.timeline=this.add.timeline([{at:3200,run:()=>{o.setNivel(this.incremento_nivel),this.botoninicio.create("prenivel")}}]),this.timeline.play(),this.sonidoLevelUp.play(),this.sonidoLevelUp.volume=.8,this.sonidoMusicaFondo.play(),this.sonidoMusicaFondo.volume=.4,console.log(this.txt_titulo)}update(){this.estrella.update()}}const Z={type:Phaser.AUTO,width:800,height:600,parent:"contenedor",scene:[T,C,j,k,G,W,H],physics:{default:"arcade",arcade:{debug:!1}},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH}};new Phaser.Game(Z);
