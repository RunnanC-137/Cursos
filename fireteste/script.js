const TURMA = "TurmaA"

const Id = {
  igor:"hsQew0jwhYmP5Mu90N5t",
  bruno: "kbvV7X6xHCC1PK5FbAP8"
  
}
const h1 = document.querySelector(".first")
const h2 = document.querySelector(".second")

/* db.collection(TURMA).add({
  Bolono: {
    nota1: 8,
    nota2: 6
  }
}).then( doc => {
  console.log(doc)
}) */

getAluno(TURMA, Id.igor).then(aluno => h1.innerHTML = aluno.Igor.nota1)


onSnap(TURMA, Id.bruno)
db.collection(TURMA).where("Igor.nota1", "=", "6").get().then(e => console.log(e))

