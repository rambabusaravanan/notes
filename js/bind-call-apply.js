function fn(a, b, c) {
  console.log(this.z, a, b, c);
  return 'hello world';
}

/** bind : bind & return fn : .bind(this, arg1, arg2)(arg3) **/
f = fn.bind({ z: 'z' });
x = f();          // z undefined undefined undefined // x -> 'hello world'
x = f(1, 2);      // z 1 2 undefined // x -> 'hello world'
f = fn.bind({ z: 'z' }, 1);
x = f();          // z 1 undefined undefined  // 'hello world'
x = f(2);         // z 1 2 undefined // 'hello world'

/** call : bind & exec fn : .call(this, arg1, arg2, arg3) **/
x = fn.call({ z: 'z' });        // z undefined undefined undefined  // x -> 'hello world'
x = fn.call({ z: 'z' }, 1, 2);  // z 1 2 undefined // x -> 'hello world'

/** apply : bind & exec fn : .apply(this, [arg1, arg2, arg3])  **/
x = fn.apply({ z: 'z' });           // z undefined undefined undefined  // x -> 'hello world'
x = fn.apply({ z: 'z' }, [1, 2]);   // z 1 2 undefined // x -> 'hello world'
