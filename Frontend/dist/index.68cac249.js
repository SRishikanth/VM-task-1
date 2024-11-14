// import Driver_Profile from '/logo/group-28389@2x.png';
// import { API_BASE_URL } from '../../Config/Url';
class ProfileHeader {
    constructor(container){
        this.container = container;
        this.userName = "Loading...";
        this.fetchProfileData(); //this  -current instance of an object. It is used to access properties or methods that belong to the object in which the code is currently executing.
    }
    // Fetch profile data from API
    async fetchProfileData() {
        try {
            const driverId = "NOTDR001";
            const response = await fetch(`http://localhost:3000/api/driver-profile?driver_id=${driverId}`);
            let data = await response.json();
            data = data[0];
            console.log(data);
            // Update the class properties with the fetched data
            this.userName = data.name || "Unknown";
            this.lastUpdate = data.LastUpdate || "N/A";
            this.userId = data.driver_id || "N/A";
            this.experience = data.experience_years || "N/A";
            this.totalDistance = data.total_distance_km || "0 Km";
            this.totalHours = data.total_hours || "0h 0m";
            this.totalOfficeTrips = data.total_office_trips || "0";
            this.totalRegularTrips = data.total_regular_trips || "0";
            this.totalRevenue = data.total_revenue || "\u20B90";
            this.driverRevenue = data.driver_revenue || "\u20B90";
            this.totalVehiclesDriven = data.total_vehicles_driven || "0";
            this.joinedDate = data.joined_date || "N/A";
            // Re-render the component with updated data
            this.render();
        } catch (error) {
            console.error("Failed to fetch profile data:", error);
        }
    }
    // Render the component
    render() {
        this.container.innerHTML = `
            <div class="status-container">
                <div class="left">
                    <img src="../Assets/Images/group-28389@2x.png" alt="" width="30px" height="30px">
                </div>
                <div class="right">
                    <div class="status-button">
                        <span class="active-1"><img style="width: 20px; padding-right: 6px;" src="../Assets/Images/path-39207@2x.png" alt="">All Documents are up to date</span>
                    </div>
                    <div class="status-button">
                        <button class="active"> ACTIVE <img style="padding-left: 4px;" src="../Assets/Images/path-38334@2x.png" alt="" width="10px"></button>
                    </div>
                    <div class="icon-button">
                        <button class="pen"><img src="../Assets/Images/path-38491@2x.png" width="20px"></button>
                    </div>
                    <div class="icon-button">
                        <button class="del"><img src="../Assets/Images/path-38492@2x.png" width="20px"></button>
                    </div>
                </div>
            </div>

            <div class="user-info">
                <div class="img">
                    <img src="../Assets/Images/vmlogo.png.jpg" alt="User Profile Picture" class="logo">
                </div>
                <div class="name-txt">
                    <h3>${this.userName} <span class="sub-text">Last Update: ${this.lastUpdate}</span></h3>
                    <span class="NOTDR001">${this.userId}</span>
                </div>
            </div>

            <div class="row">
                <div class="lgo-1">
                    <img src="../Assets/Images/call.png" srcset="../Assets/Images/call2x.png, ../Assets/Images/call3x.png" class="Group-25526">
                    <img src="../Assets/Images/group-25527.png" srcset="../Assets/Images/group-25527@2x.png 2x, ../Assets/Images/group-25527@3x.png 3x" class="Group-25527">
                    <img src="../Assets/Images/group-25528.png" srcset="../Assets/Images/group-25528@2x.png 2x, ../Assets/Images/group-25528@3x.png 3x" class="Group-25528">
                    <img src="../Assets/Images/group-25529.png" srcset="../Assets/Images/group-25529@2x.png 2x, ../Assets/Images/group-25529@3x.png 3x" class="Group-25529">
                </div>
                <div class="lgo-2">
                        <button class="Driver">Driver Only</button>
                    <button class="Fleet">Fleet</button>
                    <button class="Office">Office Rides</button>
                    <button class="Travels">New Pandian Travels</button>
                    <button class="npt">NPT - HCL</button>
                    <button class="km">KM Based Payment</button>
                </div>
            </div>

            <div class="status-section">
                <div class="status-card">
                    <h3>${this.experience}</h3>
                    <p>Experience</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalDistance}</h3>
                    <p>Total Distance</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalHours}</h3>
                    <p>Total Hours</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalOfficeTrips}</h3>
                    <p>Total Office Trips</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalRegularTrips}</h3>
                    <p>Total Regular Trips</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalRevenue}</h3>
                    <p>Total Revenue</p>
                </div>
                <div class="status-card">
                    <h3>${this.driverRevenue}</h3>
                    <p>Driver Revenue</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalVehiclesDriven}</h3>
                    <p>Total Vehicles Driven</p>
                </div>
                <div class="status-card">
                    <h3>${this.joinedDate}</h3>
                    <p>Joined Date</p>
                </div>
            </div>
        `;
    }
}

//# sourceMappingURL=index.68cac249.js.map
