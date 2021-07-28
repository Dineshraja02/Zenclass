function odd(a) {
    var b="";
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            b+=" "+a[i];
        }
    }
    console.log(b);
}                  
      var f=[1,2,3,4,5];
      odd(f);

(function odd1(a) {
    var b="";
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            b+=" "+a[i];
        }
    }
    console.log(b);
    
})([1,2,3,4,5]);

var odd2=(num)=>{
    var num1="";
    for(let i=0;i<num.length;i++)
    {
        if(num[i]%2!==0)
        {
            num1+=" "+num[i];
        }
    }
    console.log(num1);

}

odd2([1,2,3,4,5]);