var s;
function setup() {
    createCanvas(600, 600);
    s = new Mandelbrot();
    background(0);
    s.show();
}

function draw() {
}

function getSqr(a, b) {
	return a * a + b * b;
}

function getColor(i)
{
	//let a = Color('darkblue');
	//let b = Color('red');
	return log(i) * 64;//lerpColor(a, b, log(i) / 4);
}

function getMandelbrot(a, b) {
	let a1 = a, b1 = b;
	let i;
	for (i = 0; i < 2048 & getSqr(a1, b1) < 4; i++)
	{
		let nexta = a1 * a1 - b1 * b1 + a;
		b1 = 2 * a1 * b1 + b;
		a1 = nexta;
	}
	return getColor(i);
}

function Mandelbrot() {
    this.show = function () {
        for (y = 0; y < 600; y++) {
			for (x = 0; x < 600; x++) {
				stroke(getMandelbrot(x / 150 - 2 , y / 150 - 2));
				point(x, y);
			}
        }
    }
}