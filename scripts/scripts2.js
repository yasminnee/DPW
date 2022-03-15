console.log("hai bestie");

for (let hai = 0; hai < 5; hai++) {
  console.log("ini hai ke-"+hai);
}

const h1=document.getElementsByClassName("topnav");
h1[0].style.letterSpacing="3px";

const h2=document.getElementById("opening");
h2.style.color="peachpuff";

const h3=document.getElementsByTagName("p");
h3[1].style.color="rosybrown";
h3[1].style.fontSize="110%"; 
h3[0].style.marginBottom="0.5%";
h3[1].style.margin=0;
h3[1].style.paddingTop=0;

const h4=document.getElementsByTagName("h4");
h4[0].style.color="darkslateblue";
h4[1].style.color="darkslateblue";

const h5=document.querySelectorAll("p");
h5[2].style.textAlign="justify";
h5[3].style.textAlign="justify";

const h6=document.getElementsByTagName("button");
for(let i = 0; i < 2; i++){
  h6[i].style.backgroundColor="darksalmon";
  h6[i].style.color="black";
}

const remove=document.querySelector(".footer");
remove.classList.remove("footer");

var footer=document.createElement("p");
footer.innerText=("Copyright 2022 Yasminne | All Rights Reserved");
document.body.append(footer);

const h7=document.getElementsByTagName("p");
h7[4].style.textAlign="center";
let a = new Date().getHours();
if (a < 18) {
    h7[4].innerHTML = "Good day!";
}else{
  h7[4].innerText="Good Evening!";
}
h7[5].style.backgroundColor="slateblue"; 
h7[5].style.color="peachpuff";
h7[5].style.textAlign="center";
h7[5].style.fontSize="90%";
h7[5].style.marginBottom="0";
h7[5].style.padding="2%";