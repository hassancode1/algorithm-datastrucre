function foo(n) {
    
    if(n === 1) return 1

    return n * (foo(n -1))
}
console.log(foo(5))
