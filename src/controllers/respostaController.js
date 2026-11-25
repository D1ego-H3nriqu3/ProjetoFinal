import respostasService from "../services/respostasService.js";
import entrevistaService from "../services/entrevistaService.js";

async function mostrarRespostas(req, res){
    let respostas = await respostasService.mostrarRespostas()
    res.send(respostas)
}

async function mostrarRespostaEspecifica(req, res){
    try{
    
    let respostas = await respostasService.mostrarRespostaEspecifica(req.params.id)
    
    if(respostas === null){
        return res.status(404).send({mensagem: "O ID não retornou nada"})
    }

    res.send(respostas)
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

async function enviarRespostas(req, res){
    try{
        let entrevista = await entrevistaService.mostrarEntrevistaEspecifica(req.params.id)
            
        if(entrevista === null){
            return res.status(404).send({mensagem: "O ID não retornou nada"})
        }

        req.body.idEntrevista = req.params.id

        let respostas = await respostasService.enviarRespostas(req.body)

        res.status(201).send({mensagem: "Respostas enviadas com sucesso!"})
    }catch(erro){
        res.status(400).send({erro: erro.message})
    }
}

export default {mostrarRespostas, mostrarRespostaEspecifica, enviarRespostas}