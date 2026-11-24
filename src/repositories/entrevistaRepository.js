import Entrevista from "../models/entrevista.js";

export async function buscarTodos() {
    return await Entrevista.find();
}

export async function buscarPorId(id) {
    return await Entrevista.findById(id);
}

export async function salvar(dados) {
    return await Entrevista.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Entrevista.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Entrevista.findByIdAndDelete(id);
}

export async function encontrarEntrevistaVaga(vaga) {
    return await Entrevista.find({vagaAplicada: vaga})
}