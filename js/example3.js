"use strict";

function sketch(processing) {

	var numBalls = 500;
	var ball = [];
	var bgColor = processing.color(127,127,0);

	processing.setup = function() {
	  processing.size(640,480);
	  for (var i=0; i<numBalls; i++) {
	    ball[i] = new Ball();
	  }
	  processing.background(bgColor);
	}

	processing.draw = function() {
	  processing.noStroke();
	  processing.fill(bgColor,20);
	  processing.rect(0,0,processing.width,processing.height);
	  for (var i=0; i<numBalls; i++) {
	    ball[i].run();
	  }
	}

	function Ball() {
	  this.p = [ processing.random(processing.width), processing.random(processing.height)];
	  this.spread =  processing.random(5);
	  this.size =  processing.random(50);
	}

	Ball.prototype.update = function() {
	  this.p[0] +=  processing.random(this.spread) -  processing.random(this.spread);
	  this.p[1] +=  processing.random(this.spread) -  processing.random(this.spread);
	}

	Ball.prototype.draw = function() {
	  processing.noStroke();
	  processing.fill(200+ processing.random(50),0,0,150);
	  processing.ellipse(this.p[0],this.p[1],this.size,this.size);
	  processing.fill(255, processing.random(255),0);
	  processing.ellipse(this.p[0],this.p[1],2,2);
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
