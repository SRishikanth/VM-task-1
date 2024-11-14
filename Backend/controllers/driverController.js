const {
  fetchDriverProfile: getDriverProfileQuery,
  fetchPersonalInfo: getPersonalInfoQuery,
  fetchVerificationDocuments: getVerificationDocumentsQuery,
  fetchBankAccountDetails: getBankAccountDetailsQuery,
  fetchVerificationChecklist: getVerificationChecklistQuery,
} = require('../db/queries');

class DriverController {
  // Fetches driver profile based on the driver_id query parameter
  fetchDriverProfile(req, res) {
    const driverId = req.query.driver_id;
    if (!driverId) {
      return res.status(400).json({ error: 'Driver ID is required' });
    }

    getDriverProfileQuery(driverId, (err, result) => {
      if (err) return res.status(500).send('Server Error');
      if (result.length === 0) return res.status(404).json({ message: 'Driver not found' });
      res.json(result);
    });
  }

  fetchPersonalInfo(req, res) {
    const driverId = req.query.driver_id;
    getPersonalInfoQuery(driverId, (err, result) => {
      if (err) return res.status(500).send('Server Error');
      res.json(result);
    });
  }

  fetchVerificationDocuments(req, res) {
    const driverId = req.query.driver_id;
    getVerificationDocumentsQuery(driverId, (err, result) => {
      if (err) return res.status(500).send('Server Error');
      res.json(result);
    });
  }

  fetchBankAccountDetails(req, res) {
    const driverId = req.query.driver_id;
    getBankAccountDetailsQuery(driverId, (err, result) => {
      if (err) return res.status(500).send('Server Error');
      res.json(result);
    });
  }

  fetchVerificationChecklist(req, res) {
    getVerificationChecklistQuery((err, result) => {
      if (err) return res.status(500).send('Server Error');
      res.json(result);
    });
  }
}


module.exports = new DriverController();
