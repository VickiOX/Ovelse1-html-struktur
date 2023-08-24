const title= document.querySelector("h1");
console.log("title");

let text= document.querySelector("article:nth-child(1) p");
console.log("text");

title.textContent = "en anden title";
text.textContent = "halløj";

let text2 = document.querySelector("article:nth-child(2) p")
text2.textContent = "halløj igen";



let textp1= document.querySelector("article:nth-child(1) h2");
textp1.textContent = " halli halløj";

let textp2= document.querySelector("article:nth-child(2) h2");
textp2.textContent = " halli halløj og et lige øjeblik";