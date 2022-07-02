const jq = $.noConflict() 
const log = console.log


jq("button").click( (e=true) => {
      
    jq("h2").fadeToggle(1500).animate(100)
    
})
//jq("h1").mousemove( e => col(e.target))
jq("body").mousemove(e => jq("h1").html(`${e.screenX}, ${e.screenY}`))