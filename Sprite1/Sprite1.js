/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Circle_-_black_simple",
        "./Sprite1/costumes/Circle_-_black_simple.svg",
        { x: 214, y: 214 }
      )
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.penColor = Color.rgb(60, 154, 154);
    this.penSize = 100;
    this.penDown = true;
    while (true) {
      this.clearPen();
      yield* this.wait(0.05);
      this.clearPen();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(Color.rgb(255, 0, 0))) {
        yield* this.glide(
          1,
          this.sprites["Sprite2"].x,
          this.sprites["Sprite2"].y
        );
      } else {
        this.goto(this.mouse.x, this.mouse.y);
        this.createClone();
      }
      yield;
    }
  }

  *startAsClone() {
    yield* this.glide(0, this.sprites["Sprite2"].x, this.sprites["Sprite2"].y);
    this.deleteThisClone();
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.restartTimer();
      yield;
    }
  }

  *whengreaterthan() {
    while (true) {
      this.clearPen();
      this.goto(0, 0);
      yield;
    }
  }
}
