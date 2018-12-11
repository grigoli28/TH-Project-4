const crypto = require("crypto");

// Secret word for encrypting user passwords
const SECRET = "ecommerce";

// @returns hash key
const encrypt = data =>
  crypto
    .createHmac("sha256", SECRET)
    .update(data)
    .digest("hex");

const passwordsMatch = (rawPassword, encryptedPassword) =>
  encrypt(rawPassword) === encryptedPassword;

module.exports = {
  encrypt,
  passwordsMatch,
};
