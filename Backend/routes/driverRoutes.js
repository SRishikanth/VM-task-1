const express = require('express'); // Express module handling HTTP requests
const {
  fetchDriverProfile,
  fetchPersonalInfo,
  fetchVerificationDocuments,
  fetchBankAccountDetails,
  fetchVerificationChecklist,
} = require('../controllers/driverController'); 

class DriverRoutes {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/driver-profile', fetchDriverProfile);
    this.router.get('/personal-info', fetchPersonalInfo);
    this.router.get('/verification-documents', fetchVerificationDocuments);
    this.router.get('/bank-account-details', fetchBankAccountDetails);
    this.router.get('/verification-checklist', fetchVerificationChecklist);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new DriverRoutes().getRouter();
