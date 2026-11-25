import entrevistaService from "../services/entrevistaService.js";
import curriculoService from "../services/curriculoService.js";

async function mostrarEntrevistas(req, res){
    let entrevistas = await entrevistaService.mostrarEntrevistas()
    res.send(entrevistas)
}

async function mostrarEntrevistaEspecifica(req, res){
    try{
    
    let entrevista = await entrevistaService.mostrarEntrevistaEspecifica(req.params.id)
    
    if(entrevista === null){
        return res.status(404).send({mensagem: "O ID não retornou nada"})
    }

    res.send(entrevista)
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

async function criarEntrevista(req, res){
    try{
        let entrevista = await entrevistaService.criarEntrevista(req.body)

        res.status(201).send({mensagem: "Entrevista criada com sucesso!"})
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

async function atualizarEntrevista(req, res){
    try{
        let entrevista = await entrevistaService.atualizarEntrevista(req.params.id, req.body)
    
        if(entrevista === null){
            return res.status(404).send({mensagem: "O ID não retornou nada"})
        }

        res.send({mensagem: "Entrevista atualizada com sucesso!"})
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

async function excluirEntrevista(req, res){
    try{
        let entrevista = await entrevistaService.excluirEntrevista(req.params.id)

        if(entrevista === null){
            return res.status(404).send({mensagem: "O ID não retornou nada"})
        }

        res.send({mensagem: "Entrevista removida com sucesso!"})
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

async function encontrarEntrevistaVagaAplicada(req, res){
    try{
        let curriculo = await curriculoService.mostrarCurriculoEspecifico(req.params.id)

        if(curriculo === null){
            return res.status(404).send({mensagem: "O ID não retornou nada"})
        }

        let entrevistas = await entrevistaService.encontrarEntrevistaVagaAplicada(curriculo.vaga)

        res.send(entrevistas)
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

export default {mostrarEntrevistas, mostrarEntrevistaEspecifica, criarEntrevista, atualizarEntrevista, excluirEntrevista, encontrarEntrevistaVagaAplicada}