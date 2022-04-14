let no = 348567; 
let myfun = num => Number(num);
let intval = Array.from(String(no),myfun);
let min = Math.min.apply(null,intval);
var ri = intval.indexOf(min);
intval.splice(ri,1)
let smin = Math.min.apply(null,intval);
console.log("second smallest: "+smin)