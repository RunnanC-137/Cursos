import {collection, getDocs, addDoc } from 'firebase/firestore/lite';
import {db} from "./config.js"

// Get a list of cities from your database
async function getAlunos(db) {
  const alunosCol = collection(db, 'TurmaA');
  const alunosSnapshot = await getDocs(alunosCol);
  const alunosList = alunosSnapshot.docs.map(doc => doc.data());
  return alunosList;
}

getAlunos(db)
.catch(error => console.log(error))
.then(doc => "")
/* .then(snapshot => {
    snapshot.forEach( doc => {
        console.log(doc.data())
    })
} ) */

async function getAluno(db, id=0) {
    const alunosCol = collection(db, 'TurmaA');
    const alunosSnapshot = await getDocs(alunosCol);
    
    const alunos = alunosSnapshot.docs.map(doc => doc.data())
    const alunosList = alunosSnapshot.docs.map(doc => [doc.data(), doc.id])
    
    if (id != 0) {
        let aluno 
        alunosList.forEach( e => {
            if (id == e[1]) {
                return aluno = e[0]
            } else {
                aluno = "[Error] id errado"
            }
        })
        return aluno
    } else {
        return alunos
    }
}



let id = "kbvV7X6xHCC1PK5FbAP8"
export let aluno = 0 
{
    await getAluno(db, id)
    .catch(error => console.log(error))
    .then(doc => console.log(doc))
}
/* .then(snapshot => {
    snapshot.forEach( doc => {
        console.log(doc.data())
    })
} ) */

