const db = require('./connections');

class DriverQueries {
  fetchDriverProfile(driverId, callback) {
    const query = 'SELECT * FROM DriverProfile WHERE driver_id = ?';
    db.query(query, [driverId], callback);
  }

  fetchPersonalInfo(driverId, callback) {
    const query = 'SELECT * FROM PersonalInformation WHERE driver_id = ?';
    db.query(query, [driverId], callback);
  }

  fetchVerificationDocuments(driverId, callback) {
    const query = 'SELECT * FROM VerificationDocuments WHERE driver_id = ?';
    db.query(query, [driverId], callback);
  }

  fetchBankAccountDetails(driverId, callback) {
    const query = 'SELECT * FROM BankAccountDetails WHERE driver_id = ?';
    db.query(query, [driverId], callback);
  }

  fetchVerificationChecklist(callback) {
    const query = 'SELECT * FROM VerificationChecklist';
    db.query(query, [], callback);
  }
}

module.exports = new DriverQueries();
