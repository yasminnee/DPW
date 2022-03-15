console.log("hai bestie");

const h2=document.getElementsByTagName("p");
h2[0].style.color="peachpuff";
h2[1].style.color="rosybrown";
h2[1].style.fontSize="110%"; 
h2[0].style.marginBottom="0.5%";
h2[1].style.margin=0;
h2[1].style.paddingTop=0;
h2[2].style.textAlign="justify";
h2[3].style.textAlign="justify";

document.write(Date());

const remove=document.querySelector(".footer");
remove.classList.remove("footer");

var footer=document.createElement("p");
footer.innerText=("Copyright 2022 Yasminne | All Rights Reserved");
document.body.append(footer);

const h4=document.getElementsByTagName("p");
h4[4].innerText="";
h4[5].style.backgroundColor="slateblue"; 
h4[5].style.color="peachpuff";
h4[5].style.textAlign="center"; //y
h4[5].style.fontSize="90%";
h4[5].style.marginBottom="0";
h4[5].style.padding="2%";