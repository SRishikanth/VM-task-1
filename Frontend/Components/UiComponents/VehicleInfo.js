// import vehicle_info from '../../Assets/Images/illustration@3x.png';

class VehicleInfo {
    constructor(container) {
        this.container = container;
    }

    render() {
        this.container.innerHTML = `
            <div class="title">Currently Assigned Vehicle Information</div>
            <div class="content">
                <div class="illustration">
                    <img src="../Assets/Images/illustration@3x.png" alt="No Vehicle Assigned" />
                </div>
                <div class="message">No Vehicle assigned / registered</div>
            </div>
        `;
    }
}


export default VehicleInfo;