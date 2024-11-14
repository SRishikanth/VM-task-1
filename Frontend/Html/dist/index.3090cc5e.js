document.addEventListener("DOMContentLoaded", function() {
    const profileHeader = new ProfileHeader(document.querySelector(".profile-header"));
    const tabMenu = new TabMenu(document.querySelector(".tab-menu"));
    const personalInfoSection = new PersonalInfoSection(document.querySelector(".personal-info-section"));
    const vehicleInfo = new VehicleInfo(document.querySelector(".vehicle-info"));
    const documentsDetails = new DocumentsDetails(document.querySelector(".documents-details"));
    const bankDetails = new BankDetails(document.querySelector(".bank-details"));
    const verificationForm = new VerificationForm(document.querySelector(".verification-form"));
    // Render each component
    profileHeader.render();
    tabMenu.render();
    personalInfoSection.render();
    vehicleInfo.render();
    documentsDetails.render();
    bankDetails.render();
    verificationForm.render();
}); // import {Bankdetails} from "../UiComponents/BankDetails";
 // import {DocumentsDetails}

//# sourceMappingURL=index.3090cc5e.js.map
