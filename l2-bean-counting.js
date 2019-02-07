//
function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            count = count + 1;
        }
    }
    return count;
}

console.log(countBs("Bob"));
console.log(countBs("BoB"));



//
function countChar(str, ch){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count = count + 1;
        }
    }
    return count;
}

console.log(countChar("Peter", "e"));
