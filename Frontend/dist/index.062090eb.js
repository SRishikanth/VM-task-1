class BankDetails {
    constructor(container){
        this.container = container;
        this.accountHolderName = "loading..";
        this.accountNumber = "";
        this.bankName = "";
        this.branchName = "";
        this.ifsCode = "";
        this.fetchBankDetails();
    }
    //Fetch BankDetails from API
    async fetchBankDetails() {
        try {
            const driverId = "NOTDR001";
            const response = await fetch(`http://localhost:3000/api/bank-account-details?driver_id=${driverId}`);
            // need to change
            let data = await response.json();
            data = data[0];
            console.log(data);
            // Update the class properties with the fetched data
            this.userName = data.name || "Unknown";
            this.accountHolderName = data.AccountHolderName || "N/A";
            this.accountNumber = data.AccountNumber || "N/A";
            this.bankName = data.BankName || "N/A";
            this.branchName = data.BranchName || "N/A";
            this.ifsCode = data.IFSC_Code || "N/A";
            // Re-render the component with updated data
            this.render();
        } catch (error) {
            console.error("Failed to fetch profile data:", error);
        }
    }
    render() {
        this.container.innerHTML = `
          
                <div class="title">Bank Account Details</div>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="icon">
                            <img src="logo/gender.png" alt="Account Holder Icon">
                        </div>
                        <div class="detail">
                            <span>Account Holder's Name</span>
                            <h3>${this.accountHolderName}</h3>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="icon">
                            <img src="logo/hash.png" alt="Account Number Icon">
                        </div>
                        <div class="detail">
                            <span>Account Number</span>
                            <h3>${this.accountNumber}</h3>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="icon">
                            <img src="logo/bank.png" alt="Bank Icon">
                        </div>
                        <div class="detail">
                            <span>Bank Name</span>
                            <h3>${this.bankName}</h3>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="icon">
                            <img src="logo/bank.png" alt="Branch Icon">
                        </div>
                        <div class="detail">
                            <span>Branch Name</span>
                            <h3>${this.branchName}</h3>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="icon">
                            <img src="logo/bank.png" alt="IFSC Icon">
                        </div>
                        <div class="detail">
                            <span>IFS Code</span>
                            <h3>${this.ifsCode}</h3>
                        </div>
                    </div>
                </div>
            
        `;
    }
}

//# sourceMappingURL=index.062090eb.js.map
