function upperCase(str) {
    this.str1=str.toUpperCase();
    console.log(this.str1);   
}

upperCase("dinesh");
upperCase("akraavanan");


(function upperCase1(string) {
    this.string1=string.toUpperCase();
    console.log(this.string1); 
})("akraavanan");

var caps=(str2)=>{
   str2=str2.toUpperCase();
    console.log(str2);
}

caps("akraavanan");
caps("dinesh");