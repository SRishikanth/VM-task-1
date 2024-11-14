// import {API_BASE_URL}from "../../Config/Url";
class PersonalInfoSection {
    constructor(container){
        this.container = container;
        //default values
        this.name = "loading...";
        this.fetchPersonalData();
    }
    // Fetch profile data from API
    async fetchPersonalData() {
        try {
            const driverId = "NOTDR001";
            const response = await fetch(`http://localhost:3000/api/personal-info?driver_id=${driverId}`);
            let data = await response.json();
            data = data[0];
            console.log(data);
            // Update the class properties with the fetched data
            this.name = data.name || "Unknown";
            this.PhoneNumber = data.phone_number || "N/A";
            this.EmailAddress = data.email || "N/A";
            this.Gender = data.gender || "N/A";
            this.Age = data.age || "N/A";
            this.DateofBirth = data.date_of_birth || "N/A";
            this.Address = data.address || "N/A";
            this.AadharCardNo = data.aadhar_card_no || "N/A";
            this.PANCardNo = data.pan_card_no || "N/A";
            // Re-render the component with updated data
            this.render();
        } catch (error) {
            console.error("Failed to fetch personal data:", error);
        }
    }
    render() {
        this.container.innerHTML = `
            <div class="section-title">
                <h3>Personal Information</h3>
                <div class="line"></div>
            </div>
            <div class="info-content">
                <div class="info-header">
                    <h2>${this.name}</h2>
                </div>
                <div class="info-grid">
                    <div class="info-item">
                        <p>Phone Number<br><strong>${this.PhoneNumber}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Email Address<br><strong>${this.EmailAddress}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Gender<br><strong>${this.Gender}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Age<br><strong>${this.Age}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Date of Birth<br><strong>${this.DateofBirth}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Address<br><strong>${this.Address}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Aadhar Card No<br><strong>${this.AadharCardNo}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>PAN Card No<br><strong>${this.PANCardNo}</strong></p>
                    </div>
                </div>
            </div>
        `;
    }
}

//# sourceMappingURL=index.0fe5136c.js.map
