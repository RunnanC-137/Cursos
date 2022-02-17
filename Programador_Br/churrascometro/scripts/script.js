const resultado = document.querySelector(".resultado")
const calcular = document.querySelector(".calcular")
const inputs = document.querySelectorAll("input[type=number]")

///

function duracao (horas, comida="") {

    if ( horas != 0) {

        if (horas < 6 && comida == "carne") {
            return 0.4
        } else if (horas >= 6 && comida == "carne") {
            return 0.65
        }

        if (horas < 6 && comida == "refri") {
            return 1
        } else if (horas >= 6 && comida == "refri") {
            return 1.5
        }

        if (horas < 6 && comida == "cerveja") {
            return 1.2
        } else if (horas >= 6 && comida == "cerveja") {
            return 2
        }

    } else {

        return 0
    }
    

}

///

inputs.forEach( (valor, indice, arry) => {

    valor.addEventListener( "input", element => {
        valor.style = ``
    })

})
///
calcular.addEventListener( "click", element => {

    for (let index in inputs) {

        inputs[index].style = ``

        if (inputs[index].value == '') {
            
            inputs[index].style = `border: 3px solid red;`
            resultado.innerHTML = ''
            break

        } else {

            let aduto = Number(inputs[0].value)
            let crianca = Number(inputs[1].value)
            let horas = Number(inputs[2].value)
   
            let carne = Math.ceil( (aduto + crianca/2) * duracao(horas, "carne") )

            let cerveja = Math.round( aduto * duracao(horas, "cerveja") )
            
           let refrigerante = Math.round( (aduto + crianca/2) * duracao(horas, "refri") )

            console.log( aduto + crianca, horas)

            resultado.innerHTML = `<p>${carne}Kg de carne</p>
            <p>${cerveja}L de cerveja</p>
            <p>${refrigerante}L de refrigerante</p>`
        }
    }
})