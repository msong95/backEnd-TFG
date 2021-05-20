const { Schema } = require("mongoose");

module.exports = {

    BrechaModel: new Schema(
      {
        username: String,
        id_brecha: String,
        brecha: String,
        fecha: Date
      },
      { timestamps: { createdAt: "created_at" } }
    )

}

