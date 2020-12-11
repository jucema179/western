const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  user_first_name: String,
  user_last_name: String,
  user_email: { type: String, unique: true },
  user_password: { type: String, select: true },
  role: { type: Schema.Types.ObjectId, ref: 'Role' },
  user_reset_password_token: String,
  user_reset_password_expires: Number,
  user_active: Boolean,
  user_phone1: String,
  user_phone2: String,
}, {
  timestamps: true,
});

UsersSchema.pre('save', function hashPwd(next) {
  const user = this;
  if (!user.isModified('user_password')) return next();

  bcrypt.hash(user.user_password, 10, (err, hash) => {
    if (err) return next(err);
    user.user_password = hash;
    return next();
  });
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
