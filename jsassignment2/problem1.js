function factorial(number) {
    if (number < 0) {
        return "enter a positive number";
} 
else if (number === 0) {
    return 1;
}
else {
    let answer = 1;
    for (let i = 1; i <= number; i++) {
        answer *= i;
}
return answer;
}
}

let ans = factorial(5);
console.log(ans);