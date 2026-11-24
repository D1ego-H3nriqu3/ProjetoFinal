import Respostas from "../models/respostas.js";

export async function buscarTodos() {
    return await Respostas.find();
}

export async function buscarPorId(id) {
    return await Respostas.findById(id);
}

export async function salvar(dados) {
    return await Respostas.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Respostas.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Respostas.findByIdAndDelete(id);
}