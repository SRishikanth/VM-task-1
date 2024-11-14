import ProfileHeader from '../UiComponents/ProfileHeader.js';
import TabMenu from '../UiComponents/TabMenu.js';
import PersonalInfoSection from '../UiComponents/PersonalInfoSection.js';
import VehicleInfo from '../UiComponents/VehicleInfo.js';
import DocumentsDetails from '../UiComponents/DocumentsDetails.js';
import BankDetails from '../UiComponents/BankDetails.js';
import VerificationForm from '../UiComponents/VerificationForm.js';


document.addEventListener('DOMContentLoaded', function() {
    const profileHeader = new ProfileHeader(document.querySelector('.profile-header'));
    const tabMenu = new TabMenu(document.querySelector('.tab-menu'));
    const personalInfoSection = new PersonalInfoSection(document.querySelector('.personal-info-section'));
    const vehicleInfo = new VehicleInfo(document.querySelector('.vehicle-info'));
    const documentsDetails = new DocumentsDetails(document.querySelector('.documents-details'));
    const bankDetails = new BankDetails(document.querySelector('.bank-details'));
    const verificationForm = new VerificationForm(document.querySelector('.verification-form'));

    
    profileHeader.render();
    tabMenu.render();
    personalInfoSection.render();
    vehicleInfo.render();
    documentsDetails.render();
    bankDetails.render();
    verificationForm.render();
});


























































// import ProfileHeader from '../UiComponents/ProfileHeader.js';
// import TabMenu from '../UiComponents/TabMenu.js';
// import PersonalInfoSection from '../UiComponents/PersonalInfoSection.js';
// import VehicleInfo from '../UiComponents/VehicleInfo.js';
// import DocumentsDetails from '../UiComponents/DocumentsDetails.js';
// import BankDetails from '../UiComponents/BankDetails.js';
// import VerificationForm from '../UiComponents/VerificationForm.js';

// document.addEventListener('DOMContentLoaded', function() {
//     const profileHeader = new ProfileHeader(document.querySelector('.profile-header'));
//     const tabMenu = new TabMenu(document.querySelector('.tab-menu'));
//     const personalInfoSection = new PersonalInfoSection(document.querySelector('.personal-info-section'));
//     const vehicleInfo = new VehicleInfo(document.querySelector('.vehicle-info'));
//     const documentsDetails = new DocumentsDetails(document.querySelector('.documents-details'));
//     const bankDetails = new BankDetails(document.querySelector('.bank-details'));
//     const verificationForm = new VerificationForm(document.querySelector('.verification-form'));

//     // Render each component
//     profileHeader.render();
//     tabMenu.render();
//     personalInfoSection.render();
//     vehicleInfo.render();
//     documentsDetails.render();
//     bankDetails.render();
//     verificationForm.render();
// });
