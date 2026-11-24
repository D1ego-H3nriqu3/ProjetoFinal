import mongoose from "mongoose";

let entrevistaSchema = new mongoose.Schema({
    vagaAplicada: {
        type: String,
        enum: {
            values: ["Desenvolvimento de Software", "Segurança da Informação", "Projetos e Gerenciamento"],
            message: "{VALUE} não é uma vaga válida!"
        },
        required: [true, "É necessário informar a vaga para qual a entrevista se aplica;"]
    },

    softSkills: {
        pergunta1: {
            type: String,
            default: "Como você explicaria um conceito técnico complexo (como uma falha de sistema, um bug crítico ou uma escolha de arquitetura) para um cliente ou membro da equipe que não é da área de tecnologia?"
        },
        pergunta2: {
            type: String,
            default: "O ecossistema de tecnologia muda constantemente. Conte-nos sobre uma vez em que você precisou aprender uma nova linguagem, framework ou ferramenta de última hora para um projeto. Como foi esse processo?"
        },
        pergunta3: {
            type: String,
            default: "Já aconteceu de você discordar de um colega de equipe sobre uma decisão de código, uma ferramenta ou a arquitetura de uma solução? Como você lidou com essa divergência?"
        },
        pergunta4: {
            type: String,
            default: "Descreva uma situação em que ocorreu um problema grave em produção (um sistema fora do ar ou um bug crítico perto de um lançamento). Como você lidou com o estresse e a pressão do momento?"
        },
        pergunta5: {
            type: String,
            default: "Em tecnologia, é comum termos múltiplos tickets, bugs e demandas chegando ao mesmo tempo com prazos apertados. Como você organiza suas tarefas e decide o que priorizar?"
        }
    },

    hardSkills: {
        pergunta6: {
            type: String,
            required: [true, "As perguntas de hardskills são obrigatórias de serem criadas!"],
            trim: true,
            maxlength: [200, "As perguntas podem ter no máximo 200 caracteres;"]
        },
        pergunta7: {
            type: String,
            required: [true, "As perguntas de hardskills são obrigatórias de serem criadas!"],
            trim: true,
            maxlength: [200, "As perguntas podem ter no máximo 200 caracteres;"]
        },
        pergunta8: {
            type: String,
            required: [true, "As perguntas de hardskills são obrigatórias de serem criadas!"],
            trim: true,
            maxlength: [200, "As perguntas podem ter no máximo 200 caracteres;"]
        },
        pergunta9: {
            type: String,
            required: [true, "As perguntas de hardskills são obrigatórias de serem criadas!"],
            trim: true,
            maxlength: [200, "As perguntas podem ter no máximo 200 caracteres;"]
        },
        pergunta10: {
            type: String,
            required: [true, "As perguntas de hardskills são obrigatórias de serem criadas!"],
            trim: true,
            maxlength: [200, "As perguntas podem ter no máximo 200 caracteres;"]
        }
    }},
{
    timestamps: true
}) 

const Entrevista = mongoose.model("Entrevista", entrevistaSchema)

export default Entrevista