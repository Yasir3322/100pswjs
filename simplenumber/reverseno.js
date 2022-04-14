let no = 1234567;
let myfun = num => Number(num);
let intval = Array.from(String(no),myfun)

console.log(intval.reverse());
