"use strict";

function sketch(processing) {

	var ball;

	processing.setup = function() {
		processing.size(640,480);
		ball = new Ball();			
	}

	// draw function, by default it will be called 60 times per second
	processing.draw = function() {
		processing.background(127);
		ball.run();
	}

	// Ball class
	function Ball() {
	  this.p = [processing.random(processing.width), processing.random(processing.height)];
	  this.size = processing.random(100, 300);
	  this.speed = 1;
	}

	Ball.prototype.update = function() {
	  this.p[0] += processing.random(-this.speed, this.speed);
	  this.p[1] += processing.random(-this.speed, this.speed);
	}

	Ball.prototype.draw = function() {
	  processing.ellipse(this.p[0], this.p[1], this.size, this.size);
	}

	Ball.prototype.run = function() {
	  this.update();
	  this.draw();
	}

}

function main() {
	var canvas = document.getElementById("canvas1");
	var processingInstance = new Processing(canvas, sketch);
}

window.onload = main;
