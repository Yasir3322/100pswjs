// let a = String(no).split('');
// let intval = a.map(function(l){
//     return Number(l);
// })
// console.log(intval);
let no = 348567; 

let myfun = num => Number(num);

let intval = Array.from(String(no),myfun);
let findno = 4;
let greaterno=0;
for(var i=0; i<intval.length; i++){
    // if(intval[i] == findno){
    //     // console.log("Your digit is at index: "+i);
    //     // console.log("total digit in n: "+intval.length);

    // }
    if(greaterno<intval[i])
      {greaterno = intval[i]   
}
}
console.log("largestno: "+greaterno)
