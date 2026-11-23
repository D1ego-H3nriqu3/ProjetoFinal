import mongoose from "mongoose";

let curriculoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome da pessoa que vai ao currículo é obrigatório!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "O email da pessoa que vai ao currículo é obrigatório!"],
        trim: true,
        lowercase: true
    },
    telefone: {
        type: String,
        required: [true, "O telefone da pessoa que vai ao currículo é obrigatório!"],
        trim: true,
    },
    dataNascimento: {
        type: Date,
        required: [true, "A data de nascimento da pessoa que vai ao currículo é obrigatório!"],
        max: [Date.now, "A data de nascimento tem que ser atual"],
        min: ["1900-01-01", "Ano mínimo: 1900"]
    },
    genero: {
        type: String,
        enum: {
            values: ["Masculino", "Feminino", "Outro", "Prefiro não dizer"],
            message: "{VALUE} não é um gênero válido!"
        },
        default: "Prefiro não dizer"
    },
    formacao: {
        type: String,
        enum: {
            values: ["Ensino medio incompleto", "Ensino medio completo", "Graduando",  "Ensino Superior completo"],
            message: "{VALUE} não é uma formação válida!"
        },
        default: "Ensino medio completo"
    },
    vaga: {
        type: String,
        enum: {
            values: ["Desenvolvimento de Software", "Segurança da Informação", "Projetos e Gerenciamento"],
            message: "{VALUE} não é uma vaga válida!"
        },
        default: "Desenvolvimento de Software"
    },
    detalhesDescricao : {
        type: String,
        trim: true,
        maxlength: [150, "Os detalhes e descrições devem ser breves, tendo no máximo 150 caracteres"],
        default: ""
    }},
{
    timestamps: true
})

let Curriculo = mongoose.model("Curriculo", curriculoSchema)

export default Curriculo