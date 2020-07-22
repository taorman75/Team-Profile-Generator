// TODO: Write code to define and export the Employee class
const render = require("./htmlRenderer")

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName() {
    return this.name;
}
getid() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return "Employee";
}
}

module.exports = Employee

