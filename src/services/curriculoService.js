import curriculoRepository from "../repositories/curriculoRepository.js";

async function mostrarCurriculos() {
    return await curriculoRepository.buscarTodos()
}

async function mostrarCurriculoEspecifico(id) {
    return await curriculoRepository.buscarPorId(id)
}

async function criarCurriculo(dados) {
    return await curriculoRepository.salvar(dados);
}

async function atualizarCurriculo(id, dados) {
    return await curriculoRepository.atualizarPorId(id, dados);
}

async function excluirCurriculo(id) {
    return await curriculoRepository.removerPorId(id);
}

export default {mostrarCurriculos, mostrarCurriculoEspecifico, criarCurriculo, atualizarCurriculo, excluirCurriculo}