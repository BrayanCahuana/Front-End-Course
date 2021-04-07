

//para llamar id
let demoID = document.getElementById ("demo")

//console.log (demoID)

demoID.style.border = "5px solid blue"
//para llamar clase
let demoClass = document.getElementsByClassName ("demo")


demoClass[0].style.border = "5px solid green"
demoClass[1].style.border = "5px dotted brown"

for (let i = 0; i < demoClass.length ; i++ ){
    demoClass[i].style.border = "5px solid red"
}

/*const demoTag = document.getElementsByTagName("article")

for (i=0; i<demoTag.length;i++){
    console.log (demoTag)
    demoTag[i].style.border = "5px solid green"
}

const a = 0
while ( a <= demoTag.length) {
demoTag[a].style.border = "5px solid pink";
a++;
}*/

/*const demoQuery = document.querySelector("demo-query")

demoQuery[0].style.border = "10px dotted purple"*/



const evento = document.getElementById("demo-query")

