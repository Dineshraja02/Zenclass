function palindrome(str) {
    var str=str.trim();
    var arstr=str.split('');
    var rev= arstr.reverse();
    var rev1=rev.join('');
    if(str===rev1){
        console.log("Its a palindrome:"+str);
    }
    else{
        console.log("Its not a palindrome:"+str);
    }
}
 
palindrome("mam");
palindrome("mom");
palindrome("man");

(function palindrome1(str) {
    var str=str.trim();
    var arstr=str.split('');
    var rev= arstr.reverse();
    var rev1=rev.join('');
    if(str===rev1){
        console.log("Its a palindrome:"+str);
    }
    else{
        console.log("Its not a palindrome:"+str);
    }    
})('man');