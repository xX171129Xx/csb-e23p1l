/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Circle_-_black_simple",
        "./Sprite2/costumes/Circle_-_black_simple.svg",
        { x: 214, y: 214 }
      )
    ];

    this.sounds = [new Sound("Meow", "./Sprite2/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.penColor = Color.rgb(60, 154, 154);
    this.penSize = 100;
    this.penDown = true;
  }
}
