function Candy(volume, weight) {
    this.volume = volume; 
    this.weight = weight; 
}

Candy.prototype.toString = function() {
    return `об'єму ${this.volume} см³, ваги ${this.weight} г`;
}
Candy.prototype.getSugar = function() {
    return 0.0;
}


function Caramel(volume, weight) {
    Candy.call(this, volume, weight);
}

Caramel.prototype.toString = function() {
    return "Карамель " + Candy.prototype.toString.call(this);
}
Caramel.prototype.getSugar = function() {
    return 0.72 * this.volume;
}


function Jelly(volume, weight) {
    Candy.call(this, volume, weight);
}

Jelly.prototype.toString = function() {
    return "Желейка " + Candy.prototype.toString.call(this);
}
Jelly.prototype.getSugar = function() {
    return 0.45 * this.volume;
}


function Present(candies) {
    this.candies = candies;
}

Present.prototype.toString = function() {
    return "Подарунок: " + this.candies.join(", ");
}
Present.prototype.getWeight = function() {
    let w = 0.0;
    for (const c of this.candies) {
        w += c.weight;
    }
    return w;
}
Present.prototype.findBySugar = function(min, max) {
    let res = [];
    for (const c of this.candies) {
        const s = c.getSugar();
        if (s >= min && s <= max) res.push(c);
    }
    return res;
}


let candies = [
    new Caramel(10, 8),
    new Jelly(12, 6),
    new Caramel(7, 5),
    new Jelly(20, 12),
];

let present = new Present(candies);

console.log(present.toString());      
console.log(present.getWeight());    

let selected = present.findBySugar(5, 8); 
console.log(selected.join(", "));
