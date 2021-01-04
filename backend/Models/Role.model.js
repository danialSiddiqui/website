const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema ({
    RoleName: { type: String, required: true },
    RoleType: { type: String, required: true}


}, {
    timestamps: true,
  });
  const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;