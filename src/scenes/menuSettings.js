import { Scene } from 'phaser';
import { loader } from './loader.js';
import { centrar_txt } from '../utils/functions.js';
import { Settings } from './settings.js';
import { Estrella } from '../components/fondo.js';
import { BotonNuevaPartida, BotonSettings } from "../components/boton-nuevapartida.js";
import { ElegirControles } from '../components/elegirControles.js';

export class MenuSettings extends Scene {

    constructor()
    {
        super({ key: 'menusettings' });
    }

    init()
    {
        this.estrella = new Estrella(this);
        this.botoninicio = new BotonNuevaPartida(this);
        this.radiobuttons = [];

        this.radiobuttons.push(new ElegirControles(this, {
            left: Math.floor(this.sys.game.config.width / 18),
            top: Math.floor(this.sys.game.config.height / 4),
            frame: 1, scale: 1, texto: ' Cursor & space-bar ', id: 'teclado'
        }));

        this.radiobuttons.push(new ElegirControles(this, {
            left: Math.floor(this.sys.game.config.width / 18),
            top: Math.floor(this.sys.game.config.height / 2.5),
            frame: 0, scale: 1, texto: ' Mobile controls ', id: 'mobile'
        }));
    } 

    preload() {}
    
    create()
    {
        const aparecerBoton = 1000;

        this.add.image(0, 0, 'fondoAzulRojizo').setOrigin(0, 0);
        this.estrella.create();

        this.radiobuttons.forEach(radiobutton => radiobutton.create());

        this.timeline = this.add.timeline([
            {
              at: aparecerBoton,
              run: () => 
              {
                this.botoninicio.create('menuprincipal');
              }
            }
        ]);
        
        this.timeline.play();
    }

    update()
    {
        this.estrella.update();
    }
}
