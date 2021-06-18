const { Schema } = require("mongoose");

module.exports = {

    BrechaModel: new Schema(
      {
        email: String,
        id_brecha: String,
        titulo: String,
        resultado: String,
        solucion: String,
        fecha: String
      },
      { timestamps: { createdAt: "created_at" } }
    )

}

