function fn(a, b, c) {
  console.log(this.z, a, b, c);
  return 'hello world';
}

/** bind **/
f = fn.bind({ z: 'z' });
x = f();          // z undefined undefined undefined // x -> 'hello world'
x = f(1, 2);      // z 1 2 undefined // x -> 'hello world'
f = fn.bind({ z: 'z' }, 1);
x = f();          // z 1 undefined undefined  // 'hello world'
x = f(2);         // z 1 2 undefined // 'hello world'

/** call **/
x = fn.call({ z: 'z' });        // z undefined undefined undefined  // x -> 'hello world'
x = fn.call({ z: 'z' }, 1, 2);  // z 1 2 undefined // x -> 'hello world'

/** apply **/
x = fn.apply({ z: 'z' });           // z undefined undefined undefined  // x -> 'hello world'
x = fn.apply({ z: 'z' }, [1, 2]);   // z 1 2 undefined // x -> 'hello world'
