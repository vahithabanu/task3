let XMLHttpRequest=require('xhr2');
let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function (){
    let countries=JSON.parse(xhr.responseText);
    //print country details
    console.log(`Country-Length:${countries.length}`);

    countries.forEach(country=>{
        console.log(`Country:${country.name.common}`);
        console.log(`Region: ${country.region}`);
        console.log(`Sub-Region: ${country.subregion}`);
        console.log(`Population: ${country.population}`);
    })
}