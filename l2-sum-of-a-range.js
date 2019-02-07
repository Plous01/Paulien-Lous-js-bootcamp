function range(start, end, step){
    let result = [];
    let idx = 0;
    for (let i = start; i <= end; i+=step){
        result [idx]=i;
        idx = idx + 1;
    }
 return result;
}
console.log(range(10,25,2));



function sum(list){
    let count = 0;
    for (let i = 0; i < list.length; i++){
        count = count + list [i];
    }
return count;
}
console.log(sum(range(1,10,2)));


