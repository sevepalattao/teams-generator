const employee = require('./employee');

class manager extends employee {
    constructor(name, email, id, officeNo) {
        super(name, email, id);
        this.officeNo = officeNo;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = manager;