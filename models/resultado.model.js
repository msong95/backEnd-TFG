const { Schema } = require("mongoose");

module.exports = {

    ResultadoModel: new Schema(
      {
        id: String,
        titulo: String,
        minimo: Number,
        maximo: Number,
        descripcion: String,
        descripcion: String
      },
      { timestamps: { createdAt: "created_at" } }
    )

}

