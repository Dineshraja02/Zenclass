function dupstr(str) {
    var str=str.split("");
    var ind=0;
    for(var i=0;i<str.length;i++)
        {
            for(var j=0;j<str.length;j++)
            {
                if(str[i]==str[j])
                {
                    break;
                }
            }
            if(i==j)
            {
                str[ind++]=str[i];
            }
        }
        console.log(str.join("").slice(str,ind));
}

dupstr("aabbccddee");

(function dupstr1(str1) {
    var str1=str1.split("");
    var ind=0;
    for(var i=0;i<str1.length;i++)
        {
            for(var j=0;j<str1.length;j++)
            {
                if(str1[i]==str1[j])
                {
                    break;
                }
            }
            if(i==j)
            {
                str1[ind++]=str1[i];
            }
        }
        console.log(str1.join("").slice(str1,ind));
       
    })("ffgghhiijj");
