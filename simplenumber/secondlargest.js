let no = 348567; 
let myfun = num => Number(num);
let intval = Array.from(String(no),myfun);

let k = 4;

for(var i=0; i<k;i++){
    var max = Math.max.apply(null,intval);
    console.log(max)
    intval.splice(intval.indexOf(max),1);
    // var semax = Math.max.apply(null,intval)  
}

