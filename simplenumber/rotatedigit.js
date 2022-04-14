let no = 12345;
let myfun = num => Number(num)
var intval = Array.from(String(no),myfun)
let k =3;
for(let i=1; i<k; i++){
   let a = intval.splice(intval.indexOf(i),1);
    intval.push(a);
}
console.log(intval)