function odd(a) {
    
    var c="";
    for(let i=0;i<a.length;i++)
    {
        var b=0;
       for(let j=1;j<=a[i];j++) 
       {
        if(a[i]%j===0)
        {
            ++b;
        }
       }
       if(b===2)
       {
           c+=" "+a[i]
       }
    }
    console.log(c);     
}                
      var f=[2,3,5,7,8,11];
      odd(f);
      
      
(function Sum(a) {
    var c="";
    for(let i=0;i<a.length;i++)
    {
        var b=0;
       for(let j=1;j<=a[i];j++) 
       {
        if(a[i]%j===0)
        {
            ++b;
        }
       }
       if(b===2)
       {
           c+=" "+a[i]
       }
    }
    console.log(c);   
    })([2,3,5,7,8,11]);
