const jq = $.noConflict() 
const log = console.log
const query = (element) => document.querySelector(element)

jq("button").click( (e=true) => {
      
    jq("h2").fadeToggle(1500)
    
})
//jq("h1").mousemove( e => col(e.target))
jq("body").mousemove(e => query("h1").innerHTML = `${e.screenX}, ${e.screenY}`)