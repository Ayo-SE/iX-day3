function fib(num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else if (num == 2) {
        return 1;
    } else {
        return fib(num - 2) + fib(num - 1);
    }
}

for (let i = 1; i <= 20; i++) {
    console.log(fib(i));
}