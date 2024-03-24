import { Scene } from 'phaser';
import { loader } from './loader.js';
import { Textos } from '../components/textos.js';
import { centrar_txt } from '../utils/functions.js';
import { Settings } from './settings.js';
import { Estrella } from '../components/fondo.js';
import { BotonNuevaPartida, BotonSettings } from "../components/boton-nuevapartida.js";

export class MenuPrincipal extends Scene
{
    constructor()
    {
        super({ key: 'menuprincipal' });
    }

    init()
    {
        Settings.setPuntos(0);
        Settings.setNivel(1);
        Settings.setVidas(3);

        this.estrella = new Estrella(this);
        this.botoninicio = new BotonNuevaPartida(this);
        this.botonsettings = new BotonSettings(this);

        const widthScreen = this.sys.game.config.width;
        const heightScreen = this.sys.game.config.height;

        this.txt = new Textos(this, {
            x: Math.floor(widthScreen / 2),
            y: Math.floor(heightScreen / 3.5),
            txt: ' Loading...',
            size: 55, color: '#ffa', style: 'bold',
            stroke: '#f91', sizeStroke: 16,
            shadowOsx: 2, shadowOsy: 2, shadowColor: '#111',
            bool1: false, bool2: true, origin: [0.5, 0.5],
            elastic: false, dura: 0
        });

        this.txt.create();

        this.add.rectangle(
            Math.floor(widthScreen / 2), Math.floor(heightScreen / 2),
            Math.floor(widthScreen / 1.5), Math.floor(heightScreen / 12)
        ).setStrokeStyle(1, 0xffee88);

        const bar = this.add.rectangle(
            Math.floor(widthScreen / 2) - Math.floor(widthScreen / 3) + 4,
            Math.floor(heightScreen / 2),
            4,
            Math.floor(heightScreen / 14),
            0xff9911
        );

        this.load.on('progress', (progress) => {
            bar.width = (Math.floor(widthScreen / 1.52) * progress);
        });
    } 

    preload()
    {
        loader(this);
    }
    
    create()
    {
        const aparecerBoton = 3200;

        this.sonidoMusicaFondo = this.sound.add('sonidoMusicaFondo');

        this.add.image(0, 0, 'fondoAzulRojizo').setOrigin(0, 0);
        this.estrella.create();

        this.size = 99;
        this.left = 0;
        this.top = Math.floor(this.sys.game.config.height / 4);
        
        this.txt_titulo = this.add.text(this.left, this.top, ' GalaxIMI ', {
            fontSize: this.size + 'px',
            fontStyle: 'bold',
            shadow: {
                offsetX: 1,
                offsetY: 1,
                color: '#ffa',
                blur: 15,
                fill: true
            },
            fill: '#aff',
            fontFamily: 'verdana, arial, sans-serif'
        });

        this.txt_titulo.setX(Math.floor(this.sys.game.config.width / 2)).setScale(0);

        this.tweens.add({
            targets: this.txt_titulo,
            scale: 1,
            // x: Math.floor(this.sys.game.config.width / 6.2),
            x: Math.floor(this.sys.game.config.width / 2) - Math.floor(this.txt_titulo.width / 2),
            duration: 3000
        });

        this.timeline = this.add.timeline([
            {
              at: aparecerBoton,
              run: () => {
                this.botoninicio.create('prenivel');
                this.botonsettings.create('menusettings');
              }
            }
        ]);
        
        this.timeline.play();

        this.sonidoMusicaFondo.play();
        this.sonidoMusicaFondo.volume = 0.4;

        console.log(this.txt_titulo);
    }

    update()
    {
        this.estrella.update();
    }
}
