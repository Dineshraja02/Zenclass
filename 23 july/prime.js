function prime(a) {
    
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
      prime(f);
      
      
(function prime1(a) {
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

    var prime2=(a)=>{
        var d="";
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
               d+=" "+a[i]
           }
        }
        console.log(d);
    }

    prime2([2,3,5,7,8,11]);