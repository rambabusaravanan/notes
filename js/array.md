```node
a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
```

slice -> returns a slice of array
```node
> a.slice(4, 5) // (start, exc.end)
[ 5 ]
> a
[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ] // no change
```

splice -> modifies the array
```node
> a.splice(4, 1) // (start, length)
[ 5 ]
> a
[ 1, 2, 3, 4, 6, 7, 8, 9, 10 ] // element 5 removed
```
