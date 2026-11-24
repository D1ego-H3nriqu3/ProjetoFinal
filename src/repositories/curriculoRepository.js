import Curriculo from "../models/curriculo.js";

export async function buscarTodos() {
    return await Curriculo.find();
}

export async function buscarPorId(id) {
    return await Curriculo.findById(id);
}

export async function salvar(dados) {
    return await Curriculo.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Curriculo.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Curriculo.findByIdAndDelete(id);
}