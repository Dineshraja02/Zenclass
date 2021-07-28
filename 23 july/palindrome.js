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


var palin=(str2)=>{
    var str2=str2.trim();
    var arstr2=str2.split('');
    var rev2= arstr2.reverse();
    var rev3=rev2.join('');
    if(str2===rev3){
        console.log("Its a palindrome:"+str2);
    }
    else{
        console.log("Its not a palindrome:"+str2);
    }   
}
palin("mom");
palin("akraavanan");