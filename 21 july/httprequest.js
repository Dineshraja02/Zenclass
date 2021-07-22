//var xhr = new XMLHttpRequest();
//        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
//        xhr.onload = function () {
//          var data = JSON.parse(this.response);
//         console.log(data);
//       };
//        xhr.send();
//    use the restcountries API url ->  https://restcountries.eu/rest/v2/all
//    and display all the country flags in console
//    Ans:
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://restcountries.eu/rest/v2/all");
            xhr.onload = function () {
            var data = JSON.parse(this.response);
            for(let i=0;i<data.length;i++) {
            console.log(data[i].name+':'+data[i].flag);
            }
            };
    xhr.send();