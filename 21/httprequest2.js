//3) use the same restcountries and print all countries name, region, sub region and population.
//    Ans:
             var xhr = new XMLHttpRequest();
             xhr.open("GET", "https://restcountries.eu/rest/v2/all");
             xhr.onload = function () {
             var data = JSON.parse(this.response);
             for(let i=0;i<data.length;i++) {
             console.log(data[i].name+','+data[i].region+','+data[i].subregion+','+data[i].population);
             }
             };
    xhr.send();