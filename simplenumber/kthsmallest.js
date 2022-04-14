var no = 235643;
let myfun = num => Number(num);
var intval = Array.from(String(no) , myfun);
let k = 3;

for(var i=0; i<intval.length; i++){
    var min = Math.min.apply(null,intval);
    console.log(min);
    intval.splice(intval.indexOf(min) , 1);
}