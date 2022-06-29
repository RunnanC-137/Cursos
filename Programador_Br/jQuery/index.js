const jq = $.noConflict() 
const log = console.log
const query = (element) => document.querySelector(element)
jq("h1").click( e => log(e))
//jq("h1").mousemove( e => col(e.target))
jq("body").mousemove(e => query("h1").innerHTML = `${e.screenX}, ${e.screenY}`)