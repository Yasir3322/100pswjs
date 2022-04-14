let no = 233787;
let myfun = num => Number(num);
var intval = Array.from(String(no) , myfun);
let sum=0;
for(var i=0; i<intval.length; i++){
    sum = sum+intval[i];
}
console.log(sum)