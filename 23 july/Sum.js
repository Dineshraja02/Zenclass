
function add(a) {
    var c=a[0]+a[1]+a[2]+a[3]+a[4];
    console.log(c);
}                  
      var f=[1,2,3,4,5];
      add(f);

(function Sum(a) {
    var c=a[0]+a[1]+a[2]+a[3]+a[4];
    console.log(c);
})([1,2,3,4,5]);

var sum1=(num)=>{
    var d=num[0]+num[1]+num[2]+num[3]+num[4];
    console.log(d);
}

sum1([1,2,3,4,5]);