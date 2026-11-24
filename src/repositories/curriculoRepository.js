import Curriculo from "../models/curriculo.js";

async function buscarTodos() {
    return await Curriculo.find();
}

async function buscarPorId(id) {
    return await Curriculo.findById(id);
}

async function salvar(dados) {
    return await Curriculo.create(dados);
}

async function atualizarPorId(id, dados) {
    return await Curriculo.findByIdAndUpdate(id, dados);
}

async function removerPorId(id) {
    return await Curriculo.findByIdAndDelete(id);
}

export default {buscarTodos, buscarPorId,salvar, atualizarPorId,removerPorId}