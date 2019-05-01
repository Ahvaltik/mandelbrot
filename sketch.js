var s;
var boundary = 1024;
var resolution = 512;

function setup() {
    createCanvas(resolution, resolution);
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
	if (i == boundary)
		return color('black');
	let a = color('darkblue');
	let b = color('white');
	return lerpColor(a, b, log(i) / 4);
}

function getMandelbrot(a, b) {
	let a1 = a, b1 = b;
	let i;
	for (i = 0; i < boundary & getSqr(a1, b1) < 4; i++)
	{
		let nexta = a1 * a1 - b1 * b1 + a;
		b1 = 2 * a1 * b1 + b;
		a1 = nexta;
	}
	return getColor(i);
}

function Mandelbrot() {
    this.show = function () {
        for (y = 0; y < resolution; y++) {
			for (x = 0; x < resolution; x++) {
				stroke(getMandelbrot( 4 * x / resolution - 2 , 4 * y / resolution - 2));
				point(x, y);
			}
        }
    }
}