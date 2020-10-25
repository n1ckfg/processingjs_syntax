"use strict";

function sketch(p) {

	let centerX, centerY, maxArmLength;

	p.setup = function() {
		p.size(640,480);

		// determine center and max clock arm length
		centerX = p.width / 2;
		centerY = p.height / 2;
		maxArmLength = Math.min(centerX, centerY);					
	}

	// draw function, by default it will be called 60 times per second
	p.draw = function() {
		// erase background
		p.background(224);

		let now = new Date();

		// Moving hours arm by small increments
		let hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;
		drawArm(hoursPosition, 0.5, 5);

		// Moving minutes arm by small increments
		let minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;
		drawArm(minutesPosition, 0.80, 3);

		// Moving hour arm by second increments
		let secondsPosition = now.getSeconds() / 60;
		drawArm(secondsPosition, 0.90, 1);
	}

	function drawArm(position, lengthScale, weight) {
		p.strokeWeight(weight);
		p.line(centerX, centerY,
		centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,
		centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
	}

}

function main() {
	let canvas = document.getElementById("canvas1");
	let pInstance = new Processing(canvas, sketch);
}

window.onload = main;
