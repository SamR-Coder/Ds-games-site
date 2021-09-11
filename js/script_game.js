var current =0

for (var i =0;i<document.links.length; i++){
    if(document.links[i].href === document.URL){
        
        console.log(document.links[i].href)
        current=i
    }
}
document.links[current].setAttribute('class','current')


var bar = document.getElementsByClassName('bar')[0]
bar.addEventListener('click',menu)
var bars = document.getElementsByClassName('bars')[0]
bars.addEventListener('click',out)
var bars = document.getElementsByClassName('bars')[0]
var nav = document.getElementsByTagName('nav')[0]
var fff = document.getElementsByClassName('fff')[0]
var search = document.getElementsByClassName('search')[0]
function out(){
    bars.removeAttribute('id','barrs')
    nav.removeAttribute('class','menu')
    fff.removeAttribute('id','films')
    search.removeAttribute('id','pes')
}

function menu(){
   
    console.log(bars, fff,nav,search)
    search.setAttribute('id','pes')
    nav.setAttribute('class','menu')
    bars.setAttribute('id','barrs')
    fff.setAttribute('id','games')
}