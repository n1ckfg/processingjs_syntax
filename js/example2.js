"use strict";

function sketch(p) {

	let ball;

	p.setup = function() {
		p.size(640,480);
		ball = new Ball();			
	}

	// draw function, by default it will be called 60 times per second
	p.draw = function() {
		p.background(127);
		ball.run();
	}

	class Ball {

		constructor() {
		  this.pos = [p.random(p.width), p.random(p.height)];
		  this.size = p.random(100, 300);
		  this.speed = 1;
		}

		update() {
		  this.pos[0] += p.random(-this.speed, this.speed);
		  this.pos[1] += p.random(-this.speed, this.speed);
		}

		draw() {
		  p.ellipse(this.pos[0], this.pos[1], this.size, this.size);
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
