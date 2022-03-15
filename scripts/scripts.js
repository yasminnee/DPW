/*var, let, const, typeof (cari jenis) . array, looping*/
/*let a = 6/2;

if(a==2)console.log("benar")
else console.log("salah!!!!")*/

const h1=document.getElementById("hai"); //gaada id
h1.style.color="green";
h1.style.backgroundColor="purple";

const h2=document.getElementsByTagName("h1");
h2[2].style.color="purple";

//const h3=document.getElementsByClassName("coba"); /////
//h3[1].style.backgroundColor="green";

const h4=document.querySelector(".coba");
h4.style.backgroundColor="green";
h4.style.color="white";

const h5=document.querySelectorAll("p");/////
h5[1].style.color="green";

document.write("kauuu");

//manipulation node

var judul=document.createElement("h1");

judul.innerText=("wawwwww");

document.body.append(judul);

//manipulation element untuk tugas