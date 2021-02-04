const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);

let hasElem1 , hasElem2;
hasElem1 = set1.has(3);
hasElem2 = set1.has(4);
console.log(hasElem1,hasElem2);

console.log(set1.has(1));

set1.add(4);
set1.add(5);

for(let elem of set1){
    console.log(elem);
}
let sum = 0;
for(let i of set1){
    sum += i;
}
console.log(sum);

set1.delete(2);  

set1.clear();



//--------------------------------------------------


const arr1 = ['user1', 'user2','user3','user4'];
const arr2 = [20,18,61,42];

let map1 = new Map();
map1.set(arr1,arr2);
