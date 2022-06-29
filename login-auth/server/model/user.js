const connection = require ('../util/database')

module.exports = class User {
  constructor(name,contactNumber, email, password,status,role) {
    this.name = name;
    this.contactNumber= contactNumber;
    this.email = email;
    this.password = password;
    this.status = status;
    this.role = role;
  }

  static find(email) {
    return connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return connection.execute(
      "insert into user (name,contactNumber,email,password,status,role) values(?,?,?,?,'false','user')",
      [user.name,user.contactNumber,user.email,user.password]
    );
  }
};
