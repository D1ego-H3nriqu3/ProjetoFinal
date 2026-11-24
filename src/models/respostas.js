import mongoose from "mongoose";

let respostasSchema = new mongoose.Schema({
    idEntrevista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entrevista",
        required: [true, "O ID é necessário para ligarmos as respostas a sua devida entrevista"],
    },

    softSkills: {
        resposta1: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        },
        resposta2: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        },
        resposta3: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        },
        resposta4: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        },
        resposta5: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        }
    },

    hardSkills: {
        resposta6: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        },
        resposta7: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        },
        resposta8: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        },
        resposta9: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        },
        resposta10: {
            type: String,
            required: [true, "As perguntas devem ser respondidas e preenchidas!"],
            trim: true,
            maxlength: [200, "As respostas podem ter no máximo 200 caracteres;"]
        }
    }}, 
{
    timestamps: true
})

const Respostas = mongoose.model("Respostas", respostasSchema)

export default Respostas