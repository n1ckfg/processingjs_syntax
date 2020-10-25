"use strict";

function sketch(p) {

	const numBalls = 500;
	let ball = [];
	const bgColor = p.color(127,127,0);

	p.setup = function() {
	  p.size(640,480);
	  for (let i=0; i<numBalls; i++) {
	    ball[i] = new Ball();
	  }
	  p.background(bgColor);
	}

	p.draw = function() {
	  p.noStroke();
	  p.fill(bgColor, 20);
	  p.rect(0, 0, p.width, p.height);
	  for (let i=0; i<numBalls; i++) {
	    ball[i].run();
	  }
	}

	class Ball {

		constructor() {
		  this.pos = [ p.random(p.width), p.random(p.height)];
		  this.spread = p.random(5);
		  this.size = p.random(50);
		}

		update() {
		  this.pos[0] +=  p.random(this.spread) -  p.random(this.spread);
		  this.pos[1] +=  p.random(this.spread) -  p.random(this.spread);
		}

		draw() {
		  p.noStroke();
		  p.fill(200+ p.random(50), 0, 0, 150);
		  p.ellipse(this.pos[0], this.pos[1], this.size, this.size);
		  p.fill(255, p.random(255), 0);
		  p.ellipse(this.pos[0], this.pos[1], 2, 2);
		}

		run() {
		  this.update();
		  this.draw();
		}

	}

}

function main() {
	let canvas = document.getElementById("canvas1");
	let pInstance = new Processing(canvas, sketch);
}

window.onload = main;
