function solve(arr,type){
    let result =  (type == "asc") ? arr.sort((a,b)=>a-b) : arr.sort((a,b)=>b-a);
    return result;
}
let sorted = solve([1,2,3,4,5], "asc")
console.log(sorted)
