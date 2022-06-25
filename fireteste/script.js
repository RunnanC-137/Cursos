const TURMA = "Turma-A"

const Id = {
  igor:"hsQew0jwhYmP5Mu90N5t",
  bruno: "kbvV7X6xHCC1PK5FbAP8"
  
}
const h1 = document.querySelector(".first")
const h2 = document.querySelector(".second")

/* db.collection(TURMA).add({
  nome: "Daniel",
  notas: {
    nota1: 8,
    nota2: 8
  },
}).then( doc => {
  console.log("aluno add")
}) */

//getAluno(TURMA, Id.igor).then(aluno => h1.innerHTML = aluno.Igor.nota1)


//onSnap(TURMA, Id.bruno)
/* db.collection(TURMA).where("notas.nota2", ">", 6).get()
.then(snapshot => snapshot.forEach(doc => console.log( doc.data()) )) */
whereAlunos(TURMA, "nome", "==", "Valeria").then(doc => console.log(doc))
