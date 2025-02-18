const express = require("express")
const app = express()
const PORT = 3000
let alunos = [
    {id:1, nome:'Andrei'},
    {id:2, nome:'Andrea'},
    {id:3, nome:'Anderson'},
    {id:4, nome:'Adriel'}
]

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})

app.get('/',(req,res) => {
    res.send("Minha aplicação node.js com express está funcionando")
})

app.get('/alunos',(req,res) => {
    res.json(alunos);
})

app.get('/alunos/:id',(req,res) => {
    const id = req.params.id;
    const aluno = alunos.find(a => a.id === parseInt(id))
    if(aluno){
        res.json(aluno)
    }else {
        res.status(400).json({message: "aluno não encontrado"})
    }
})

app.post('/alunos', (req, res) => {
    const novoAluno = { id: alunos.length + 1, nome: req.body.nome}
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
})

app.delete('/alunos/:id', (req,res) => {
    const id = parseInt(req.params.id)
    alunos = alunos.filter(aluno => aluno.id !== id)
    res.json({mensagem: `Aluno id:${id} excluido com sucesso`})
})

