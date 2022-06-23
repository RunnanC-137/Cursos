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
.then(snapshot => {
    console.log(snapshot)
} )




/* .then(snapshot => {
    snapshot.forEach( doc => {
        console.log(doc.data())
    })
} ) */

