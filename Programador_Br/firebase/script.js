const TURMA = "Turma-A"
const REF = "Referencias"


const h1 = document.querySelector(".first")
const h2 = document.querySelector(".second")
const ids = {}


const admim = { 
  ruan: {
    email:"ruanlons@gmail.com", 
    password:"x261433y"
  },
  rian: {
  email: "rolimdesa3@gmail.com",
  password: "x122333"
  }
}

let user = auth.currentUser



scan()

getAlunos(TURMA, true)
.then(doc=> doc.forEach(e => {
  const aluno = {}
  aluno[`${e[0].nome}`] = e[1]
  console.log(aluno)
}))
.catch(error => auth.onAuthStateChanged(user => {
  if(user){
    console.log(`USER DON'T HAVE PERMISSION\n${error}`)
  } else {
    console.log("Nenhum usuário logado")
  }
}));