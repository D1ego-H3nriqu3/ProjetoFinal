import entrevistaRepository from "../repositories/entrevistaRepository.js";

async function mostrarEntrevistas() {
    return await entrevistaRepository.buscarTodos()
}

async function mostrarEntrevistaEspecifica(id) {
    return await entrevistaRepository.buscarPorId(id)
}

async function criarEntrevista(dados) {
    return await entrevistaRepository.salvar(dados);
}

async function atualizarEntrevista(id, dados) {
    return await entrevistaRepository.atualizarPorId(id, dados);
}

async function excluirEntrevista(id) {
    return await entrevistaRepository.removerPorId(id);
}

async function encontrarEntrevistaVagaAplicada(vaga) {
    return await entrevistaRepository.encontrarEntrevistaVaga(vaga)
}

export default {mostrarEntrevistas, mostrarEntrevistaEspecifica, encontrarEntrevistaVagaAplicada, criarEntrevista, atualizarEntrevista, excluirEntrevista}