import Respostas from "../models/respostas.js";

async function buscarTodos() {
    return await Respostas.find();
}

async function buscarPorId(id) {
    return await Respostas.findById(id);
}

async function salvar(dados) {
    return await Respostas.create(dados);
}

export  default {buscarTodos, buscarPorId,salvar}