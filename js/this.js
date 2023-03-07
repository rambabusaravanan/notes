var a = "global-a";
function fn1(name) { console.log("NormFn:", this.a, name, ":", arguments.length, ...arguments) }
const fn2 = (name) => console.log("FlatFn:", this.a, name);

/** in global context */
console.log('\n# in global context\n');
const name = "Andro";
fn1(name);      // "global-a"; owner obj of the fn
fn2(name);      // "global-a"; execution context

/**  in (owner) obj context */
console.log('\n# in (owner) obj context\n');
var obj = { a: "obj-a", fn1, fn2 };

obj.fn1(name);  // "obj-a"; owner obj of the fn
obj.fn2(name);  // "global-a"; execution context

/** call / apply / bind */
console.log('\n# call / apply / bind\n');
var o = { a: "o-a" }

obj.fn1.call(o, name)
obj.fn1.apply(o, [name])
var gFn1 = fn1.bind(o)
gFn1(name);


/** more fn.bind(obj) */
console.log('\n# more bind\n');
const fName = 'Andro', lName = 'Babu';
function bFn(fName, lName) { console.log(this.a, fName, lName, arguments) }

var bFn1 = bFn.bind(o, 'fName', 'lName')
bFn1();
var bFn2 = bFn.bind(o)
bFn2(fName, lName);
var bFn3 = bFn.bind(o, 'fName', 'lName')
bFn3(fName, lName);
var bFn4 = bFn.bind(o, 'fName')
bFn4(fName);

var oFn2 = obj.fn2.bind(o)
oFn2(name); // "global-a"; arrow fn cannot bind to anything


/** more 'this' context function */
function fn() {
  console.log('# fn context\n')
  var a = 'fn-a';

  console.log(this.a, name, arguments);

  function fn1(name) { console.log(this.a, name, arguments) }

  const fn2 = (name) => console.log(this.a, name);

  fn1(name);      // "global-a"
  fn2(name);      // "global-a"
}

console.log('# exec fn()')
fn();

console.log('# exec const f = new fn()')
const f = new fn();

console.log('# exec const f.fn1(), f.fn2()')
f.fn1(name);
f.fn2(name);
