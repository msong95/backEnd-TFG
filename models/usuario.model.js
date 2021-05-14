const { Schema } = require("mongoose");

const User = new Schema({
    id: String,
    username: String,
    email: String,
    password: String
  },
  { timestamps: { createdAt: 'created_at'} }
  )

module.exports = {
  User
}
