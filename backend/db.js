const mongoose = require("mongoose");
const { Schema } = mongoose;
const DataBase_URL =
  "mongodb+srv://srini624618:nzMgr8x45ggFUDRO@atlascluster.v1ayk1c.mongodb.net/paytm";

const DB_CONNECT = async () => {
  const connect = await mongoose
    .connect(DataBase_URL)
    .then(console.log("Connect to DB"))
    .catch((err) => {
      console.log(err);
    });
};
DB_CONNECT();

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const User = mongoose.model("User", userSchema);

const accountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);

module.exports.User = User;
module.exports.Account = Account;
