const DB = "mongodb+srv://userwester:wp@c!f!cb@western-ca7hl.azure.mongodb.net/westerndb?retryWrites=true&w=majority"
const SECRET = "wp@c!f!cb"

const config = {
  production: {
    public_url: 'http://localhost:3000',
    secret: SECRET,
    database: DB,
  },
  development: {
    public_url: 'http://localhost:3000',
    secret: SECRET,
    database: DB,
  },
  test: {
    public_url: 'http://localhost:3000',
    secret: SECRET,
    database: DB,
  },
  default: {
    public_url: 'http://localhost:3000',
    secret: SECRET,
    database: DB,
  },
};

function get(env) {
  return config[env] || config.default;
}

module.exports = get;
