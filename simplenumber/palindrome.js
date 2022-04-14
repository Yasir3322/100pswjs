let no = 202;
var str = String(no);
let revno = str.split("").reverse().join("");
if(no == revno){
    console.log("no is palindrome")
}
else{
    console.log("no is not a palindrome")
}
