const bcrypt = require('bcrypt');
module.exports = {
    port : 5000,
    sessionSecretKey : bcrypt.hashSync("SECRET_KEY", 2)
}