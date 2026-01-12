"uses strick";
import{TSprite} from "libSprite";

export class TBackground{
    #spriteBackground;
    #spriteGround;

    contructor(aSpcvs, aSPI){
        this.#spriteBackground = new TSprite(aSpcvs, aSPI.background,0,0);
    }


    draw(){
        this.#spriteBackground.draw();
    }

}