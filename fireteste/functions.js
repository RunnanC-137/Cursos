async function getAlunos(colle) {
    const alunosCol = await db.collection(colle).get()
    const alunosList = alunosCol.docs.map(doc => doc.data());
    return alunosList
}
async function getAluno(colle, id) {
const doc = await db.collection(colle).doc(id).get()
return doc.data()
}

async function whereAlunos(colle, key, simbol, value) {}

async function onSnap(colle, id=false) {
    if (id != false){
        const base = await db.collection(colle).doc(id)
        base.onSnapshot( doc => console.log(doc.data()))
    } else {
        const base = await db.collection(colle)
        base.onSnapshot( snapshot => {
            snapshot.forEach( doc => console.log(doc.data()))
        })}
}


const setAluno = (colle, id, aluno, subscribe=false) => { 
    db.collection(colle).doc(id).set(aluno, {marge: subscribe})
}
const addAluno = (colle, aluno) => db.collection(colle).add(aluno)

const updateAluno = (colle, id, aluno) => db.collection(colle).doc(id).update(aluno)

const arrayAdd = firebase.firestore.FieldValue.arrayUnion
const arrayDel = firebase.firestore.FieldValue.arrayRemove
const sum = firebase.firestore.FieldValue.increment