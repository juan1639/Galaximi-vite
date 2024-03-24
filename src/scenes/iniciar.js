import { Scene } from 'phaser';
import { centrar_txt } from "../utils/functions.js";

export class Iniciar extends Scene {

    constructor()
    {
        super({ key: 'iniciar' });
    }

    create()
    {
        this.size = 60;
        this.left = Math.floor(this.sys.game.config.width / 6.2);
        this.top = Math.floor(this.sys.game.config.height / 3);
        
        const txt1 = this.add.text(this.left, this.top, ' Touch screen or \n  click to start... ', {
            fontSize: this.size + 'px',
            fontStyle: '500',
            align: 'left',
            shadow: {
                offsetX: 1,
                offsetY: 1,
                color: '#fff',
                blur: 7,
                fill: true
            },
            fill: '#ffa',
            fontFamily: 'verdana, arial, sans-serif'
        });

        txt1.setX(centrar_txt(txt1, this.sys.game.config.width));

        this.input.on('pointerdown', () => this.scene.start('menuprincipal'));

        console.log(this);
    }
}
