async function getAlunos(colle, id=false) {
    const alunosCol = await db.collection(colle).get()
    const alunosList = alunosCol.docs.map(doc => doc.data());
    if (id) {
        const alunosList = alunosCol.docs.map(doc => [doc.data(), doc.id]);
        return alunosList
    } else {
        return alunosList
    }
}
async function getAluno(colle, id) {
const doc = await db.collection(colle).doc(id).get()
return doc.data()
}

async function whereAlunos(colle, key, simbol, value) {

    const alunosCol = await db.collection(colle).where(key, simbol, value).get()
    const alunosList = alunosCol.docs.map(doc => doc.data());
    return alunosList
}

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
const del = firebase.firestore.FieldValue.delete

function newUser(newUserEmail, newUserPassword) {
    auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then(user => console.log(`user add com sucesso => ${user}`))
    .catch(error => console.log(error))
}

function login(userEmail, userPassword) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then( () => {
        auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then( () => console.log(auth.currentUser) )
        .catch( error => console.log(error) )
    }).catch( error => console.log(error) )
}

function logout() {
    auth.signOut()
    .then( () => console.log("usuário foi deslogado"))
    .catch( error => console.log(error))
}

function scan() {

    auth.onAuthStateChanged(user => {
        if(user){
          console.log("usuário logado")
        } else {
          console.log("Ninguem logado")
        }
    })
}