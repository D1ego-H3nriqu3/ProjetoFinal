import curriculoRepository from "./repositories/curriculoRepository.js";
import entrevistaRepository from "./repositories/entrevistaRepository.js";
import respostasRepository from "./repositories/respostasRepository.js";
import mongoose from "./config/conexao.js";

// -----Curriculo-----

/*curriculoRepository.salvar({
    nome: "Diego",
    email: "dh6451013@gmail.com",
    telefone: "(55) 42 99986-8742",
    dataNascimento: "2011-01-19",
    genero: "Masculino",
    formacao: "Ensino Médio incompleto",
    vaga: "Segurança da Informação",
    detalhesDescricao: "Teste..."
})

curriculoRepository.salvar({
    nome: "Maria",
    email: "Maria@gmail.com",
    telefone: "(55) 42 99916-9782",
    dataNascimento: "2005-10-30"
})

curriculoRepository.atualizarPorId("6b0584bef263ec91cc520ce2", {
    formacao: "Graduando"
})

curriculoRepository.removerPorId("6b05861d8717530fc3d16aa4")

let curriculos = await curriculoRepository.buscarTodos()
console.log(curriculos)

let curriculo = await curriculoRepository.buscarPorId("6b0584bef263ec91cc520ce2")
console.log(curriculo)*/

// -----Entrevista-----

/*entrevistaRepository.salvar({
    vagaAplicada: "Segurança da Informação",
    hardSkills: {
        pergunta6: "aijdnbgjfnkjvmksdlbvksdmlfvmkjfsdbsd,kvklfsdgkbl",
        pergunta7: "aijdnbgjfnkjvmksdlbvksdmlfvmkjfsdbsd,kvklfsdgkbl",
        pergunta8: "aijdnbgjfnkjvmksdlbvksdmlfvmkjfsdbsd,kvklfsdgkbl",
        pergunta9: "aijdnbgjfnkjvmksdlbvksdmlfvmkjfsdbsd,kvklfsdgkbl",
        pergunta10: "aijdnbgjfnkjvmksdlbvksdmlfvmkjfsdbsd,kvklfsdgkbl"
    }
})

entrevistaRepository.salvar({
    vagaAplicada: "Projetos e Gerenciamento",
    hardSkills: {
        pergunta6: "xbvjnydtnrtbnhyrtgbnhyrtmnt",
        pergunta7: "fxgznfydhgnmfydthgnythumkyrum",
        pergunta8: "aijdnbgjfnkjvmksdlbvksdmlfvmkjfsdbsd,kvklfsdgkbl",
        pergunta9: "fvgzn bfrtg bntgnytgnyhg",
        pergunta10: "aijdnbgjfnkjvmksdlbvksdmlfvmkjfsdbsd,kvklfsdgkbl"
    }
})

entrevistaRepository.atualizarPorId("6b058ae721b3d307982251b3", {
    hardSkills: {
    pergunta6: "cfdznfgsjdeenfydthgm ebhgrtjnytjnhrtrejnhtukmyrjndejus",
    pergunta9: "fareuvburenviokwefiojirtweuvnmeop   afkmijoprtwmbviybvy"
    }
})

entrevistaRepository.removerPorId("6b058ae721b3d307982251b3")

let entrevistas = await entrevistaRepository.buscarTodos()
console.log(entrevistas)

let entrevista = await entrevistaRepository.buscarPorId("6b05929b8c56e1abb6467a85")
console.log(entrevista)

let entrevistaEspecifica = await entrevistaRepository.encontrarEntrevistaVaga("Projetos e Gerenciamento")
console.log(entrevistaEspecifica)

// -----Respostas-----

respostasRepository.salvar({
    idEntrevista: "6b05929b8c56e1abb6467a85",
    softSkills: {
        resposta1: "dfsddf",
        resposta2: "dfsddf",
        resposta3: "dfsddf",
        resposta4: "dfsddf",
        resposta5: "dfsddf"
    },
    hardSkills: {
        resposta6: "dfsddf",
        resposta7: "dfsddf",
        resposta8: "dfsddf",
        resposta9: "dfsddf",
        resposta10: "dfsddf"
    } 
})

let respostas = await respostasRepository.buscarTodos()
console.log(respostas)

let resposta = await respostasRepository.buscarPorId("6b059cbd5cb0edeba7c53ebd")
console.log(resposta)*/

await mongoose.disconnect()