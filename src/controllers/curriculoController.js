import curriculoService from "../services/curriculoService.js";

async function mostrarCurriculos(req, res){
    let curriculos = await curriculoService.mostrarCurriculos()
    res.send(curriculos)
}

async function mostrarCurriculoEspecifico(req, res){
    try{
    let curriculo = await curriculoService.mostrarCurriculoEspecifico(req.params.id)
    
    if(curriculo === null){
        return res.status(404).send({mensagem: "O ID não retornou nada"})
    }

    res.send(curriculo)
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

async function criarCurriculo(req, res){
    try{
        /*req.body.nome = req.usuario.nome
        req.body.email = req.usuario.email*/

        let curriculo = await curriculoService.criarCurriculo(req.body)

        res.status(201).send({mensagem: "Curriculo criado com sucesso!"})
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

async function atualizarCurriculo(req, res){
    try{
        delete req.body.nome
        delete req.body.email

        let curriculo = await curriculoService.atualizarCurriculo(req.params.id, req.body)
    
        if(curriculo === null){
            return res.status(404).send({mensagem: "O ID não retornou nada"})
        }

        res.send({mensagem: "Curriculo atualizado com sucesso!"})
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

async function excluirCurriculo(req, res){
    try{
        let curriculo = await curriculoService.excluirCurriculo(req.params.id)

        if(curriculo === null){
            return res.status(404).send({mensagem: "O ID não retornou nada"})
        }

        res.send({mensagem: "Curriculo removido com sucesso!"})
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

export default {mostrarCurriculos, mostrarCurriculoEspecifico, criarCurriculo, atualizarCurriculo, excluirCurriculo}