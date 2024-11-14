class DocumentsDetails {
    constructor(container){
        this.container = container;
        // Fetch data when initializing the component
        this.fetchDocumentDetails();
    }
    async fetchDocumentDetails() {
        try {
            const driverId = "NOTDR001";
            const response = await fetch(`http://localhost:3000/api/verification-documents?driver_id=${driverId}`);
            // domain should be commonly handled in config file dont hard code it also maintain all the url in a serpate file for each module 
            let data = await response.json();
            console.log(data);
            //  Update the class properties with the fetched data
            // if handled as json format in frontend there is no need for this 
            this.slno1 = data[0].SL_NO || "N/A";
            this.slno2 = data[1].SL_NO || "N/A";
            this.slno3 = data[2].SL_NO || "N/A";
            this.doctype1 = data[0].DOCUMENT_TYPE || "N/A";
            this.doctype2 = data[1].DOCUMENT_TYPE || "N/A";
            this.doctype3 = data[2].DOCUMENT_TYPE || "N/A";
            this.idno1 = data[0].ID_NO || "N/A";
            this.idno2 = data[1].ID_NO || "N/A";
            this.idno3 = data[2].ID_NO || "N/A";
            this.startdate1 = data[0].START_DATE || "N/A";
            this.startdate2 = data[1].START_DATE || "N/A";
            this.startdate3 = data[2].START_DATE || "N/A";
            this.expdate1 = data[0].EXPIRY_DATE;
            this.expdate2 = data[1].EXPIRY_DATE;
            this.expdate3 = data[2].EXPIRY_DATE;
            this.remainingdate1 = data[0].REMAINING_DAYS;
            this.remainingdate2 = data[1].REMAINING_DAYS;
            this.remainingdate3 = data[2].REMAINING_DAYS;
            this.status1 = data[0].STATUS;
            this.status2 = data[1].STATUS;
            this.status3 = data[2].STATUS;
            // Re-render the component with updated data
            this.render();
        } catch (error) {
            console.error("Failed to fetch profile data:", error);
        }
    }
    render() {
        this.container.innerHTML = `
            <div class="title">Verification Documents Details</div>
            <table>
                <thead>
                    <tr>
                        <th>SL NO</th>
                        <th>DOCUMENT TYPE</th>
                        <th>ID NO</th>
                        <th>START DATE</th>
                        <th>EXPIRY DATE</th>
                        <th>REMAINING DAYS</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${this.slno1}</td>
                        <td>${this.doctype1}</td>
                        <td>${this.idno1}</td>
                        <td>${this.startdate1}</td>
                        <td>${this.expdate1}</td>
                        <td><span class='color'>${this.remainingdate1}</span></td>
                        <td><span class="status active">${this.status1}</span></td>
                    </tr>
                    <tr>
                        <td>${this.slno2}</td>
                        <td>${this.doctype2}</td>
                        <td>${this.idno2}</td>
                        <td>${this.startdate2}</td>
                        <td>${this.expdate2}</td>
                        <td><span class='color'>${this.remainingdate2}</span></td>
                        <td><span class="status active">${this.status2}</span></td>
                    </tr>
                    <tr>
                        <td>${this.slno3}</td>
                        <td>${this.doctype3}</td>
                        <td>${this.idno3}</td>
                        <td>${this.startdate3}</td>
                        <td>${this.expdate3}</td>
                        <td><span class='color'>${this.remainingdate3}</span></td>
                        <td><span class="status active">${this.status3}</span></td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}

//# sourceMappingURL=index.887c3d45.js.map
