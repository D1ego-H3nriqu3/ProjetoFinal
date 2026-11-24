import Entrevista from "../models/entrevista.js";

async function buscarTodos() {
    return await Entrevista.find();
}

async function buscarPorId(id) {
    return await Entrevista.findById(id);
}

async function salvar(dados) {
    return await Entrevista.create(dados);
}

async function atualizarPorId(id, dados) {
    return await Entrevista.findByIdAndUpdate(id, dados);
}

async function removerPorId(id) {
    return await Entrevista.findByIdAndDelete(id);
}

async function encontrarEntrevistaVaga(vaga) {
    return await Entrevista.find({vagaAplicada: vaga})
}

export default {buscarTodos, buscarPorId,salvar, atualizarPorId ,removerPorId, encontrarEntrevistaVaga}