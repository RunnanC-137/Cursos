const TURMA = "Turma-A"

const h1 = document.querySelector(".first")
const h2 = document.querySelector(".second")

let userEmail = "rolimdesa3@gmail.com"
let userPassword = "x122333"
let user = auth.currentUser

function newUserAdd(newUserEmail, newUserPassword) {
  auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
  .then(user => console.log(`user add com sucesso => ${user}`))
  .catch(error => console.log(error))
}

scan()

