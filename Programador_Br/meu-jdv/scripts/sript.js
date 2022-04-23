const grid = document.querySelector(".grid")



const escolhido = Math.round(Math.random() * 9)


for (let index = 0; index < 9; index++){

    grid.innerHTML += `<div class="quadrado"></div>`
}

window.onload = function () {

    

    const quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach(function (e) {


        e.addEventListener("click", (i) => {
            

            let num = Math.floor(Math.random() * quadrados.length)
            let escolhaCom = quadrados[num]

            verificador = false

            if (e.childElementCount < 1) {

                e.innerHTML = `<img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png8.png?w=640&ssl=1" alt="">`

                
                
                quadrados.forEach((o) => {

                    if (o.childElementCount == 0) {
                        verificador = true
                    }
                })
                console.log(verificador)
                
                if (escolhaCom.childElementCount > 0) {

                    while (escolhaCom.childElementCount == 1) {
                        
                        escolhaCom = quadrados[Math.floor(Math.random() *quadrados.length)]
                        
                        if (verificador == false) {
                            alert("deu velha")   
                            break
                        }
                    }  
                }
                
                if (verificador) {
                    escolhaCom.innerHTML = `<img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/logo-facebook-transparente2.png?resize=696%2C526&ssl=1" alt="">`
                } 


            }      
            
          
        })
    }) 
}

