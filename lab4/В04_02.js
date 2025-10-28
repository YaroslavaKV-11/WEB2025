function Shape() { }

Shape.prototype.area = function () {
    return 0;
};


function Ellipse(a, b) {
    Shape.call(this);
    this.a = a; 
    this.b = b; 
}

Ellipse.prototype = Object.create(Shape.prototype);
Ellipse.prototype.constructor = Ellipse;

Ellipse.prototype.area = function () {
    return Math.PI * this.a * this.b;
};


function Circle(r) {
    Ellipse.call(this, r, r);
}

Circle.prototype = Object.create(Ellipse.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * this.a * this.a;
};


let s = new Shape();
let e1 = new Ellipse(3, 5);
let e2 = new Ellipse(4.2, 1.7);
let c1 = new Circle(10);

console.log(s.area());   
console.log(e1.area());  
console.log(e2.area());  
console.log(c1.area()); 
