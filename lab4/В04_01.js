Object.prototype.size = function () {
  return Object.keys(this).filter(k => typeof this[k] !== 'function').length;
};


let a = { id: 10, name: "Alice", greet() { return "hi"; } }; 
let b = new Object();
b.count = 3;
b.active = true;
b.do = () => {}; 

const proto = { inherited: 42 };
let c = Object.create(proto);
c.own = "yes";
c.fn = function() {}; 

console.log(a.size());
console.log(b.size()); 
console.log(c.size());
