

let XMLHttpRequest=require('xhr2');
let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function (){
    let countries=JSON.parse(xhr.responseText);
    //Extract and log all country flags
    console.log(`Country-Length:${countries.length}`);
    countries.forEach(country=>{
        if(country.flags){
            console.log(country.flags.png);
        }
    });
    //console.log(countries[0].flag, typeof(countries[0].flag));
}