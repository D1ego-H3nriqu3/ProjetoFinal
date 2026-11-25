import respostasRepository from "../repositories/respostasRepository.js";

async function mostrarRespostas() {
    return await respostasRepository.buscarTodos()
}

async function mostrarRespostaEspecifica(id) {
    return await respostasRepository.buscarPorId(id)
}

async function enviarRespostas(dados) {
    return await respostasRepository.salvar(dados)
}

export default {mostrarRespostas, mostrarRespostaEspecifica, enviarRespostas}